import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PageList() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get('https://nickgolebiewski.com/wp-json/wp/v2/pages');
        setPages(response.data);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };

    fetchPages();
  }, []);

  return (
    <div>
      {/* <h2>Pages:</h2>
      <ul>
        {pages.map(page => (
          <li key={page.id}>{page.title.rendered}</li>
        ))}
      </ul> */}
      <img className="hero-image" src="https://nickgolebiewski.com/wp-content/uploads/2014/06/Grand-Street-gouache1.jpg" />
    </div>
  );
}

export default PageList;
