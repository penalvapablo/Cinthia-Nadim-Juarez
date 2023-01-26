
const NavMobile = ({ mobileNavFn, isInHomepage }) => {

  return (
    <>
      {isInHomepage ?

        <nav className="bg-secondary bg-opacity-0 h-screen flex items-center justify-center relativa overscroll-contain">
          <ul className="h-[100%] max-h-[300px] flex flex-col items-center text-center justify-around absolute  top-[45%] md:top-[50%]">
            <li><a className="text-primary font-sans font-bold text-navLinks" href="/">Inicio</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/#consulta" onClick={mobileNavFn}>Consulta</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/about">Sobre mi</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/metodo">Método</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/preguntas">Preguntas Frecuentes</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="#contacto" onClick={mobileNavFn}>Contacto</a></li>
          </ul>
        </nav>
        :
        <nav className="bg-secondary h-screen flex items-center justify-center ">
          <ul className="h-[100%] max-h-[300px] flex flex-col items-center text-center justify-around">
            <li><a className="text-primary font-sans font-bold text-navLinks" href="/">Inicio</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/#consulta" onClick={mobileNavFn}>Consulta</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/about">Sobre mi</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/metodo">Método</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="/preguntas">Preguntas Frecuentes</a></li>
            <li><a className="text-primary font-sans font-bold text-navLinks " href="#contacto" onClick={mobileNavFn}>Contacto</a></li>
          </ul>
        </nav>
      }

    </>
  )
}

export default NavMobile