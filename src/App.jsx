import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Page from './components/Page';
import SubHeader from './components/SubHeader';

function App() {
const [pages, setPages] = useState([]);
const [oneLiner, setOneLiner] = useState("");
const [selectedPage, setSelectedPage] = useState(["hero"]);
const [topLevelMenu, setTopLevelMenu] = useState([]);
const [pageObject, setPageObject] = useState({});

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

    fetchPages();
    fetchOneLiner();
  }, []);

  useEffect(() => {
    console.log(pages);
    // Get top level menu items
    if (!topLevelMenu) {
      const menuElems = 
      setTopLevelMenu(menuElems)
    }

  }, [pages]);

////////////////////////////////////////////////////////////////////////////


  return (
    <>
      <div className="wrapper">
        <div className="content">
          <Header pages={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} pageObject={pageObject} setPageObject={setPageObject}></Header>
          <SubHeader pages={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} pageObject={pageObject} setPageObject={setPageObject}></SubHeader>
          <Home />
          <Page selectedPage={selectedPage} pageObject={pageObject} ></Page>
          <Footer oneLiner={oneLiner}/>
        </div>
      </div>
    </>
  )
}

export default App
