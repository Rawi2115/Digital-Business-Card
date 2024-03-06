
import { useState } from 'react'
import './App.css'
import professionalCat from  "./professional.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card-container">
          <img src={professionalCat} alt="" />
          <div className="card-content">
            <h2>Abdulhamid Haitham</h2>
            <h4>Frontend Developer</h4>
            <div className="mail-linkedin-buttons">
              <a 
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=abdulhamidhaitham215@gmail.com"
              target='_blank'
              
              >
                <button className='mail'>
                <i className="fa-solid fa-envelope"></i>
                Email</button>
              </a>
              <a 
              href="https://www.linkedin.com/in/abdulhamid-haitham-3a4744246/"
              target='_blank'
              >
                <button className='linkedIn'>
                <i class="fa-brands fa-linkedin"></i>
                  Linkedin</button>
              </a>
            </div>
            <div className="card-descriptions">
              <h2>About</h2>
              <p>I'm a frontend developer and a computer engineering student with interest in making unique and interesting websites, i try to keep up with new frontend technologies that can make developing websites faster and better looking</p>
              <h2>Interests</h2>
              <p>Film,Music,Videogames,Art especially French comics art</p>
            </div>
          </div>
          <div className="socials">
          <a href="https://www.linkedin.com/in/abdulhamid-haitham-3a4744246/"
          target='_blank'>
            <button><i class="fa-brands fa-linkedin"></i></button>
          </a>
          <a href="https://github.com/Rawi2115" target='_blank'>
            <button><i class="fa-brands fa-github"></i></button>
          </a>
          
          
          </div>
      </div>
      
    </>
  )
}

export default App
