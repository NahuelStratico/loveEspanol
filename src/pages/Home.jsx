
import culture from '../assets/culture.png'
import hablemos from '../assets/hablemos.png'
import caminito from '../assets/caminitoclases.png'
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
import check from '../assets/check.png'

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
                <p>Visual and cognitive grammar</p>
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
          <img className="img-fluid" src={how3} alt="" />
        </div>
        <div className='img_content'>
          <img className="img-fluid" src={how2} alt="" />
        </div>
        <div className='img_content'>
          <img className="img-fluid" src={how1} alt="" />
        </div>
        <div className='img_content'>
          <img className="img-fluid" src={how4} alt="" />
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
            Our Spanish variety is called rioplatense but we like to share features and facts from other Spanish-speaking countries.</p>
            <p>
              We both speak English and Dani also speaks Italian and German!
              Abril is specialized in teaching children and creates special resources to play and learn.</p>
        </div>

      </div>

    </div>


    {/* Sweet Deals */}
    <div className='bg-sweet'>
      <h3 className='title_sweet'>Sweet  <span className='title_deals'> Deals</span></h3>

      <div className='container d-flex flex-column flex-md-row gap-4'>

        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='price_text-container'>
            <h5 className='price_title'>online individual</h5>

            <p className='price_pharagraph'>Learn Spanish from your home, with 1:1 online lessons. We created a Spanish learning journey just for you, based on your interests and learning needs.</p>
          </div>

          <div className='price_img-container'>
            <img  className="img-fluid price_img" src={imgSweet1} alt="Sweet images price" />
          </div>

          <div className='check_conteiner d-flex flex-column justify-content-center align-items-start'>

            <div className='d-flex flex-row justify-content-center align-items-center mb-2'>
              <img className='icon_check' src={check} alt="check icon" />
              <p className='m-0 price_subtitle'>Lesson materials included</p>
            </div>

            <div className='d-flex flex-row justify-content-center align-items-center mb-4'>
              <img className='icon_check' src={check} alt="check icon" />
              <p className='m-0 price_subtitle'>Free access to Club de Conversación</p>
            </div>

          </div>

        </div>

        <div className='d-flex flex-column align-items-center'>
          <div className='price_text-container'>
            <h5 className='price_title'>in-person individual</h5>
          
              <p className='price_pharagraph'>Are you in Buenos Aires? ¡Genial! Let's have an in-person lesson in Palermo Buenos Aires. Coffee or tea is on us!</p>
            
          </div>

          <div className='price_img-container'>
            <img  className="img-fluid price_img" src={imgSweet1} alt="Sweet images price" />
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

        </div>

      </div>
    </div>


    <div className='bg-sweetTwo'>
      {/* <div className='container'>
        <div>
          
        </div>
      </div> */}
    </div>



      <div style={{height:'100vh'}}>

      </div>
    </>
  )
}

export default Home