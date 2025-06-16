import { useState, useRef, useEffect } from 'react'
import { Wifi, TvMinimal, Utensils, CookingPot, Sofa, AirVent, Hamburger, Beer, Refrigerator, Store, ChevronDown, ChevronUp, Plus, Minus   } from 'lucide-react';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

import homestyle from "../styles/homestyle.module.css"

import ImageSlider from '../components/ImageSlider'

import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop';


import ayo1 from "/images/ayo1.png"
import ayo3 from "/images/ayo3.jpg"
import ayo4 from "/images/ayo4.jpg"
import ayo5 from "/images/ayo5.jpg"
import modu1 from "/images/modu1.jpg"
import modu2 from "/images/modu2.jpg"
import modu3 from "/images/modu3.png"

import {CalendarDays, Users } from "lucide-react"
import { NavLink } from 'react-router-dom';

const Images = [ayo1, ayo4, modu1, ayo3, modu2, ayo5, modu3]

const Home = () => {

  const overviewRef = useRef(null)
  const calendarRef = useRef(null);


  const [openCalendar, setOpenCalendar] = useState(false);
  const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);

const hasSelectedDates = state[0].startDate && state[0].endDate;

  const [counter, setCounter] = useState(0)
  const [openOffers, setOpenOffers] = useState(false)
  const [faqDropDown, setFaqDropDown] = useState(false);
  const [isAyo, setIsAyo] = useState(false)




  useEffect(() => {
  
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  




  return (
    <div className={homestyle.mainContainer}>
      <ScrollToTop />


      <div className={homestyle.heroSection}>
        <div className={homestyle.imageSliderContainer}>
          <ImageSlider imageUrls={Images} />
        </div>

        <div className={homestyle.bookingContainer}>
          <div>
            <h1>Feel at home, free to roam</h1>
            <p>Experience your home away from home with our luxury apartments.</p>
            <p>Find the peace of mind, flexibility, and confidence to start your latest adventure...</p>
          </div>

          <div className={homestyle.bookstayContainer}>
            {/* Calendar + Date Display */}
            <div className={homestyle.searchContainer}>
              <div
                ref={calendarRef}
                onClick={() => setOpenCalendar(!openCalendar)}
                style={{ display: "flex", gap: "5px", alignItems: "center", cursor: "pointer", marginRight: ".5rem" }}
              >
                <CalendarDays />
                <p>
                  {hasSelectedDates ? (
                    <span>
                      {`${state[0].startDate.toLocaleDateString()} - ${state[0].endDate.toLocaleDateString()}`}
                    </span>
                  ) : (
                    <span>When ?</span>
                  )}
                </p>
              </div>

              {openCalendar && (
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  className={homestyle.dateRange}
                />
              )}
            </div>

            {/* Booking options */}
            <div className={homestyle.bookingOptionsContainer}>
              <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: ".5rem", alignItems: "center" }}>
                <div  className={homestyle.amountOptionContainer}>
                  <Users size={15} />
                  Guest
                  <span onClick={() => setCounter(prev => Math.max(prev - 1, 0))} className={homestyle.amountOption} >
                    <Minus size={15} />
                  </span>
                  {counter}
                  <span onClick={() => setCounter(prev => prev + 1)}  className={homestyle.amountOption} >
                    <Plus size={15} />
                  </span>
                </div>

                <span className={homestyle.optionsContainer}>
                  <label htmlFor="theAyo">
                    The Ayo
                    <input
                      type="checkbox"
                      id="theAyo"
                      checked={isAyo}
                      onChange={() => setIsAyo(true)}
                    />
                  </label>
                  <label htmlFor="theModu">
                    The Modu
                    <input
                      type="checkbox"
                      id="theModu"
                      checked={!isAyo}
                      onChange={() => setIsAyo(false)}
                    />
                  </label>
                </span>
              </div>
            </div>

            {/* Booking button */}
            <div>
              <a
                href={
                  isAyo
                    ? "https://www.airbnb.com/rooms/1410439382816388187?adults=1&search_mode=regular_search&check_in=2025-05-10&check_out=2025-05-15&children=0&infants=0&pets=0&source_impression_id=p3_1746874455_P3uI5StpLzFkRrp8&previous_page_section_name=1000&federated_search_id=dcff1440-c3f5-4b67-9f07-0b485fbed3a2"
                    : "https://www.airbnb.com/rooms/1409967061590575086?adults=4&search_mode=regular_search&check_in=2025-05-14&check_out=2025-05-19&children=0&infants=0&pets=0&source_impression_id=p3_1746974374_P3l6sHYsTI1cDaz_&previous_page_section_name=1000&federated_search_id=b91d48f4-b5d3-47bc-930f-ab703f8f6fd7"
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className={homestyle.bookingBttn}>Book Now</button>
              </a>
             </div>
          </div>

          

          
        </div>
      </div>


      <div className={homestyle.addressContainer}>
        <div className={homestyle.addressWrapper}>
          <p>100 Randall St</p>
          <p>Monrovia, Liberia</p>
        </div>

        <div className={homestyle.subLinksWrapper}>
          <ul>
            <li onClick={() => {overviewRef.current?.scrollIntoView({
              behavior: 'smooth',
              })}}>Overview
            </li>
          </ul>
        </div>

        <div className={homestyle.overviewDropdown}>
          <h2 onClick={() => {overviewRef.current?.scrollIntoView({
             behavior: 'smooth',
            })}}>
            OverView 
          </h2>
          <div className={faqDropDown ? homestyle.overDropOpen : homestyle.overDropClose}>
            <ul>
              <li >Overview</li>
              <li onClick={() => {faqRef.current?.scrollIntoView({
                behavior: 'smooth',
              })}}>FAQs</li>
            </ul>
          </div>
        </div>

      </div>

      <div className={homestyle.welcomeContainer} >
          <p>Weather you're visiting family, traveling for business, or living the degital nomad life, we will make it easy for you to feel at home. With thoughtful service and flexible stays, you can focus on what matters most.
          </p>
      </div>

      <div className={homestyle.offerContainer}>
        <div>
          <Wifi className={homestyle.icons}/>
          <p>Wi-Fi</p>
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
          <p>Walk to Pub</p>
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
            <p>Wi-Fi</p>
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
          <img src='./images/homeGalleryImage/pic1.jpg' alt='homeGalleryImage' loading='lazy' />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageTwo}`}>
          <img src='./images/homeGalleryImage/pic2.jpg' alt='homeGalleryImage' loading='lazy' />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageThree}`}>
          <img src='./images/homeGalleryImage/pic5.jpg' alt='homeGalleryImage' loading='lazy' />
        </div> 
        <div className={`${homestyle.imageWrapper} ${homestyle.imageFour}`}>
          <img src='./images/homeGalleryImage/pic3.jpg' alt='homeGalleryImage' loading='lazy'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageFive}`}>
          <img src='./images/homeGalleryImage/pic4.jpg' alt='homeGalleryImage' loading='lazy'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageSix}`}>
          <img src='./images/homeGalleryImage/pic6.jpg' alt='homeGalleryImage' loading='lazy' />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageSeven}`}>
          <img src='./images/homeGalleryImage/pic9.jpg' alt='homeGalleryImage' loading='lazy'/>
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageEight}`}>
          <img src='./images/homeGalleryImage/pic7.jpg' alt='homeGalleryImage' loading='lazy'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageNine}`}>
          <img src='./images/homeGalleryImage/pic8.jpg' alt='homeGalleryImage' loading='lazy'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageTen}`}>
          <img src='./images/homeGalleryImage/pic10.jpg' alt='homeGalleryImage' loading='lazy'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageEleven}`}>
          <img src='./images/homeGalleryImage/pic11.jpg' alt='homeGalleryImage' loading='lazy'  />
        </div>
        <div className={`${homestyle.imageWrapper} ${homestyle.imageTwelve}`}>
          <img src='./images/homeGalleryImage/pic12.jpg' alt='homeGalleryImage' loading='lazy'  />
        </div>
      </div>

      <div className={homestyle.galleryLinkButtonContainer}>
        <NavLink to="/Gallery" >
          <button className={homestyle.galleryLinkButton}>See full gallery</button>
        </NavLink>
      </div>

      <div className={homestyle.overViewSection} id="overview" ref={overviewRef}>
        <div className={homestyle.overViewSectionHeader}>
          <h2>Welcome to CLAD’s Place</h2>
          <hr />
        </div>
        <div className={homestyle.overViewSectionBody}>
          <p>
            Spacious rooms, a full kitchen, fast Wi-Fi, and 24/7 security—everything you need for a comfortable stay.
          </p>
          <p>
            Family-run and hospitality-driven, we’re here to help you feel at home and make the most of Monrovia.
            Just minutes from the beach, dining, and shopping— our apartments are perfect for business or a quick getaway.
          </p>
          <p>
            We can’t wait to host you in the Modu or Ayo apartment.
          </p>
        </div>
      </div>



      <div className={homestyle.footerContainer}>
         <Footer />   
      </div>

    </div>
  )
}

export default Home
