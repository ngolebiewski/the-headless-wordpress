import React from 'react';

const Header = ({ pages, selectedPage, setSelectedPage }) => {
  const handlePageClick = (pageSlug) => {
    setSelectedPage(pageSlug);
    console.log(selectedPage);
  };

  return (
    <header className="shadow-bottom">
      <div className="navigation">
        <h1 className="major-mono">Nick Golebiewski</h1>
        <div className="main-menu">
          {pages && pages.length > 0 ? (
            pages.map((page) => (
              <button
                className="shadow-bottom hacker-font"
                key={page.id}
                onClick={() => handlePageClick(page.slug)}
              >
                {page.title.rendered}
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

export default Header;
