import React from 'react'
import "./Footer.css"
import {AiOutlineArrowUp} from 'react-icons/ai'
const Footer = () => {
    const scrol=()=>{
        window.scrollTo(0,0)
    }
  return (
    <>
    <div className="footer">
        <a onClick={scrol}>
        <div className="footerbottomtotop">
            <AiOutlineArrowUp/>
        </div>
        </a>
        <div className="footerRow">
            <div className="footerColumn">
                <div className="footercolumnhead">
                    Get To Know UIs
                </div>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Amazon Cares</li>
                    <li>Gift Products</li>
                </ul>
            </div>
            <div className="footerColumn">
                <div className="footercolumnhead">
                    Connect To Us
                </div>
                <ul>
                    <li>Meta</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Github</li>
                </ul>
            </div>
            <div className="footerColumn">
                <div className="footercolumnhead">
                    Make Money
                </div>
                <ul>
                    <li>Amazon Pay</li>
                    <li>Become An Affiliate</li>
                    <li>Sell On Amazon</li>
                    <li>Fulfilment by Amazon</li>
                </ul>
            </div>
            <div className="footerColumn">
                <div className="footercolumnhead">
                Let Us Help You
                </div>
                <ul>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>Amazon App Download</li>
                    <li>Help</li>
                </ul>
            </div>
                    
        </div>
    </div>
    </>
  )
}

export default Footer
