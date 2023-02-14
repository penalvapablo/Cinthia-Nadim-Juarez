import { useState } from 'react';
import Header from './Header';

const Hero = () => {
  const [heroTextBox, setHeroTextBox] = useState(true);
  const heroTextBoxFn = () => {
    setHeroTextBox(!heroTextBox);
  };
  return (
    <>
      <div className="relative h-[100vh] min-h-[600px] bg-[url('/bg-mobile.jpg')] bg-cover bg-center bg-no-repeat lg:min-h-[900px] lg:bg-[url('/bg-desktop.jpg')] landscape:h-[screen] landscape:min-h-[900px] ">
        <Header
          isInHomepage={true}
          heroTextBoxFn={heroTextBoxFn}
        />
        <h1 className=" absolute top-[100px] left-1/2 w-full translate-x-[-50%] pb-12 text-center text-5xl font-semibold leading-[45px] tracking-wide text-primary sm:text-7xl md:leading-[60px] lg:top-[150px] xl:top-[170px]  landscape:text-7xl">
          Cinthia <br className="xl:hidden" /> Nadim Juarez
        </h1>
        {heroTextBox && (
          <div
            id="heroBox"
            className={
              'absolute top-[45%] left-1/2 flex h-[50%] max-h-[400px] w-[90%] translate-x-[-50%] flex-col items-center justify-between text-center sm:top-[50%] lg:top-[65%] landscape:top-[45%]  '
            }>
            <p className="text-lg md:text-2xl">
              ¿Necesitas atencion psicológica con una
              persona que hable tu mismo idioma?
            </p>
            <p className="text-lg md:text-2xl">
              ¿Eres hispanohablante y buscas una persona que
              comparta tus costumbres y comprenda desde
              adentro tu cultura y tus orígenes?
            </p>
            <p className="pb-7 text-lg md:text-2xl">
              Este es el sitio para ti.
            </p>

            <button className="rounded-[15px] bg-secondary py-2 px-20 text-2xl text-primary shadow-btn  duration-300  hover:bg-primary hover:text-secondary ">
              <a href="#contacto">Hablemos</a>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
