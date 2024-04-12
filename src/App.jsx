import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Page from './components/Page';

function App() {
const [pages, setPages] = useState([]);
const [oneLiner, setOneLiner] = useState("");
// const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get('https://nickgolebiewski.com/wp-json/wp/v2/pages');
        setPages(response.data);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };

    const fetchOneLiner = async () => {
    try {
      const response = await axios.get('https://nickgolebiewski.com/wp-json/');
      setOneLiner(response.data.description);
    } catch (error) {
      console.error('Error fetching One Liner:', error);
    }
  };

    // const fetchArtworks = async () => {
    //   try {
    //     const response = await axios.get('https://nickgolebiewski.com/wp-json/wp/v2/media?media_type=image');
    //     setPages(response.data);
    //   } catch (error) {
    //     console.error('Error fetching pages:', error);
    //   }
    // };

    fetchPages();
    fetchOneLiner();
  }, []);


////////////////////////////////////////////////////////////////////////////


  return (
    <>
      <div className="wrapper">
        <div className="content">
          <Header pages={pages}></Header>
          <Home />
          <Page />
          <Footer oneLiner={oneLiner}/>
        </div>
      </div>
    </>
  )
}

export default App
