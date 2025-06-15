import aboutstyles from '../styles/aboutstyle.module.css'

import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

import davies from "/davies.png"

const About = () => {



  
  return (
    < div className={aboutstyles.firstContainer}>
      <ScrollToTop />

      <div className={aboutstyles.MainContainer}>
        <div className={aboutstyles.headerContainer}>
          <div className={aboutstyles.header}>
            <h1 className={aboutstyles.welcome}>Welcome to CLAD’s Place -</h1>
            <h2 className={aboutstyles.century}> A Century-Old Family Legacy, Yours to Experience</h2>
          </div>
        </div>
        <div className={aboutstyles.aboutSubContainer}>

          <p className={aboutstyles.capitalizedParagraph}>
            For over a hundred years, this property has been part of the Davies family story, passed down through five generations. It all began when Thomas and Elizabeth Davies
            settled in Liberia and laid down roots that would grow deep and wide. They passed the property to their only son, C.L. Abiose Davies, a man whose love for community
            still echoes.
          </p>

          <p className={aboutstyles.capitalizedParagraph}>
            C.<span>L.</span> and his wife, Catherine, raised their five children here (Claudia, Thomas, Catherine, Reginal, and Claudius) filling the space with traditions, and a deep sense of
            belonging. <img src={davies} alt="family tree photo" className={aboutstyles.aboutImage} />
            In 1976, the property shifted gears, becoming home to Eagle Electric, a successful local business that energized the space with new purpose.
          </p>


          <p className={aboutstyles.capitalizedParagraph}>
            Today, the legacy continues. Now maintained by C.L.’s descendants, who see CLAD’s Place not just as real estate, but as a living legacy. The property features two
            private apartments, each crafted with care to reflect the warmth, history, and spirit that’s been passed down through the years.
          </p>

          <p className={aboutstyles.capitalizedParagraph}>
            CLAD’s Place isn’t just somewhere to stay. It’s a story, and now, for a little while, you’re part of it. Whether you&#39;re here to rest, explore, or reconnect, we hope you feel
            right at home.
          </p>

          <p className={aboutstyles.capitalizedParagraph}>
            Welcome to something special. Welcome to the family — even if just for a little while
          </p>
        </div>
        
        <>
          <Footer />
        </>
      </div>
    </div>
    
  )
}

export default About
