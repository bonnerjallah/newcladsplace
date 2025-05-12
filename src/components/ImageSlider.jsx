import React from 'react'
import { useEffect, useState } from 'react'

import homestyle from "../styles/homestyle.module.css"



//Image Slider
const ImageSlider = ({imageUrls}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const showPrevImage = () => {
      setCurrentIndex(index => {
        if(index === 0) return imageUrls.length -1
        return index -1
      })
    }
  
    const showNextImage = () => {
      setCurrentIndex(index => {
        if(index === imageUrls.length - 1) return 0
        return index + 1
      })
    }
  
    const autoAdvanceSlider = () => {
      showNextImage()
    }
  
    useEffect(() => {
      const intervalId = setInterval(autoAdvanceSlider, 10000)
  
      return () => {
        clearInterval(intervalId)
      }
    }, [])
  
  
  
    return(
      <div style={{width:"100%", height:"100%", position: "relative"}}>
        <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
          {imageUrls.map((url, index) => (
            <img key={index} 
            src={url}
            className={homestyle.imageSliderImage}
            style={{translate: `${-100 * currentIndex}%`}}
            />
          ))}
        </div>
      </div>
    )
  }

export default ImageSlider
