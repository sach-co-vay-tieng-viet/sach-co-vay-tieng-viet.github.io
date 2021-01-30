import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookInfo } from './model/BookInfo';
import { ChapterInfo } from './model/ChapterInfo';
import PageContent from './PageContent';
import books from './books.json';
import Sidebar from './Sidebar';
import useSWR from 'swr';
import { Helmet } from 'react-helmet';

interface AppContextInterface {
  bookInfo?: BookInfo;
  chapters?: ChapterInfo[];
  chapterInfo?: ChapterInfo;
  next?: ChapterInfo | null;
  prev?: ChapterInfo | null;
}

export const AppContext = React.createContext<AppContextInterface>({
  bookInfo: undefined,
  chapterInfo: undefined,
});

const App: FC = () => {
  const { bookPath, chapterPath } = useParams<{ bookPath?: string; chapterPath?: string }>();

  const bookInfo = React.useMemo(() => books.find((b) => b.path === bookPath), [bookPath]);

  const { data: chapterInfos = [] } = useSWR<ChapterInfo[]>(bookPath ? `/books/${bookPath}/chapters.json` : null, {
    fetcher: (url) => fetch(url).then((r) => r.json()),
  });
  // eslint-disable-next-line no-console
  console.log(chapterInfos);
  const findChapterInfo = React.useCallback((path: string, chapters: ChapterInfo[]): ChapterInfo | undefined => {
    if (path === '') return undefined;

    for (const chapter of chapters) {
      if (chapter.path === path) return chapter;
      else if (chapter.subchapters && chapter.subchapters.length > 0) {
        const sub = findChapterInfo(path, chapter.subchapters);
        if (sub !== undefined) return sub;
      }
    }

    return undefined;
  }, []);

  const findFirstChapter = React.useCallback((chapters: ChapterInfo[]): ChapterInfo | undefined => {
    for (const chapter of chapters) {
      if (chapter.path) return chapter;
      else if (chapter.subchapters && chapter.subchapters.length > 0) {
        const sub = findFirstChapter(chapter.subchapters);
        if (sub !== undefined) return sub;
      }
    }

    return undefined;
  }, []);

  const chapterInfo = React.useMemo(
    () => findChapterInfo(chapterPath || '', chapterInfos) || findFirstChapter(chapterInfos),
    [chapterPath, chapterInfos, findChapterInfo, findFirstChapter]
  );

  const flatenChapters = React.useCallback((chapters: ChapterInfo[]): ChapterInfo[] => {
    return chapters.reduce((r, chapter) => {
      if (chapter.path && chapter.subchapters) return [...r, chapter, ...flatenChapters(chapter.subchapters)];
      else if (chapter.path) return [...r, chapter];
      else if (chapter.subchapters) return [...r, ...flatenChapters(chapter.subchapters)];
      else return r;
    }, [] as ChapterInfo[]);
  }, []);

  const flatened = React.useMemo(() => flatenChapters(chapterInfos), [chapterInfos, flatenChapters]);
  const currentIndex = React.useMemo(() => flatened.findIndex((c) => c.path === chapterInfo?.path), [
    chapterInfo,
    flatened,
  ]);

  const next = React.useMemo(() => {
    return currentIndex < flatened.length - 1 ? flatened[currentIndex + 1] : null;
  }, [currentIndex, flatened]);

  const prev = React.useMemo(() => {
    return currentIndex > 0 ? flatened[currentIndex - 1] : null;
  }, [currentIndex, flatened]);

  return (
    <AppContext.Provider value={{ bookInfo, chapterInfo, chapters: chapterInfos, next, prev }}>
      <Helmet>
        <title>{bookInfo ? `${bookInfo.title} | Sách cờ vây tiếng Việt` : 'Sách cờ vây tiếng Việt'}</title>
      </Helmet>
      <div className="App">
        {!bookPath ? (
          <div className="book-list">
            {books.map((book) => (
              <div key={book.path} className="book-cover">
                <Link to={`/${book.path}`} key={book.path}>
                  <img src={book.cover} alt={book.title} width="200px" />
                  {book.title}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <>
            <Sidebar />
            <PageContent />
          </>
        )}
      </div>
    </AppContext.Provider>
  );
};

export default App;
