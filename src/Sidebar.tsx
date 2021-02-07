import React, { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from './App';
import { ChapterInfo } from './model/ChapterInfo';
import logo from './logo.svg';

const Sidebar: FunctionComponent = () => {
  const { chapterPath } = useParams<{ bookPath?: string; chapterPath?: string }>();
  const { bookInfo, chapters } = React.useContext(AppContext);

  const renderChapter = React.useCallback(
    (chapter: ChapterInfo) => (
      <li key={chapter.path + chapter.title}>
        <div>
          {chapter.path ? (
            <Link to={`/${bookInfo?.path}/${chapter.path}`} className={chapterPath === chapter.path ? 'active' : ''}>
              {chapter.title}
            </Link>
          ) : (
            chapter.title
          )}
          {chapter.subchapters && chapter.subchapters.length > 0 && <ul>{chapter.subchapters.map(renderChapter)}</ul>}
        </div>
      </li>
    ),
    [bookInfo?.path, chapterPath]
  );

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} style={{ width: 64, margin: 0 }} />
      </Link>
      <h2 style={{ margin: '1rem 0' }}>{bookInfo?.title}</h2>
      <ul>{chapters?.map(renderChapter)}</ul>
    </div>
  );
};

export default Sidebar;
