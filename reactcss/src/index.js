import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactSidebar from './ReactSidebar';
// import ReactModal from './ReactModal.js'
// import ReactImageSlider from './ReactImageSlider.js'
import ReactSlick from './ReactSlick.js';

// import css 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    {/* 1.React Side Bar */}
    {/* <ReactSidebar /> */}
    
    {/* 2.React Modal */}
     {/* <ReactModal/> */}

     {/* 3.React Image Slider */}
     {/* <ReactImageSlider/> */}
     
     {/* 4.React Translate Coursal */}
     <ReactSlick/>

  </React.StrictMode>

);

