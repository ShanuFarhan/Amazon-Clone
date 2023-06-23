import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {BsBasket3Fill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
const Header = () => {
  return (
    <>
    <nav className="header">
      <div className="headerTop">
        <div className="headerleft">
          <AiOutlineMenu/>
        </div>

        <Link to="/">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="/" className='logo' />
        </Link>
        <div className="headerserach">
          <input type="text" className='searchinput' />
          <BsSearch className='searchicon'/>
        </div>
        <div className="headerNavbar">
          <Link to="/Login" className="headerlink">
            <div className="headeroption">
              <span className="headeroption1">Hello</span>
              <span className="headeroption2">user</span>
            </div>
          </Link>

          <Link to="/Order" className="headerlink">
            <div className="headeroption">
              <span className="headeroption1">Return</span>
              <span className="headeroption2">Order</span>
            </div>
          </Link>

          <Link to="/" className="headerlink">
            <div className="headeroption">
              <span className="headeroption1">Try</span>
              <span className="headeroption2">Prime</span>
            </div>
          </Link>

          <Link to="/Profile" className="headerlink">
            <div className="headeroption">
              <span className="headeroption1">Your</span>
              <span className="headeroption2">Profile</span>
            </div>
          </Link>

          <Link to="/Cart" className="headerlink">
            <div className="headeroption_basket">
              <BsBasket3Fill/>
              <span className="headeroption2 basketCount">4</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="headerbottom">
        <div className="headeraddress">
          <div className="headeraddress_icon">
              <ImLocation2/>
          </div>
          <div className="headeroption">
            <span className="headeroption1">Delivery To</span>
            <span className="headeroption2">Home</span>
          </div>
        </div>
        <div className="headerbotton_navbar">
        <span>
          <Link to="/listProduct" className='headerLink'>
            All Products
          </Link>
        </span>
        <span>Book</span>
        <span>New Release</span>
        <span>Gift Ideas</span>
        <span>Amazon Pay</span>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
