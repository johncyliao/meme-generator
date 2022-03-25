import React from 'react'
import { SiDatadog } from  'react-icons/si'

const Header = () => {
  return (
    <header>
        <SiDatadog className='header-image'  />
        <h2 className="header-title">Meme Generator</h2>
    </header>
  )
}

export default Header