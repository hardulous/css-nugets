import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./Styles/Gallery.css"

import { useState } from 'react';

const GalleryPage = () => {

  const [Index, setIndex] = useState(-1);  

  const imageSlide = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F1.jpg?alt=media&token=936571ef-e46f-4ca1-9b21-fc99f9c78a08",
      title: "Entrance", description: "Check in and Check out steps to our club" 
    },
    
    {
      src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F2.jpg?alt=media&token=bdc041b1-373b-45b1-91ae-e2f500c3b846",
      title: "Inside View", description: "View of king's restaurant and bar" 
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F3.jpg?alt=media&token=c8feb948-594e-4d10-95c1-1f7ffdc19051",
      title: "Drinks and beverages", description: "Bar and drink place of our club" 
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F4.jpg?alt=media&token=76b0bcd2-92c1-4533-a7ad-038b6aa47b73",
        title: "DJ", description: "Dancing area" 
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F6.jpg?alt=media&token=d8b09921-3ada-4a70-9a6f-e9d2789d2fd9",
        title: "DJ", description: "Dancing area 2" 
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F7.jpg?alt=media&token=f96b6863-3ca0-4336-b224-c6be9ec7cd61",
        title: "Sitting area", description: "A seprate area for our customer to sit and have banter talks" 
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F8.jpg?alt=media&token=d71d20ea-c9e0-4bfb-882d-90a5f753a0ff",
        title: "Sitting area", description: "A seprate area for our customer to sit and have banter talks 2" 
    },
  ]

  const photos = [
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F1.jpg?alt=media&token=936571ef-e46f-4ca1-9b21-fc99f9c78a08',
        width: 400,
        height: 300
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F2.jpg?alt=media&token=bdc041b1-373b-45b1-91ae-e2f500c3b846',
        width: 100,
        height: 100
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F3.jpg?alt=media&token=c8feb948-594e-4d10-95c1-1f7ffdc19051',
        width: 400,
        height: 300
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F4.jpg?alt=media&token=76b0bcd2-92c1-4533-a7ad-038b6aa47b73',
        width: 800,
        height: 600
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F6.jpg?alt=media&token=d8b09921-3ada-4a70-9a6f-e9d2789d2fd9',
        width: 100,
        height: 100
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F7.jpg?alt=media&token=f96b6863-3ca0-4336-b224-c6be9ec7cd61',
        width: 400,
        height: 300
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2F8.jpg?alt=media&token=d71d20ea-c9e0-4bfb-882d-90a5f753a0ff',
        width: 600,
        height: 400
    }
  ]
  
  return (

    <>
    
    <PhotoAlbum
        layout="rows"
        photos={photos}
        columns={(containerWidth) => {
            if (containerWidth < 400) return 2;
            if (containerWidth < 800) return 3;
            return 4;
        }}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: "lazy" } }}
      />

      <Lightbox
        open={Index >= 0}
        index={Index}
        close={() => setIndex(-1)}
        slides={imageSlide}
        plugins={[Captions,Fullscreen,Slideshow,Thumbnails]}

        thumbnails = {
            {
                borderRadius:10
            }
        }
      />
    
    </>

  )

}

export default GalleryPage