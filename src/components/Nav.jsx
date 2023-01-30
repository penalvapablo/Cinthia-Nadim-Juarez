import React from 'react'

const Nav = ({ isInHomepage }) => {
  return (
    <>
      {
        isInHomepage ?
          <nav className='max-[1023px]:hidden w-[800px] pt-[50px] mx-auto '>
            < ul className="flex justify-between" >
              <li><a className="text-secondary font-sans font-bold text-navLinks hover:text-primary duration-300 " href="/">Inicio</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks hover:text-primary duration-300" href="/#consulta">Consulta</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks hover:text-primary duration-300" href="/about">Sobre mi</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks hover:text-primary duration-300" href="/metodo">Método</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks hover:text-primary duration-300" href="/preguntas">Preguntas Frecuentes</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks hover:text-primary duration-300" href="#contacto">Contacto</a></li>
            </ul>
          </nav > :
          <nav className='max-[1023px]:hidden h-[130px]  bg-primary'>
            <ul className="w-[800px] mx-auto h-[100%]  flex justify-between items-center">
              <li><a className="text-secondary font-sans font-bold text-navLinks" href="/">Inicio</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks" href="/#consulta">Consulta</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks" href="/about">Sobre mi</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks" href="/metodo">Método</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks" href="/preguntas">Preguntas Frecuentes</a></li>
              <li><a className="text-secondary font-sans font-bold text-navLinks" href="#contacto">Contacto</a></li>
            </ul>
          </nav>}
    </>
  )
}

export default Nav