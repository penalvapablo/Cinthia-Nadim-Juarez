import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false)
  const mobileNavFn = () => {
    setMobileNav(!mobileNav)
  }
  if (typeof window !== "undefined") {
    mobileNav ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'auto'
  }

  return (
    <div className='relative z-10'>
      <div id='burger' className='absolute top-7 right-10 '>
        <button onClick={mobileNavFn}>
          <FontAwesomeIcon icon={faBars} className='h-[30px] text-primary text-end justify-items-end' />
        </button>

      </div>
      {mobileNav && <div className='h-screen flex flex-col justify-center'>{children}</div>}
      {/* {children} */}
    </div>
  )
}

export default Header