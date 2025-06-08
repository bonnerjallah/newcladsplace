import { useEffect, useState } from "react"
import gallerystyle from "../styles/gallerystyle.module.css"
import { ArrowBigRightDash, ArrowBigLeftDash, CircleX } from 'lucide-react';


const GalleryImageSlider = ({ imageUrls }) => {    
    const [currentIndex, setCurrentIndex] = useState(0)
    const showPrevImage = () => {
        setCurrentIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    const showNextImage = () => {
        setCurrentIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }
   
    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                {imageUrls.map((url, index) => (
                    <img key={index}
                        src={url}
                        style={{ translate: `${-100 * currentIndex}%`, width: "100%", height: "100%" }}
                        loading='lazy'
                        className={gallerystyle.dialogImage}
                    />
                ))}
            </div>
            <button className={gallerystyle.sliderButtonLeft} onClick={showPrevImage}>
                <ArrowBigLeftDash stroke="white" size={50} />
            </button>
            <button className={gallerystyle.sliderButtonRight} onClick={showNextImage}>
                <ArrowBigRightDash stroke="white" size={50} />
            </button>
            
        </div>
    )
}




export default GalleryImageSlider
