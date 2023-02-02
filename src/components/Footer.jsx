import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer
      id="contacto"
      className=" bg-primary"
    >
      <h2 className="pt-[30px] pb-12 text-center font-sans text-title_m font-bold tracking-wide text-secondary">
        Contacto
      </h2>
      <div className="mx-auto mb-[50px] flex h-[200px] w-fit flex-col items-start justify-around">
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="h-[40px] justify-items-end text-end text-secondary"
          />
          <p className="font-sans text-paragraph font-semibold text-secondary">
            +491785279833
          </p>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-[40px] justify-items-end text-end text-secondary"
          />
          <button className="font-sans text-paragraph font-semibold text-secondary ">
            <a
              href="https://api.whatsapp.com/send?phone=491785279833"
              rel="noreferrer"
              target="_blank"
              className="duration-100 hover:text-[20px]"
            >
              +491785279833
            </a>
          </button>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-[40px] justify-items-end text-end text-secondary"
          />
          <p className="font-sans text-paragraph font-semibold text-secondary ">
            cinthnadim@gmail.com
          </p>
        </div>
      </div>
      <p className="text-center text-[12px] text-secondary">
        Todos los derechos reservados 2022 - Cinthia Nadim
        Juarez
      </p>
    </footer>
  );
};

export default Footer;
