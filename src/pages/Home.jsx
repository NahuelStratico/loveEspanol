
import culture from '../assets/culture.png'
import hablemos from '../assets/hablemos.png'
import caminito from '../assets/caminitoclases.png'
import start from '../assets/start.png'

import '../styles/home.css'

const Home = () => {

  return (
    <>
    {/* Initial text "Hola mundo" */}
      <div className="container py-5">
        <div className="row my-5 justify-content-center flex-md-row flex-column align-items-center">

          <div className="col-6 d-flex flex-column justify-content-center align-items-center icon_container">
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
            <p>communicative approach</p>
            <p>Visual and cognitive grammar</p>
            <p>Culture exchange </p>
            <p>gamification</p>
            <p className='mb-0'>storytelling</p>
          </div>

          <div className='image_container'>
            {/* <img src="" alt="" /> */}
            
          </div>

        </div>
      </div>

      <div style={{height:'100vh'}}>

      </div>
    </>
  )
}

export default Home