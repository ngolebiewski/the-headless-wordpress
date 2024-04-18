import React from 'react';

const Header = ({ pages, selectedPage, setSelectedPage, setPageObject, pageObject }) => {
  const handlePageClick = (pageSlug, page) => {

    setSelectedPage(pageSlug);
    setPageObject({});
    setPageObject(page);
    console.log("selected page from Header.jsx: ", selectedPage);
    console.log("selected page object from Header.jsx: ", pageObject);
  };

  return (
    <header className="shadow-bottom">
      <div className="navigation">
        <h1 className="major-mono">Nick Golebiewski</h1>
        <div className="main-menu">
          {pages && pages.length > 0 ? (
            pages.map((page) => {
              console.log("parent page: ", page.parent, "page.id: ", page.id, "page title: ", page.slug)
              if (page.parent === 0) {
                return (
                  <button
                    className="shadow-bottom hacker-font"
                    key={page.id}
                    onClick={() => handlePageClick(page.slug, page)}
                  >
                    {page.title.rendered.toUpperCase()}
                  </button>
                );
              }
              return null;
            })
          ) : (
            <p>Navigation loading...</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
