import React, { useEffect, useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';

const ParentPage = ({ selectedPage, pageObject, pages }) => {
  const [featuredImages, setFeaturedImages] = useState([]);
  const [featuredArtworks, setFeaturedArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const pageShoutOuts = [];
    console.log('parentpageuseeffect')
    if (pages && pages.length > 0) {
      pages.forEach((page) => {

        if (page.parent === pageObject.id) {
          console.log("IN IT!!!!!!")
          const childPageInfo = {
            pageID: page.id,        //number
            pageTitle: page.slug,   //string
            featuredImage: page.featured_media,    //number
            featuredImageURL: "",   //string "url..."
          }
          console.log(childPageInfo)
          pageShoutOuts.push(childPageInfo)
        }
      })
    }


    const fetchFeaturedImages = async () => {
      try {
        const response = await axios.get(`https://nickgolebiewski.com/wp-json/wp/v2/media/${featuredImage}`)
        return response.
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchFeaturedImages();
  }, []);

  // useEffect(() => {
  //   console.log(pageArtworks);
  //   console.log(pageObject)
  // }, [pageArtworks, pageObject]);

  // const sanitizedContent = pageObject.content ? DOMPurify.sanitize(pageObject.content.rendered) : '';


  // {pages && pages.length > 0 ? (
  //   pages.map((page) => {

  //     if (page.parent === pageObject.id) {
  //       console.log("SUB MENU-->parent page: ", page.parent, "page.id: ", page.id, "page title: ", page.slug)
  //       return (
  //         <button
  //           className="shadow-bottom hacker-font"
  //           key={page.id}
  //           onClick={() => handlePageClick(page.slug, page)}
  //         >
  //           {page.title.rendered.toUpperCase()}
  //         </button>
  //       );
  //     }
  //     return null;
  //   })


  return (
    <>

      {/* <div className="wp-wrapper">
        {sanitizedContent ? (<div className="wp-content" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />) : (<p></p>)}
      </div>

      {isLoading ? (
        <p>Images Loading...</p>
      ) : pageArtworks.length > 0 ? (
        <div className="image-wrapper">
          {pageArtworks.map((art) => (
            <div className="art-card">
              <img className="art-images" key={art.id} src={art.source_url} alt={art.alt_text} />
              <p className="art-caption art-title" dangerouslySetInnerHTML={{ __html: art.title.rendered }} />
            </div>
          ))}
        </div>) : (
        <p>{console.log(`NOT getting any childen pages here. Goodbye.`)}</p>
      )} */}
    </>
  );
};

export default ParentPage;
