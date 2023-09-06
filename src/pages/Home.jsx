import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.png'
import culture from '../assets/culture.png'
import hablemos from '../assets/hablemos.png'
import caminito from '../assets/roadMap.png'
import comunicative from '../assets/communicative.png'
import visual from '../assets/visual.png'
import storytelling from '../assets/storytelling.png'
import gamification from '../assets/gamification.png'
import how1 from '../assets/howTeach1.png'
import how2 from '../assets/howTeach2.png'
import how3 from '../assets/howTeach3.png'
import how4 from '../assets/howTeach4.png'
import abril from '../assets/img_abril.png'
import daniela from '../assets/img_daniela.png'
import linkedin from '../assets/linkedin.png';
import imgSweet1 from '../assets/imag-sweetsdeals.png'
import imgSweet2 from '../assets/obelisco.png'
import check from '../assets/check.png'
import bgPrice18 from '../assets/bgPrice_18.png'
import bgPrice22 from '../assets/bgPrice_22.png'
import imgObelisco from '../assets/ic_pdf.png'
import flagGermany from '../assets/flag-germany.png'
import flagKindom from '../assets/flag-kingdom.png'
import flagStates from '../assets/flag-states.png'
import flagRussia from '../assets/flag-russia.png'
import heart from '../assets/heart.svg'
import icInstagram from "../assets/icon-instagram.svg"
import icSpotify from "../assets/icon-spotify.svg"
import icWtsp from "../assets/icon-whatsapp.svg"

