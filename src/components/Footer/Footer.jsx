import React from 'react'
import '../Footer/Footer.scss'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <div className="footer-hrnet">
      <img src={logo} alt="" />
      <div>
        <p>© 2023 HRnet. All rights reserved</p>
      </div>
    </div>
  )
}
