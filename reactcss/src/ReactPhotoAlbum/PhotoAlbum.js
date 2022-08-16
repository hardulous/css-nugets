import React from 'react'
import PhotoAlbum from "react-photo-album";

const Album = () => {

  const photos = [
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Fclub-logo-fin.png?alt=media&token=c4b0c474-2a8f-457c-b48f-8efa7f8bc91a',
        width: 400,
        height: 300
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Ficon-dj.png?alt=media&token=427840a1-63c1-4282-87fd-78f8638471c4',
        width: 100,
        height: 100
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Fclub-imageTwo.png?alt=media&token=40d90387-7b21-42c2-a222-cba66b9fdfc8',
        width: 400,
        height: 300
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Fclub-logo-fin.png?alt=media&token=c4b0c474-2a8f-457c-b48f-8efa7f8bc91a',
        width: 800,
        height: 600
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Ficon-dj.png?alt=media&token=427840a1-63c1-4282-87fd-78f8638471c4',
        width: 100,
        height: 100
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Fclub-imageTwo.png?alt=media&token=40d90387-7b21-42c2-a222-cba66b9fdfc8',
        width: 400,
        height: 300
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/fir-learning-ab0c8.appspot.com/o/images%2Fclub-logo-fin.png?alt=media&token=c4b0c474-2a8f-457c-b48f-8efa7f8bc91a',
        width: 600,
        height: 400
    }
  ]  

  return (
    <>
      <h1>PHOTO ALBUM</h1>
      <PhotoAlbum
      
      layout="rows" 
      photos={photos} 
      padding={20}
      onClick={(event, photo, index) => { 
        console.log(photo,index)
       }}

      />
    
    </>
  )
}

export default Album