import '../styles/home.css'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
    {/* Initial text "Hola mundo" */}
      <div className="container py-5">
        <div className="row my-sm-5 justify-content-center flex-md-row flex-column align-items-center">

          <div className="col-6 d-none d-sm-flex flex-column justify-content-center align-items-center icon_container">
            <div className='hablemos-icon'>
              <img className='img-fluid flex-end' src={hablemos} alt="hablemos" />
            </div>
            <div className='culture-icon'>
              <img className='img-fluid' src={culture} alt="culture" />
            </div>
          </div>

          <div className="col-6 d-flex flex-column justify-content-center align-items-start initial_text-container">
            <h3 className='hola_mundo'>hola mundo</h3>
            <p className='paragraph'>Somos Love Español...</p>
            <p className='paragraph'>A young and dynamic online Language School based in Argentina but you can take online lessons with us no matter where you are. We offer a Spanish learning experience like no other. ¿Vamos?</p>
          </div>

        </div>
      </div>

    {/* Road map */}
      <div className='step_img h-6'>
        <img className='img-fluid' src={caminito} alt="camito clases" />
      </div>

    {/* How do we Teach */}
      <div className='how_container py-5'>
        <div className='container-fluid'>

          <div className='text-center how_teach-container'>
            <h2 className='title_howTeach'>How do we teach?</h2>
            <div className='how-teach_container'>
              <div className='icon_container-how-teach'>
                <img className='img_howteach' src={comunicative} alt="" />
                <p>communicative approach</p>
              </div>
              <div className='icon_container-how-teach'>
                <img className='img_howteach' src={visual} alt="" />
                <p>Cognitive grammar</p>
              </div>
              <div className='icon_container-how-teach'>
                <img className='img_howteach' src={gamification} alt="" />
                <p>gamification</p>
              </div>
              <div className='icon_container-how-teach'>
                <img className='img_howteach' src={storytelling} alt="" />
                <p>storytelling</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='image_container'>
        <div className='img_content'>
          <img className="img-fluid img_we" src={how3} alt="" />
        </div>
        <div className='img_content'>
          <img className="img-fluid img_we" src={how2} alt="" />
        </div>
        <div className='img_content'>
          <img className="img-fluid img_we" src={how1} alt="" />
        </div>
        <div className='img_content'>
          <img className="img-fluid img_we" src={how4} alt="" />
        </div>
      </div>

    {/* Meet your Teachers */}
      <div className='container-fluid container-md'>

        <div className='teachers_container text-center'>
          <h3 className='title_meet'>meet your</h3>
          <h2 className='teachers'>teachers</h2>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center'>

          <div className='profile_container d-flex flex-column flex-md-row justify-content-center align-items-center'>

            <div className="link_linkedin" to="https://www.linkedin.com/in/daniela-borzone-1995ab235/?originalSubdomain=at" target="_blank" rel="noopener noreferrer">
              <img className='img_linkedin img-fluid rounded-circle' src={daniela} alt="Daniela Borzone" />
            
              <Link to="https://www.linkedin.com/in/daniela-borzone-1995ab235/?originalSubdomain=at" target="_blank" rel="noopener noreferrer">
                <div className='linkedin_container-daniela'>
                  <img className='icon_linkedin' src={linkedin} alt="linkedin Daniela Borzone" />
                  <h3 className='linkedin_name'>Daniela</h3>
                </div>
              </Link>

            </div>


            <div className="link_linkedin" to="https://www.linkedin.com/in/daniela-borzone-1995ab235/?originalSubdomain=at" target="_blank" rel="noopener noreferrer">
              <img className='img_linkedin img-fluid rounded-circle' src={abril} alt="Abril" />
            
              <Link to="https://www.linkedin.com/in/daniela-borzone-1995ab235/?originalSubdomain=at" target="_blank" rel="noopener noreferrer">
                <div className='linkedin_container-abril'>
                  <img className='icon_linkedin' src={linkedin} alt="linkedin Daniela Borzone" />
                  <h3 className='linkedin_name'>Abril</h3>
                </div>
              </Link>

            </div>

          </div>

          <div className='description_teacher'>
            <p className='mb-0'>We are friends and the teachers behind Love Español.
              Our Spanish variety is called rioplatense but we like to share features and facts from other Spanish-speaking countries. <br />
              We both speak English and Dani also speaks Italian and German!
              Abril is specialized in teaching children and creates special resources to play and learn.</p>
          </div>

        </div>

      </div>


    {/* Sweet Deals */}
      <div className='bg-sweet'>
        <h3 className='title_sweet'>Sweet  <span className='title_deals'> Deals</span></h3>

        <div className='container d-flex flex-column flex-lg-row gap-4'>

          <div className='card_container'>

            <div className='price_text-container'>
              <h5 className='price_title'>online individual</h5>
              <p className='price_pharagraph'>Learn Spanish from your home, with 1:1 online lessons. We created a Spanish learning journey just for you, based on your interests and learning needs.</p>
            </div>

            <div className='price_img-container'>
              <img className='bg_price-18' src={bgPrice18} alt="bgPrice 18" />
              <img  className="price_img-online" src={imgSweet1} alt="Sweet images price" />
            </div>

            <div className='check_conteiner d-flex flex-column justify-content-center align-items-start'>

              <div className='d-flex flex-row justify-content-center align-items-center mb-2'>
                <img className='icon_check' src={check} alt="check icon" />
                <p className='m-0 price_subtitle'>Lesson materials included</p>
              </div>

              <div className='d-flex flex-row justify-content-center align-items-center mb-2'>
                <img className='icon_check' src={check} alt="check icon" />
                <p className='m-0 price_subtitle'>Free access to Club de Conversación</p>
              </div>

            </div>

          </div>

          {/* <div className='d-block d-md-none bg-white p-1 mt-3'> </div> */}

          <div className='card_container'>

            <div className='price_text-container'>
              <h5 className='price_title'>In-person individual</h5>
              <p className='price_pharagraph'>Are you in Buenos Aires? ¡Genial! Let's have an in-person lesson in Palermo Buenos Aires. Coffee or tea is on us!</p>
            </div>

            <div className='price_img-container'>
              <img className='bg_price-22' src={bgPrice22} alt="bgPrice 22" />
              <img  className="price_img" src={imgSweet2} alt="Sweet images price" />
            </div>

            <div className='check_conteiner d-flex flex-column justify-content-center align-items-start'>

              <div className='d-flex flex-row justify-content-center align-items-center mb-2'>
                <img className='icon_check' src={check} alt="check icon" />
                <p className='m-0 price_subtitle'>Exclusive revision videos</p>
              </div>

              <div className='d-flex flex-row justify-content-center align-items-center mb-2'>
                <img className='icon_check' src={check} alt="check icon" />
                <p className='m-0 price_subtitle'>No booking or other service fee</p>
              </div>

            </div>

          </div>

          {/* <p className='price_pharagraph'>Are you in Buenos Aires? ¡Genial! Let's have an in-person lesson in Palermo Buenos Aires. Coffee or tea is on us!</p> */}

          {/* <div className='d-flex flex-column align-items-center justify-content-center'>

            <div className='price_text-container'>
              <h5 className='price_title'>in-person individual</h5>
              <p className='price_pharagraph'>Are you in Buenos Aires? ¡Genial! Let's have an in-person lesson in Palermo Buenos Aires. Coffee or tea is on us!</p>
            </div>

            <div className='price_img-container'>
              <img  className="price_img" src={imgSweet1} alt="Sweet images price" />
            </div>

            <div className='check_conteiner d-flex flex-column justify-content-center align-items-start'>

              <div className='d-flex flex-row justify-content-center align-items-center mb-2'>
                <img className='icon_check' src={check} alt="check icon" />
                <p className='m-0 price_subtitle'>Exclusive revision videos</p>
              </div>

              <div className='d-flex flex-row justify-content-center align-items-center'>
                <img className='icon_check' src={check} alt="check icon" />
                <p className='m-0 price_subtitle'>No booking or other service fee</p>
              </div>

            </div>

          </div> */}

        </div>
      </div>


      <div className='bg-sweetTwo'>
        {/* <div className='container'>
          <div>
            
          </div>
        </div> */}
      </div>

    
    {/* Level Test */}
    <div className='level_test-container'>
      <div className='container level_test-content'>

        <div className='test_text_container'>
          <h3 className='title_test'>Level</h3>
          <h3 className='title_test'>test</h3>
          <p className='paragraph_test'>Reading and Writing Comprehension and Production</p>
        </div>
        
        <div className='pdf_container'>
          <img className='pdf_img' src={imgObelisco} alt="Obelisco" />
          <Link className='bg-pdf' to="https://docs.google.com/forms/d/e/1FAIpQLSfGaQash35gRJ6LrUnTi-lc3BEfmoepvNwr6ZZvJHOtUStIiQ/viewform" target='_blank'>
            Let's test your spanish
          </Link>
          <Link className='bg-pdf' to="https://docs.google.com/forms/d/e/1FAIpQLSfGaQash35gRJ6LrUnTi-lc3BEfmoepvNwr6ZZvJHOtUStIiQ/viewform" target='_blank'>
            Submit your answers
          </Link>
        </div>

      </div>
    </div>


    {/* Whats our student */}
    <div className='student_container'>
        <div className='container'>
          <h3> What our students are saying... </h3>
          <div className='review_container'>

          {/* Germany */}
            <div className='review_content'>
              <img className='img_heart' src={heart} alt="" />
              <div className='review_bg'>
                <p className='review_text'>Daniela is a very good teacher. Apart from being very patient, she teaches with commitment. She takes her time and recognizes exactly where her students need help. She also appreciates the students' strengths, which makes learning even easier.</p>
                <div className='flag_container'>
                  <p>Shawn</p>
                  <img className='icon_flag' src={flagGermany} alt="" />
                </div>
              </div>
            </div>
          {/* Kindom */}
            <div className='review_content'>
              <img className='img_heart' src={heart} alt="" />
              <div className='review_bg'>
                <p className='review_text'>We have been working with Abril for two months. She is teaching my three children age 14, 11, 11 on a twice a week basis. She makes her lessons dynamic and fun and the kids all love learning with her. On a practical note, she has been using google classrooms to record the journey they have been on, set home work and communicate with them. As a parent I can see what they have been learning and also be up to date with her teachig process. Abril has a wonderful enthusiasm, creative teaching style and makes her lessons enjoyable.</p>
                <div className='flag_container'>
                  <p>Jo</p>
                  <img className='icon_flag' src={flagKindom} alt="" />
                </div>
              </div>
            </div>
          {/* State */}
            <div className='review_content'>
              <img className='img_heart' src={heart} alt="" />
              <div className='review_bg'>
                <p className='review_text'>I was in Argentina in March and was fortunate enough to have Abril as one of my teachers in an intensive Spanish language course. I was very impressed with Abril's enthusiastic attitude, ability to adjust and handle students of different proficiency levels, and the very innovative/original materials she created herself to explain complex grammatical/syntactical concepts in Spanish in a fun, easy to understand manner. I really enjoyed our class and would definitely study Spanish with her again.</p>
                <div className='flag_container'>
                  <p>Mitch</p>
                  <img className='icon_flag' src={flagStates} alt="" />
                </div>
              </div>
            </div>
          {/* Russia */}
            <div className='review_content'>
              <img className='img_heart' src={heart} alt="" />
              <div className='review_bg'>
                <p className='review_text'>I am a teacher myself so when it comes to choosing a tutor I am quite demanding. Daniela is a great teacher! She is always prepared, it’s visible that she puts an effort. She is very attentive to student’s requests and needs. Every lesson is really interesting, full of useful information and entertaining. Good mood after lesson is guaranteed! What is essential for me is that she made me speak in very natural and comfortable manner. I was waiting for every class and I am beyond satisfied. Highly recommended! Thank you!</p>
                <div className='flag_container'>
                  <p>Elena</p>
                  <img className='icon_flag' src={flagRussia} alt="" />
                </div>
              </div>
            </div>

            

          </div>
        </div>
    </div>

    {/* Footer */}
    <footer className='footer_container'>
        
        <NavLink className="footer_logo-container" to="/">
            <img className="Footer_logo_icon" src={ logo } alt="logo" />
        </NavLink>
        
        <div className='footer_icons'>
            <a className='link_trial' href="#" target="_blank">
              <img className='icons-social' src={ icWtsp } alt="icon whatsapp" />
            </a>
            <a className='link_trial' href="#" target="_blank">
              <img className='icons-social' src={ icSpotify } alt="icon spotify" />
            </a>
            <a className='link_trial' href="#" target="_blank">
              <img className='icons-social' src={ icInstagram } alt="icon instagram" />
            </a>
        </div>
    </footer>

    </>
  )
}

export default Home