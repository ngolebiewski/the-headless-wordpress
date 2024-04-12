const Header = ({ pages, selectedPage, setSelectedPage }) => {
  return (
    <header className="shadow-bottom">
      <div className="navigation">
        <h1 className="major-mono">Nick Golebiewski</h1>
        <div className="main-menu">
          {pages && pages.length > 0 ? (
            pages.map((page) => (
              <button className="shadow-bottom hacker-font" key={page.id}>{page.title.rendered}</button>
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
