import { useState } from 'react';
import Header from './Header';

const Hero = () => {
  const [heroTextBox, setHeroTextBox] = useState(true);
  const heroTextBoxFn = () => {
    setHeroTextBox(!heroTextBox);
  };
  return (
    <>
      <div className="relative h-[100vh] min-h-[600px] bg-[url('/bg-mobile.jpg')] bg-cover bg-center bg-no-repeat lg:min-h-[900px] lg:bg-[url('/bg-desktop.jpg')] ">
        <Header
          isInHomepage={true}
          heroTextBoxFn={heroTextBoxFn}
        />
        <h1 className=" absolute top-[100px] left-1/2 w-[325px] translate-x-[-50%] pb-12 text-center font-sans text-title_m font-black leading-[45px] tracking-wide text-primary  md:w-[500px] md:text-title_d md:leading-[60px] lg:top-[150px] xl:top-[170px] xl:w-[800px]">
          Cinthia <br className="lg:hidden" /> Nadim Juarez
        </h1>
        {heroTextBox && (
          <div
            id="heroBox"
            className={
              ' absolute top-[45%] left-1/2 flex h-[50%] max-h-[350px] w-[90%] translate-x-[-50%] flex-col items-center justify-between text-center md:top-[50%] md:max-h-[250px] lg:top-[60%]  lg:max-h-[300px]'
            }>
            <p className="lg:text-[22px]">
              ¿Necesitas atencion psicológica con una
              persona que hable tu mismo idioma?
            </p>
            <p className="lg:text-[22px]">
              ¿Eres hispanohablante y buscas una persona que
              comparta tus costumbres y comprenda desde
              adentro tu cultura y tus orígenes?
            </p>
            <p className="lg:text-[22px]">
              Este es el sitio para ti.
            </p>

            <button className="rounded-[15px] bg-secondary py-2 px-20 text-[25px] font-bold text-primary shadow-btn  duration-300  hover:bg-primary hover:text-secondary ">
              <a href="#contacto">Hablemos</a>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
