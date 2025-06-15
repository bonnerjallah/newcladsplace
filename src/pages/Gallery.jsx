import { useRef, useState } from "react"
import gallerystyle from "../styles/gallerystyle.module.css"
import { Wifi, TvMinimal, Utensils, CookingPot, Sofa, Refrigerator, CircleX, SquarePlay , AirVentIcon   } from 'lucide-react';


import GalleryImageSlider from "../components/GalleryImageSlider"

import moduvid from "/moduvid.mp4"
import ayovid from "/ayovid.mp4"

import ayobedroomOne from "/images/galleryImages/AyoImages/ayoBedRoomOne.jpg"
import ayobedroomtwo from "/images/galleryImages/AyoImages/ayoBedRoomTwo.jpg"
import ayobedroomthree from "/images/galleryImages/AyoImages/ayoBedRoomThree.jpg"
import ayobathOne from "/images/galleryImages/AyoImages/ayoBathroomOne.jpg"
import ayobathtwo from "/images/galleryImages/AyoImages/ayoBathroomTwo.jpg"
import ayobaththree from "/images/galleryImages/AyoImages/ayoBathroomThree.jpg"
import ayocouch from "/images/galleryImages/AyoImages/ayoCouch.jpg"
import ayodiningOne from "/images/galleryImages/AyoImages/ayoDiningRoomOne.jpg"
import ayodiningtwo from "/images/galleryImages/AyoImages/ayoDiningRoomTwo.jpg"
import ayodiningroomthree from "/images/galleryImages/AyoImages/ayoDiningRoomThree.jpg"
import ayoheater from "/images/galleryImages/AyoImages/ayoHeater.jpg"
import ayokitchenone from "/images/galleryImages/AyoImages/ayoKitchenOne.jpg"
import ayokitchentwo from "/images/galleryImages/AyoImages/ayoKitchenTwo.jpg"
import ayolivingone from "/images/galleryImages/AyoImages/ayoLivingRoomOne.jpg"
import ayolivingTable from "/images/galleryImages/AyoImages/ayoLivingRoomTable.jpg"
import ayolivingtwo from "/images/galleryImages/AyoImages/ayoLivingRoomTwo.jpg"
import ayolivingthree from "/images/galleryImages/AyoImages/ayoLivingRoomThree.jpg"
import ayoRicecooker from "/images/galleryImages/AyoImages/ayoRiceCooker.jpg"
import ayoRoomOne from "/images/galleryImages/AyoImages/ayoRoomOne.jpg"
import ayoRoomTwo from "/images/galleryImages/AyoImages/ayoRoomTwo.jpg"
import ayoRoomThree from "/images/galleryImages/AyoImages/ayoRoomThree.jpg"
import ayoRoomFour from "/images/galleryImages/AyoImages/ayoRoomFour.jpg"
import ayoShower from "/images/galleryImages/AyoImages/ayoShower.jpg"
import ayoStove from "/images/galleryImages/AyoImages/ayoStove.jpg"

import modubathroomone from "/images/galleryImages/moduImages/moduBathroomOne.jpg"
import modubedroomone from "/images/galleryImages/moduImages/moduBedRoomOne.jpg"
import modubedroomtwo from "/images/galleryImages/moduImages/moduBedRoomTwo.jpg"
import modubedroomthree from "/images/galleryImages/moduImages/moduBedRoomThree.jpg"
import modubedroomfour from "/images/galleryImages/moduImages/moduBedRoomFour.jpg"
import modubedroomfive from "/images/galleryImages/moduImages/moduBedRoomFive.jpg"
import moducouch from "/images/galleryImages/moduImages/moduCouch.jpg"
import moducouchTwo from "/images/galleryImages/moduImages/moduCouchTwo.jpg"
import modudiningone from "/images/galleryImages/moduImages/moduDinning.jpg"
import modudiningtwo from "/images/galleryImages/moduImages/moduDinningTwo.jpg"
import modukitchenone from "/images/galleryImages/moduImages/moduKitchenOne.jpg"
import modukitchentwo from "/images/galleryImages/moduImages/moduKitchenTwo.jpg"
import modulivingroomone from "/images/galleryImages/moduImages/moduLivingRoomOne.jpg"
import modulivingroomtwo from "/images/galleryImages/moduImages/moduLivingRoomTwo.jpg"
import moduroomone from "/images/galleryImages/moduImages/moduRoomOne.jpg"
import moduroomtwo from "/images/galleryImages/moduImages/moduRoomTwo.jpg"  
import moduroomthree from "/images/galleryImages/moduImages/moduRoomThree.jpg"
import moduroomfour from "/images/galleryImages/moduImages/moduRoomFour.jpg"
import moduroomfive from "/images/galleryImages/moduImages/moduRoomFive.jpg"
import modushower from "/images/galleryImages/moduImages/moduShower.jpg"
import moduheater from "/images/galleryImages/moduImages/moduHeater.jpg"



