import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import "./products.css"

const products = ({image,title,price}) => {
  return (
    <>
    <div className="products">
        <img src={image}
         alt="" />
         <div className="productinfo">
            <p>{title}</p>
            <div className="productGroup">
                <p className="productprice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="productrating">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
            </div>
         </div>
         <button>Add To Cart</button>
    </div>
    </>
  )
}

export default products
