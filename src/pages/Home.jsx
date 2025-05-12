import { useState } from 'react'

import { Wifi, TvMinimal, Utensils, CookingPot, Sofa, AirVent, Hamburger, Beer, Refrigerator, Store, ChevronDown, ChevronUp  } from 'lucide-react';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

import homestyle from "../styles/homestyle.module.css"

import ImageSlider from '../components/ImageSlider'

import ayo1 from "/images/ayo1.png"
import ayo3 from "/images/ayo3.jpg"
import ayo4 from "/images/ayo4.jpg"
import ayo5 from "/images/ayo5.jpg"
import modu1 from "/images/modu1.jpg"
import modu2 from "/images/modu2.jpg"
import modu3 from "/images/modu3.png"

import {CalendarDays, Users } from "lucide-react"

const Images = [ayo1, ayo4, modu1, ayo3, modu2, ayo5, modu3]

const Home = () => {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOffers, setOpenOffers] = useState(false)

  return (
    <div className={homestyle.mainContainer}>
      
      <div className={homestyle.heroSection}>
        <div className={homestyle.imageSliderContainer}>
          <ImageSlider imageUrls = {Images} />
        </div>

        <div className={homestyle.bookingContainer}>
          <div>
            <h1>Feel at home,
              <br />
              free to roam
            </h1>
            <p>Experience your home away form home for a month, a year, or longer with a morden design, furnished apartments.</p>
          </div>

          <div className={homestyle.searchContainer}>
            <div style={{display: "flex", gap: "10px", alignItems: "center", cursor: "pointer"}}>
              <CalendarDays />
              <p>When ?</p>
              {/* <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className={homestyle.dateRange}
              /> */}
            </div>
           
            <div style={{display: "flex", gap: "10px", alignItems: "center", cursor: "pointer"}}>
              <Users />
              <p>Guest - 1 +</p>
            </div>
            <button className={homestyle.bookingBttn}>Book</button>
          </div>
          
        </div>

      </div>

      <div className={homestyle.addressContainer}>
        <div className={homestyle.addressWrapper}>
          <p>100 Ronald St</p>
          <p>Monrovia, Liberia</p>
        </div>

        <div className={homestyle.subLinksWrapper}>
          <ul>
            <li>Overview</li>
            <li>Location</li>
            <li>Details</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className={homestyle.overviewDropdown}>
          <h2>OverView <span> <ChevronDown size={20} /></span></h2>
           
        </div>

      </div>

      <div className={homestyle.welcomeContainer} >
          <p>Find the peace of mind, flexibility, and confidence to start your latest adventure — a new work gig, a home in between leases, or travel fever — No matter how you identify, our top-notch skills ensure you get the best experience possible. It’s what we love to do.
          </p>
      </div>

      <div className={homestyle.roomsPriceContainer}>
        <p>From</p>
        <p>$130/night</p>
      </div>

      <div className={homestyle.offerContainer}>
        <div>
          <Wifi className={homestyle.icons}/>
          <p>Free Wi-Fi</p>
        </div>
        <div>
          <TvMinimal className={homestyle.icons}/>
          <p>Smart TV</p>
        </div>
        <div>
          <Utensils className={homestyle.icons}/>
          <p>Utensils</p>  
        </div>
        <div>
          <CookingPot className={homestyle.icons}/>
          <p>Cookware / Dishes</p>
        </div>
        <div>
          <Sofa className={homestyle.icons}/>
          <p> Furnished & Decorated</p>
        </div>
        <div>
          <AirVent className={homestyle.icons}/>
          <p>Air Conditioning</p>
        </div>
        <div>
          <Hamburger className={homestyle.icons}/>
          <p>Walking Distance</p>
        </div>
        <div>
          <Beer className={homestyle.icons}/>
          <p>walk to Pub</p>
        </div>
        <div>
          <Store className={homestyle.icons}/>
          <p>Convenience Store</p>
        </div>
        <div>
          <Refrigerator className={homestyle.icons}/>
          <p>New Appliances</p>
        </div>
      </div>

      <div className={homestyle.closeOfferContainer}>

        <div className={homestyle.closeOfferContainerHeadderWrapper}>
          <div>
            <Wifi className={homestyle.icons}/>
            <p>Free Wi-Fi</p>
          </div>

          <div>
            <AirVent className={homestyle.icons}/>
            <p>Air Conditioning</p>
          </div>
        </div>

        {openOffers ? (
          <ChevronUp size={10} className={homestyle.displayButton} onClick={() => setOpenOffers(!openOffers)}/>
        ) : (
          <ChevronDown size={10} className={homestyle.displayButton} onClick={() => setOpenOffers(!openOffers)}/>
        )}

        
      
        {openOffers && (
          <div className={`${homestyle.closerofferBodyWrapper} ${homestyle.closerofferBodyWrapperOpen}`}>
            <div>
              <div>
                <TvMinimal className={homestyle.icons} />
                <p>Smart TV</p>
              </div>
              <div>
                <Utensils className={homestyle.icons} />
                <p>Utensils</p>  
              </div>
              <div>
                <CookingPot className={homestyle.icons} />
                <p>Cookware / Dishes</p>
              </div>
              <div>
                <Sofa className={homestyle.icons} />
                <p>Furnished & Decorated</p>
              </div>
            </div>

            <div>
              <div>
                <Hamburger className={homestyle.icons} />
                <p>Walking Distance</p>
              </div>
              <div>
                <Beer className={homestyle.icons} />
                <p>Walk to Pub</p>
              </div>
              <div>
                <Store className={homestyle.icons} />
                <p>Convenience Store</p>
              </div>
              <div>
                <Refrigerator className={homestyle.icons} />
                <p>New Appliances</p>
              </div>
            </div>
          </div>
        )}


        

      </div>

      <div className={homestyle.galleryContainer}>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageOne}`}>
          <img src='./images/homeGalleryImage/pic1.jpg' alt='homeGalleryImage' />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageTwo}`}>
          <img src='./images/homeGalleryImage/pic2.jpg' alt='homeGalleryImage' />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageThree}`}>
          <img src='./images/homeGalleryImage/pic5.jpg' alt='homeGalleryImage' />
        </div> 
        <div className={`${homestyle.imageWrapper} ${homestyle.imageFour}`}>
          <img src='./images/homeGalleryImage/pic3.jpg' alt='homeGalleryImage'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageFive}`}>
          <img src='./images/homeGalleryImage/pic4.jpg' alt='homeGalleryImage'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageSix}`}>
          <img src='./images/homeGalleryImage/pic6.jpg' alt='homeGalleryImage' />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageSeven}`}>
          <img src='./images/homeGalleryImage/pic9.jpg' alt='homeGalleryImage'/>
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageEight}`}>
          <img src='./images/homeGalleryImage/pic7.jpg' alt='homeGalleryImage'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageNine}`}>
          <img src='./images/homeGalleryImage/pic8.jpg' alt='homeGalleryImage'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageTen}`}>
          <img src='./images/homeGalleryImage/pic10.jpg' alt='homeGalleryImage'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageEleven}`}>
          <img src='./images/homeGalleryImage/pic11.jpg' alt='homeGalleryImage'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageTwelve}`}>
          <img src='./images/homeGalleryImage/pic12.jpg' alt='homeGalleryImage'  />
        </div>
      </div>

    </div>
  )
}

export default Home
