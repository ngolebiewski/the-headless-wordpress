import React from 'react';

const SubHeader = ({ pages, selectedPage, setSelectedPage, setPageObject, pageObject }) => {
  const handlePageClick = (pageSlug, page) => {
    
    setSelectedPage(pageSlug);
    setPageObject({});
    setPageObject(page);
    console.log("selected page from Header.jsx: ", selectedPage);
    console.log("selected page object from Header.jsx: ", pageObject);
  };

  return (
    <header className="shadow-bottom">
      <div className="navigation sub-header">
        <div className="main-menu">
          {pages && pages.length > 0 ? (
            pages.map((page) => (
              <button
                className="shadow-bottom hacker-font"
                key={page.id}
                onClick={() => handlePageClick(page.slug, page)}
              >
                {page.title.rendered.toUpperCase()}
              </button>
            ))
          ) : (
            <p>No pages available</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
