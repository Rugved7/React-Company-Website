import React from 'react'
import '../styles/Home.scss'
import vg from '../Assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'  /* importing icons */

const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
          <h1>Rugved's Company</h1>
          <p>
            Only getway to all your needs...
          </p>
        </main>
      </div>

      {/* second Home Section */}
      <div className='home2' id='Home'>
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </p>
        </div>
      </div>

      {/* third Home Section */}

      <div className='home3' id='about'> {/* id is added as we gave to go to about section on clicking about button */}
        <div>
          <h1>About Us</h1>
          <p>
            A company paragraph is a short description of the company found on a wide variety of promotional materials, including pamphlets, digital media and sponsorship recognition. Writing a short but engaging paragraph, otherwise known as a "blurb," helps the public understand key points about a company, as to what it does and who it serves.
          </p>
        </div>

      </div>

      {/* fourth Home Section */}
      <div className='home4' id='brands'>  {/* id is added as we gave to go to brands section on clicking brands button*/}
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: '0.3s' }}> {/* we are writing this because of the animation we are giving to the logos */}
              <AiFillGoogleCircle />

            </div>

            <div style={{ animationDelay: '0.6s' }}>
              <AiFillAmazonCircle />

            </div>

            <div style={{ animationDelay: '0.9s' }}>
              <AiFillYoutube />

            </div>

            <div style={{ animationDelay: '1.2s' }}>
              <AiFillInstagram />

            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home