const ayoImages = [
  ayobedroomOne,
  ayobedroomtwo,
  ayobedroomthree,
  ayobathOne,
  ayobathtwo,
  ayobaththree,
  ayocouch,
  ayodiningOne,
  ayodiningtwo,
  ayodiningroomthree,
  ayoheater,
  ayokitchenone,
  ayokitchentwo,
  ayolivingone,
  ayolivingTable,
  ayolivingtwo,
  ayolivingthree,
  ayoRicecooker,
  ayoRoomOne,
  ayoRoomTwo,
  ayoRoomThree,
  ayoRoomFour,
  ayoShower,
  ayoStove
]

const moduImages = [
  modubedroomtwo,
  modubedroomone,
  modubedroomthree,
  modubedroomfour,
  modubedroomfive,
  modubathroomone,
  moducouch,
  moducouchTwo,
  modudiningone,
  modudiningtwo,
  modukitchenone,
  modukitchentwo,
  modulivingroomone,
  modulivingroomtwo,
  moduroomone,
  moduroomtwo,  
  moduroomthree,
  moduroomfour,
  moduroomfive,
  modushower,
  moduheater
]

const imagesFileName = [...ayoImages, ...moduImages]


const Gallery = () => {

  const dialogRef = useRef(null);
  const videoDialogRef = useRef(null);
  const ayoVideoRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [ayoActive , setAyoActive] = useState(false);
  const [moduActive , setModuActive] = useState(false);

  const handleImageClick = (event) => {
    const clickedImage = event.target;
    const imageSrc = clickedImage.getAttribute('src');
    const imageAlt = clickedImage.getAttribute('alt');

    let source = "unknown";

    if(ayoImages.includes(imageSrc)) {
      source = ayoImages;
      setAyoActive(true);
      setModuActive(false);
    } else if (moduImages.includes(imageSrc)) {
      source = moduImages;
      setModuActive(true);
      setAyoActive(false);
    }

    // Set the active image
    setActiveImage({
      src: imageSrc,
      alt: imageAlt,
      source: source
    });

    
    // Open the dialog
    dialogRef.current.showModal();

  }

  const handleShowAyoVid =(event) => {
    dialogRef.current.showModal()
  }

  const handleCloseDialog = () => {
    setActiveImage(null);
    dialogRef.current.close();
    videoDialogRef.current.close();
    setAyoActive(false);
    setModuActive(false);
  }

  const handleCloseVideoDialog = () => {
    videoDialogRef.current.close();
    ayoVideoRef.current.close()

    
  }

  const handleAyoHeaderClick = () => {
    setAyoActive(true);
    setModuActive(false);
    dialogRef.current.showModal();
    setActiveImage({
      src: ayobedroomOne,
      alt: "Ayo Bedroom One",
      source: ayoImages
    });
  }

  const handleModuHeaderClick = () => {
    setModuActive(true);
    setAyoActive(false);
    dialogRef.current.showModal();
    setActiveImage({
      src: modubedroomone,
      alt: "Modu Bedroom One",
      source: moduImages
    });
  }



    

  return (
    <div className={gallerystyle.mainContainer}>
      <div className={gallerystyle.roomDisContainer}>
        <h2 onClick={handleAyoHeaderClick}>The Ayo</h2>

        <div className={gallerystyle.videoContainer} onClick={() => ayoVideoRef.current.showModal()}>
          <SquarePlay />
        </div>

        <h2 onClick={handleModuHeaderClick}>The Modu</h2>

        <div className={gallerystyle.videoContainer} onClick={() => videoDialogRef.current.showModal()}>
          <SquarePlay />
        </div>



        <dialog ref={videoDialogRef} className={gallerystyle.videoDialog}>
          <CircleX stroke="red" size={50} onClick={handleCloseVideoDialog} style={{position: "absolute", zIndex:"22", cursor:"pointer"}} />
          <video
            controls
            muted
            poster="/images/yourThumbnail.jpg" 
            className={gallerystyle.videoPlayer}
          >
          <source src={moduvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </dialog>  

        
         <dialog ref={ayoVideoRef} className={gallerystyle.videoDialog}>
          <CircleX stroke="red" size={50} onClick={handleCloseVideoDialog} style={{position: "absolute", zIndex:"22", cursor:"pointer"}} />
          <video
            controls
            muted
            poster="/images/yourThumbnail.jpg" 
            className={gallerystyle.videoPlayer}
          >
          <source src={ayovid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </dialog>        
      </div>

      <div className={gallerystyle.imageContainer}>
        {imagesFileName.map((image, index) => (
          <div key={index} className={gallerystyle.imageWrapper}>
            <img
              src={image}
              alt={image.alt}
              className={gallerystyle.image}
              loading="lazy"
              onClick={handleImageClick}
            />
          </div>
        ))}
      </div>

      <dialog ref={dialogRef} className={gallerystyle.dialog}>

        <div className={gallerystyle.dialogImagesContainer}> 
          <div className={gallerystyle.galleryImageContainer}>
            <GalleryImageSlider  imageUrls={activeImage ? activeImage.source : []} />
          </div>  

          {ayoActive ? (
            <div className={gallerystyle.roomDescription}>
              <h1>The Ayo</h1>
              <details className={gallerystyle.roomDetails}>
                <ul>
                  <li>Master BedRoom: Queen Bed</li>
                  <li>Bathroom #1: In the masterBedroom</li>
                  <li>Bedroom #2: Two full size beds</li>
                  <li>Bathroom #2:</li>
                  <li>Dining Room</li>
                  <li>Den</li>
                  <li>Full Kitchen</li>
                  <li>Randall Street view</li>
                </ul>
              </details>
              <div className={gallerystyle.roomFeatures}>
                <h4>What this place offers</h4>
                <ul>
                  <div className={gallerystyle.offerLeftSide}> 
                    <li> <Wifi/> <span>Wifi</span></li>
                    <li> <TvMinimal/> <span>Flat Screen</span></li>
                    <li> <Utensils/> <span>Utensils</span></li>
                    <li> <CookingPot/> <span> Cookware/Dishes</span></li>
                  </div>
                  <div className={gallerystyle.offerRightSide}> 
                    <li> <Sofa/> <span>Furnished & Decorated</span></li>
                    <li> <AirVentIcon/> <span> Air conditioning</span></li>
                    <li><Refrigerator/> <span>Refrigerator</span></li>
                  </div>  
                </ul>
              </div>
              <a
                href="https://www.airbnb.com/rooms/1410439382816388187?adults=1&search_mode=regular_search&check_in=2025-05-10&check_out=2025-05-15&children=0&infants=0&pets=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={gallerystyle.bookNowBttn}>
                  Book Now
                </button>
              </a>

            </div>
          ) : (
            <div className={gallerystyle.roomDescription}>
              <h1>The Modu</h1>
              <details className={gallerystyle.roomDetails}>
                <ul>
                  <li>Master BedRoom: Queen Bed</li>
                  <li>Bedroom #2: Two full size beds</li>
                  <li>Bathroom</li>
                  <li>Dining Room</li>
                  <li>Den</li>
                  <li>Full Kitchen</li>
                  <li>Hall view</li>
                </ul>  
              </details> 
              <div className={gallerystyle.roomFeatures}>
                <h4>What this place offers</h4>
                <ul>
                  <div className={gallerystyle.offerLeftSide}> 
                    <li> <Wifi/> <span>Wifi</span></li>
                    <li> <TvMinimal/> <span>Flat Screen</span></li>
                    <li> <Utensils/> <span>Utensils</span></li>
                    <li> <CookingPot/> <span> Cookware/Dishes</span></li>
                  </div>
                  <div className={gallerystyle.offerRightSide}> 
                    <li> <Sofa/> <span>Furnished & Decorated</span></li>
                    <li> <AirVentIcon/> <span> Air conditioning</span></li>
                    <li><Refrigerator/> <span>Refrigerator</span></li>
                  </div>  
                </ul>
              </div>
              <a
                href="https://www.airbnb.com/rooms/1409967061590575086?adults=4&search_mode=regular_search&check_in=2025-05-14&check_out=2025-05-19&children=0&infants=0&pets=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={gallerystyle.bookNowBttn}>
                  Book Now
                </button>
              </a>
            </div>

          )}

        </div>

        <button className={gallerystyle.closeButton}>
          <CircleX stroke="#ad9551" size={50} onClick={handleCloseDialog} />
        </button>
      </dialog>
    </div>
  )
}

export default Gallery
