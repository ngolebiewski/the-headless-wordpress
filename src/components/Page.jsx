import React, { useEffect, useState } from "react";
import axios from 'axios';

const Page = ({ selectedPage }) => {
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
  }, [pageArtworks]);

  return (
    <>
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
