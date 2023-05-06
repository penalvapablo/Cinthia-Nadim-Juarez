import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer
      id="contacto"
      className=" bg-primary">
      <h2 className="pt-[30px] pb-12 text-center text-6xl font-semibold tracking-wide text-secondary md:text-8xl">
        Contacto
      </h2>
      <div className="mx-auto mb-[50px] flex h-[200px] w-fit flex-col items-start justify-around">
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="h-[40px] justify-items-end text-end text-secondary"
          />
          {/* <p className="text-xl text-secondary">
            +491785279833
          </p> */}
          <a
            className="text-xl text-secondary duration-100 hover:text-2xl"
            href="tel:+491785279833">
            491785279833
          </a>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-[40px] justify-items-end text-end text-secondary"
          />
          <button className="text-xl text-secondary duration-100 hover:text-2xl ">
            <a
              href="https://api.whatsapp.com/send?phone=491785279833"
              rel="noreferrer"
              target="_blank">
              +491785279833
            </a>
          </button>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-[40px] justify-items-end text-end text-secondary"
          />
          <p className="text-xl text-secondary ">
            cinthianadim@gmail.com
          </p>
        </div>
      </div>
      <p className="pb-1 text-center text-xs text-secondary">
        Todos los derechos reservados 2022
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> - </span>
        Cinthia Nadim Juarez <br className="sm:hidden" />{' '}
        <span className="hidden sm:inline"> - </span>{' '}
        Desarrollado por{' '}
        <a
          href="https://penalva-portfolio.vercel.app/"
          target="_blank"
          aria-label="link a portfolio"
          className="border-b">
          Pablo
        </a>
      </p>
    </footer>
  );
};

export default Footer;
