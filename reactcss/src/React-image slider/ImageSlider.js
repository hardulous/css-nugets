import React , {useState} from 'react'
import { SliderData } from './SliderData'
import './Styles/ImageSlider.css'

const ImageSlider = () => {
  
  // here the state which will hold the current index of image 
  const [current, setcurrent] = useState(0);  
  const length = SliderData.length;
  
  // if no image is present then simply return 
  if(!Array.isArray(SliderData) || SliderData.length<=0 ){
    return null
  }
 
  const prevSlide = ()=>{
    setcurrent( current === 0 ? length-1 : current-1 )
  }

  const nextSlide =()=>{
    setcurrent( current === length-1 ? 0 : current+1 )
  }

  console.log(current)

  return (

    <>
    
      <div className="slider">

        <div className="leftArrow" onClick={prevSlide}>&#8592;</div>
        <div className="rightArrow" onClick={nextSlide}>&#8594;</div>
        
        {
          SliderData.map((img,i)=>{
           
            return <div className={`image ${current===i?'active':''} `}  key={i} style={
                {
                    backgroundImage: `url(${img.image})`
                }
            } >
            </div>
            
          })
        }

      </div>
    
    </>

  )

}

export default ImageSlider