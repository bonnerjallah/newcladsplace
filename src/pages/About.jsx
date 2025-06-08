import aboutstyles from '../styles/aboutstyle.module.css'

import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const About = () => {



  
  return (
    < div className={aboutstyles.firstContainer}>
      <ScrollToTop />

      <div className={aboutstyles.MainContainer}>
        <div className={aboutstyles.headerContainer}>
          <div className={aboutstyles.header}>
              <h1>About</h1>
          </div>
        </div>
        <div className={aboutstyles.aboutSubContainer}>
          <p className={aboutstyles.capitalizedParagraph}>
            For over a century, the CLAD Homestead has remained within the Davies family, passing through five successive generations. Originally acquired by Thomas and Elizabeth Davies upon their settlement in Liberia. Thomas, a contractor, built a two-story framed house where he and his wife lived until his death. Upon Thomas's passing, Elizabeth bequeathed the estate to their sole biological son, affectionately known as C.L. Abiose Davies.
          </p>

          <p className={aboutstyles.capitalizedParagraph}>
            This property is where C.L. Abiose Davies and his wife, Catherine O. Davies, raised their five children: Claudia, Thomas, Catherine, Reginal, and Claudius. Subsequently,<img src='/daviestreepng.png' alt='' className={aboutstyles.aboutImage} /> in 1976, the land was leased to the Eid family (Eagle Electric), who established and grew a thriving building supply business within the city.
          </p>

          <p className={aboutstyles.capitalizedParagraph}>
            Upon C.L. Abiose Davies' demise, he passed the property on to his five surviving children, with the stipulation that the estate remain within the family lineage. As the family expanded and the potential heirs (including great-grandchildren) increased, C.L. Abiose Davies' heirs collectively decided to designate their successors and transfer ownership while they were alive, preempting any future confusion.
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
