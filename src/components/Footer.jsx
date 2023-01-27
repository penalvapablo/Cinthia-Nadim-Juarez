import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer id='contacto' className=" bg-primary">
      <h2 className="font-sans text-title_m text-secondary font-bold text-center pt-[30px] pb-12 tracking-wide">Contacto</h2>
      <div className='w-fit h-[200px] flex flex-col items-start justify-around mx-auto mb-[50px]'>
        <div className='flex gap-5 items-center'>
          <FontAwesomeIcon icon={faPhone} className='h-[40px] text-secondary text-end justify-items-end' />
          <p className='text-secondary text-paragraph font-sans font-semibold'>
            +34607548117
          </p>
        </div>
        <div className='flex gap-5 items-center'>
          <FontAwesomeIcon icon={faWhatsapp} className='h-[40px] text-secondary text-end justify-items-end' />
          <button className='text-secondary text-paragraph font-sans font-semibold '>
            <a href='https://api.whatsapp.com/send?phone=491785279833' rel='noreferrer' target="_blank" className='hover:text-[20px] duration-100'>+34607548117</a>

          </button>
        </div>
        <div className='flex gap-5 items-center'>
          <FontAwesomeIcon icon={faEnvelope} className='h-[40px] text-secondary text-end justify-items-end' />
          <p className='text-secondary text-paragraph font-sans font-semibold '>
            cinthnadim@gmail.com
          </p>
        </div>
      </div>
      <p className='text-secondary text-[12px] text-center'>Todos los derechos reservados 2022 - Cinthia Nadim Juarez</p>
    </footer>

  )
}

export default Footer