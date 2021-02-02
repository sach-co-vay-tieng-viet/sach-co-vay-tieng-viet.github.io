/* eslint-disable no-console */
import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { AppContext } from './App';
import useSWR from 'swr';
import { Link } from 'react-router-dom';

const PageContent: FunctionComponent = () => {
  const { bookInfo, chapterInfo, next, prev } = React.useContext(AppContext);
  const { data } = useSWR<string>(`/books/${bookInfo?.path}/${chapterInfo?.path}.md`);

  React.useEffect(() => window.scrollTo(0, 0), [chapterInfo]);

  return (
    <div className="content">
      {data ? (
        <>
          <ReactMarkdown allowDangerousHtml>{data}</ReactMarkdown>
          <div className="bottom_navigation">
            {prev ? (
              <Link to={`/${bookInfo?.path}/${prev.path}`} className="bottom_navigation_prev">
                ← Chương trước
              </Link>
            ) : (
              <span></span>
            )}
            {next ? (
              <Link to={`/${bookInfo?.path}/${next.path}`} className="bottom_navigation_next">
                Chương sau →
              </Link>
            ) : (
              <span></span>
            )}
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageContent;
