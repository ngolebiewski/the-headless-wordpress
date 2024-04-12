import { useEffect, useState } from "react";
import axios from 'axios';

const Page = () => {
  const [pageArtworks, setPageArtworks] = useState([]);

  useEffect(() => {
    const fetchPageArtworks = async () => {
      try {
        const response = await axios.get("https://nickgolebiewski.com/wp-json/wp/v2/media?search=street-vendors&per_page=100")
        setPageArtworks(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPageArtworks();
  }, [])

  useEffect(() => {
    console.log(pageArtworks);
  }, [pageArtworks]);

  return (
    <>
      {pageArtworks && pageArtworks.length > 0 ? (
        pageArtworks.map((art) => (
          <img key={art.id} src={art.source_url} alt={art.alt_text} width="50%"/>
        ))
      ) : (
        <p>Images Loading...</p>
      )}
    </>
  )
}

export default Page;
