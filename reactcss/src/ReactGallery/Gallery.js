import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const Gallery = () => {

  const [open, setopen] = useState(false);

  return (

    <>

      <button
        onClick={() => {
          setopen(!open);
        }}
      >
        Open Gallery
      </button>

      <Lightbox

        styles={
            
            { container: { backgroundColor: "black" }, 
            
        }}

        open={open}
        close={() => setopen(false)}
        slides={[
          {
            src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Fclub-logo-fin.png?alt=media&token=c4b0c474-2a8f-457c-b48f-8efa7f8bc91a",
            title: "Slide title", description: "Slide description" 
          },
          
          {
            src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Ficon-dj.png?alt=media&token=427840a1-63c1-4282-87fd-78f8638471c4",
            title: "Slide title", description: "Slide description" 
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Fclub-imageTwo.png?alt=media&token=40d90387-7b21-42c2-a222-cba66b9fdfc8",
            title: "Slide title", description: "Slide description" 
          },
        ]}
        
        plugins={[Captions,Fullscreen,Slideshow,Thumbnails]}

        thumbnails = {
            {
                borderRadius:10
            }
        }

      />

    </>
  );
};

export default Gallery;
