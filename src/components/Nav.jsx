import React from 'react';

const Nav = ({ isInHomepage }) => {
  return (
    <>
      {isInHomepage ? (
        <nav className="mx-auto w-[950px] pt-[50px] max-[1023px]:hidden ">
          <ul className="flex justify-between">
            <li>
              <a
                className="text-2xl  text-secondary duration-300 hover:text-primary "
                href="/">
                Inicio
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary duration-300 hover:text-primary"
                href="/#consulta">
                Consulta
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary duration-300 hover:text-primary"
                href="/about">
                Sobre mi
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary duration-300 hover:text-primary"
                href="/metodo">
                Método
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary duration-300 hover:text-primary"
                href="/preguntas">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary duration-300 hover:text-primary"
                href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="h-[130px] bg-primary  max-[1023px]:hidden">
          <ul className="mx-auto flex h-[100%] w-[950px] items-center justify-between">
            <li>
              <a
                className=" text-2xl  text-secondary"
                href="/">
                Inicio
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary"
                href="/#consulta">
                Consulta
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary"
                href="/about">
                Sobre mi
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary"
                href="/metodo">
                Método
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary"
                href="/preguntas">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                className=" text-2xl  text-secondary"
                href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
