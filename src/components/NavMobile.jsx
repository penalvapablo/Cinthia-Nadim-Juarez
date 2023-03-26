const NavMobile = ({ mobileNavFn, isInHomepage }) => {
  return (
    <>
      {isInHomepage ? (
        <nav className="relative flex h-screen items-center justify-center overscroll-contain bg-secondary bg-opacity-0 landscape:z-10 landscape:bg-opacity-100">
          <ul className="absolute top-[45%] flex h-[100%] max-h-[300px] flex-col items-center justify-around  text-center md:top-[50%] landscape:top-[10%]">
            <li>
              <a
                className="text-xl text-primary"
                href="/">
                Inicio
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/#consulta"
                onClick={mobileNavFn}>
                Consulta
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/about">
                Sobre mi
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/metodo">
                Método
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/preguntas">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="#contacto"
                onClick={mobileNavFn}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex h-screen items-center justify-center bg-secondary ">
          <ul className="flex h-[100%] max-h-[300px] flex-col items-center justify-around text-center">
            <li>
              <a
                className="text-xl text-primary"
                href="/">
                Inicio
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/#consulta"
                onClick={mobileNavFn}>
                Consulta
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/about">
                Sobre mi
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/metodo">
                Método
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="/preguntas">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                className="text-xl text-primary "
                href="#contacto"
                onClick={mobileNavFn}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavMobile;
