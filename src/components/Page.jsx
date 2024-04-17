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
        const response = await axios.get(`https://nickgolebiewski.com/wp-json/wp/v2/media?search=${selectedPage}&per_page=30`)
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
  }, [pageArtworks,pageObject]);

  const sanitizedContent = pageObject.content ? DOMPurify.sanitize(pageObject.content.rendered) : '';

  return (
    <>
      <h5 key="{selectedPage" className="major-mono">
        {selectedPage}
      </h5>
      {sanitizedContent ? (<div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />):(<p></p>)}

      {isLoading ? (
        <p>Images Loading...</p>
      ) : pageArtworks.length > 0 ? (
        pageArtworks.map((art) => (
          <>
            <img key={art.id} src={art.source_url} alt={art.alt_text} width="50%" />
            {/* <p>{art.title.rendered}</p> */}
          </>
        ))
      ) : (
        <p>No images found for this page.</p>
      )}
    </>
  );
};

export default Page;
