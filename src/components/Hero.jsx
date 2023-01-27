import { useState } from "react"
import Header from "./Header"

const Hero = () => {
  const [heroTextBox, setHeroTextBox] = useState(true)
  const heroTextBoxFn = () => {
    setHeroTextBox(!heroTextBox)

  }
  return (
    <>
      <div className="min-h-[600px] h-[100vh] bg-[url('/bg-mobile.jpg')] lg:bg-[url('/bg-desktop.jpg')] relative bg-center bg-no-repeat bg-cover lg:min-h-[900px] ">
        <Header isInHomepage={true} heroTextBoxFn={heroTextBoxFn} />
        <h1 className="font-sans text-title_m md:text-title_d font-black text-primary text-center top-[100px] pb-12 tracking-wide leading-[45px] md:leading-[60px] absolute left-1/2  translate-x-[-50%] w-[325px] md:w-[500px] xl:w-[800px] xl:top-[170px] lg:top-[150px]">Cinthia <br className="lg:hidden" /> Nadim Juarez</h1>
        {heroTextBox &&
          <div id="heroBox" className={"absolute flex flex-col text-center items-center justify-between top-[45%] left-1/2 translate-x-[-50%] w-[90%] h-[50%] max-h-[350px] md:max-h-[250px] md:top-[50%] lg:max-h-[300px] lg:top-[60%]"}>
            <p className="lg:text-[22px]">¿Necesitas atencion psicológica con una persona que hable tu mismo idioma?</p>
            <p className="lg:text-[22px]">¿Eres hispanohablante y buscas una persona que comparta tus costumbres y comprenda desde adentro tu cultura y tus orígenes?</p>
            <p className="lg:text-[22px]">Este es el sitio para ti.</p>

            <button className="text-primary bg-secondary text-[25px] font-bold py-2 px-20 rounded-[15px] shadow-btn">
              <a href="#contacto">
                Hablemos
              </a>
            </button>
          </div>}

      </div>
    </>
  )
}

export default Hero