

const NavMobile2 = ({ mobileNavFn }) => {
  return (

    // <nav class="bg-secondary h-[50%] flex items-center justify-center ">
    <nav class="bg-secondary h-screen flex items-center justify-center ">
      <ul class="h-[100%] max-h-[300px] flex flex-col items-center text-center justify-around">
        <li><a class="text-primary font-sans font-bold text-navLinks" href="/">Inicio</a></li>
        <li><a class="text-primary font-sans font-bold text-navLinks " href="/">Consulta</a></li>
        <li><a class="text-primary font-sans font-bold text-navLinks " href="">Sobre mi</a></li>
        <li><a class="text-primary font-sans font-bold text-navLinks " href="/metodo">Método</a></li>
        <li><a class="text-primary font-sans font-bold text-navLinks " href="/preguntas">Preguntas Frecuentes</a></li>
        <li><a class="text-primary font-sans font-bold text-navLinks " href="#contacto" onClick={mobileNavFn}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default NavMobile2