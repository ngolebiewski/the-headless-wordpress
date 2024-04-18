import React, { useEffect, useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';
import ParentPage from "./ParentPage";

const Page = ({ selectedPage, pageObject, pages }) => {
  const [pageArtworks, setPageArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPageArtworks = async () => {
      try {
        console.log("I am in the fetchPageArtworks useEffect getting: ", selectedPage)
        const response = await axios.get(`https://nickgolebiewski.com/wp-json/wp/v2/media?search=${selectedPage}-page&per_page=30`)
        setPageArtworks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchPageArtworks();
  }, [selectedPage]);

  useEffect(() => {
    console.log(pageArtworks);
    console.log(pageObject)
  }, [pageArtworks, pageObject]);

  const sanitizedContent = pageObject.content ? DOMPurify.sanitize(pageObject.content.rendered) : '';

  return (
    <>
      <div className="main-content">
        <h3 key="selectedPage" className="major-mono">
          {selectedPage}
        </h3>
        <div className="wp-wrapper">
          {sanitizedContent ? (<div className="wp-content" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />) : (<p></p>)}
        </div>

        {pageObject.parent === 0 ? (
          <>
            {console.log("I am a parent LOL!", pageObject.parent)}
            <ParentPage selectedPage={selectedPage} pageObject={pageObject} pages={pages} />
          </>
        ) : null }

        {isLoading ? (
          <p>Images Loading...</p>
        ) : pageArtworks.length > 0 ? (
          <div className="image-wrapper" id="sideways-scroller">
            {pageArtworks.map((art) => (
              <div className="art-card scroller-content">
                <img className="art-images" key={art.id} src={art.source_url} alt={art.alt_text} />
                <p className="art-caption art-title" dangerouslySetInnerHTML={{ __html: art.title.rendered }} />
              </div>
            ))}
          </div>) : (
          <p>{console.log(`image loading error: no images with "${selectedPage}-page"`)}</p>
        )}
      </div>
    </>
  );
};

export default Page;
