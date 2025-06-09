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
  const faqRef = useRef(null)
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
  const [faqOneOpen, setFaqOneOpen] = useState(false)
  const [faqTwoOpen, setFaqTwoOpen] = useState(false)
  const [faqDropDown, setFaqDropDown] = useState(false);




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
            <div
            ref={calendarRef}
            style={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer" }}
          >
            <CalendarDays />
            <p onClick={() => setOpenCalendar(!openCalendar)}>
            {hasSelectedDates ? (
              <span>
                {`${state[0].startDate.toLocaleDateString()} - ${state[0].endDate.toLocaleDateString()}`}
              </span>
            ) : (
              <span>When ?</span>
            )}
            </p>

            <DateRange
              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className={openCalendar ? homestyle.dateRange : homestyle.dateRangeClose}
            />
          </div>
           
          <div style={{display: "flex", gap: "10px", alignItems: "center", cursor: "pointer"}}>
            <Users size={15} />
            <p style={{cursor: "pointer", display: "flex", gap: ".5rem", alignItems: "center"}}>
              Guest  
              <span
                onClick={() => setCounter(prev => (prev > 0 ? prev - 1 : 0))}
                style={{
                  backgroundColor: "#ad9551",
                  width: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: ".5rem"
                }}
              >
                -
              </span>
              {counter}
              <span
                onClick={() => setCounter(prev => prev + 1)}
                style={{
                  backgroundColor: "#ad9551",
                  width: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: ".5rem",
                  marginRight: ".5rem"
                }}
              >
                +
              </span>

            </p>
          </div>
            <a
              href="https://www.airbnb.com/rooms/1410439382816388187?adults=1&search_mode=regular_search&check_in=2025-05-10&check_out=2025-05-15&children=0&infants=0&pets=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className={homestyle.bookingBttn}>
                Book Now
              </button>
            </a>
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

            <li onClick={() => {faqRef.current?.scrollIntoView({
              behavior: 'smooth',
              })}}>
              FAQs
            </li>
          </ul>
        </div>

        <div className={homestyle.overviewDropdown}>
          <h2 onClick={() => setFaqDropDown(!faqDropDown)}>
            OverView <span><ChevronDown size={20} /></span>
          </h2>
          <div className={faqDropDown ? homestyle.overDropOpen : homestyle.overDropClose}>
            <ul>
              <li onClick={() => {overviewRef.current?.scrollIntoView({
                behavior: 'smooth',
              })}}>Overview</li>
              <li onClick={() => {faqRef.current?.scrollIntoView({
                behavior: 'smooth',
              })}}>FAQs</li>
            </ul>
          </div>
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
          <h2>Space & Setting</h2>
          <hr />
          <p><strong>*Brand new*</strong></p>
        </div>
        <div className={homestyle.overViewSectionBody}>
          <p>
            Welcome to Clad's Place, a modern and stylish two-apartment located in the heart of Monrovia, Liberia. Whether you're visiting for business or leisure, we offer fully furnished units with spacious layouts, high-end finishes, and all the comforts of home. Our apartments are designed with both functionality and relaxation in mind, ensuring a pleasant stay for all our guests.
          </p>
          <p>
            Each apartment boasts <strong>two well-sized bedrooms</strong>, perfect for resting after a long day. The <strong>kitchen</strong> is fully equipped with modern appliances and everything you need to prepare meals. Our <strong>bathroom</strong> is clean, spacious, and designed with contemporary fixtures. The <strong>living space</strong> offers a cozy yet open environment, ideal for relaxing, watching TV, or hosting guests.
          </p>
          <p>
            Additionally, each unit comes with complimentary high-speed Wi-Fi, ensuring you stay connected throughout your stay. For your peace of mind, we provide 24-hour security and well-maintained facilities. Whether you’re staying for a few days or several weeks, you’ll feel right at home with all the amenities at your fingertips.
          </p>
          <p>
            As a family-owned business with experience in hospitality, we are committed to offering exceptional service and creating a welcoming atmosphere. Our friendly staff is always available to assist you with anything you need, from arranging transportation to recommending the best local restaurants, attractions, or shopping spots. We want you to experience the true essence of Monrovia and ensure your stay is as comfortable and enjoyable as possible.
          </p>
          <p>
            Our prime location means that you're never far from the best Monrovia has to offer. Clad's Place is just minutes away from the beach, shopping centers, and fine dining options, so you can easily explore the city’s vibrant culture. Whether you’re here for business meetings or just to enjoy some downtime, we offer the perfect setting for a productive and relaxing stay.
          </p>
          <p>
            We look forward to hosting you at Clad's Place, where comfort, convenience, and hospitality come together. Whether you're here for a short-term stay or an extended visit, we guarantee you'll have a memorable experience.
          </p>
        </div>
      </div>

      <div className={homestyle.faqContainer} id="location" ref={faqRef}>

        <h2>FAQs.</h2>
        <div className={homestyle.faqBodyContainer}>
          <div className={homestyle.questionsContainer}>
            <div>
              <p onClick={() => setFaqOneOpen(prev => !prev)}>What time is check in/out {
                faqOneOpen ? <Minus /> : <Plus />
                } 
              </p>
              <p className={faqOneOpen ? homestyle.faqOpen : homestyle.faqClose}>
                Check-in is at 3:00 PM and check-out is at 11:00 AM. If you need to adjust these times, please let us know in advance.
              </p>
            </div>
            <div>
              <p onClick={() => setFaqTwoOpen(prev => !prev)}>Is pets allow {
                faqTwoOpen ? <Minus/> : <Plus />
                }
              </p>
              <p className={faqTwoOpen ? homestyle.faqOpenTwo : homestyle.faqCloseTwo}>We love pets, but we currently do not allow them in our apartments. We apologize for any inconvenience this may cause.</p>
            </div>
          </div>
          
          <div>
            <p>Still have questions?</p>
            <NavLink to="/ContactUs">
              <button className={homestyle.sendMsgBttn}>Send us a message</button>
            </NavLink>
          </div>

          <div>
            <h2>Why book with us?</h2>
            <div className={homestyle.whyBookWithUsContainer}>
              <div>
                <h3>Exceptional Service</h3>
                <p>Our friendly team is always available to help with transportation, local recommendations, or anything else you need.</p>
              </div>
              <div>
                <h3>Ideal for Business or Leisure</h3>
                <p>Whether you're in town for work or vacation, our peaceful and private apartments provide the perfect balance of productivity and relaxation. From weekend getaways to extended stays, we offer options to suit your needs.</p>
              </div>
              <div>
                <h3>Quiet & Safe Environment</h3>
                <p>Clad's Place offers security, gated access, and surveillance—ensuring a safe, relaxing, and worry-free stay for all guests.</p>
              </div>
              
            </div>
          </div>

        </div>

      </div>

      <div className={homestyle.footerContainer}>
         <Footer />   
      </div>

    </div>
  )
}

export default Home
