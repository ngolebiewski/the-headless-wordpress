import React, { useEffect, useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';

const Page = ({ selectedPage, pageObject }) => {
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
        {sanitizedContent ? (<div className="wp-content" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />) : (<p></p>)}

        {isLoading ? (
          <p>Images Loading...</p>
        ) : pageArtworks.length > 0 ? (
          pageArtworks.map((art) => (
            <>
              <img className="art-images" key={art.id} src={art.source_url} alt={art.alt_text} />
              {/* <p dangerouslySetInnerHTML={{__html: art.title.rendered}} /> */}
            </>
          ))
        ) : (
          <p>{console.log(`image loading error: no images with "${selectedPage}-page"`)}</p>
        )}
      </div>
    </>
  );
};

export default Page;
