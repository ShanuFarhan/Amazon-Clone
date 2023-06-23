import React from 'react'
import Products from '../Products/products'
const Listproduct = () => {
  return (
    <>
    <div>
    <div className="homeRow">
                <Products title="Fitbit Watch" 
                    price={2000} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
                <Products title="Fitbit Watch" 
                    price={1399} 
                    image="https://m.media-amazon.com/images/I/61wJNP17lEL._AC_UL400_.jpg"/>
                    <Products title="Dream World Bluetooth Wireless Headphone RG-518 (3)" 
                    price={4500} 
                    image="https://m.media-amazon.com/images/I/31jSfjq9GJL._AC_SY200_.jpg"/>
                    <Products title="ASTOUND Bluetooth Wireless Earphones Earbuds Headphones" 
                    price={1299} 
                    image="https://m.media-amazon.com/images/I/51pQeFfwiCL._AC_SY200_.jpg"/>
                </div>
            <div className="secondrow">
                <Products title="Istyle Can Dresses for Women V Neck Shoulder Strap Sleeveless Fit and Flare Mini Length Dress " 
                    price={369} 
                    image="https://m.media-amazon.com/images/I/61NPBdDBojL._UL1440_.jpg"/>
                <Products title="D'amor Cold Shoulder Multicolor Crepe Dress for Women" 
                    price={869} 
                    image="https://m.media-amazon.com/images/I/61BR5fifP3L._UL1500_.jpg"/>
                    <Products title="AHANA WRAP Tiered Crepe MIDI Dress" 
                    price={799} 
                    image="https://m.media-amazon.com/images/I/81lSpbHtVDL._UL1500_.jpg"/>
                    <Products title="Sharleez Women's Solid Bodycon Western Mini Dress for Women/Girls" 
                    price={699} 
                    image="https://m.media-amazon.com/images/I/61F6xL4cMYL._UL1046_.jpg"/>
            </div>
            <div className="secondrow">
                <Products title="JOLOCHIP LAST-CHIP-CHALLENGE (PACK OF 1)" 
                    price={249} 
                    image="https://m.media-amazon.com/images/I/61Smw3GdtZL._SX679_.jpg"/>
                <Products title="Ferrero Rocher Premium Chocolates 24 Pieces, 300 g" 
                    price={895} 
                    image="https://m.media-amazon.com/images/I/71Ksr+YG5sL._SX679_.jpg"/>
                    <Products title="Wonderland Foods Healthy Dry Fruits Combo Pack 1.5Kg (500g X 3)" 
                    price={949} 
                    image="https://m.media-amazon.com/images/I/81+mfzBSRxL._SX679_PIbundle-3,TopRight,0,0_AA679SH20_.jpg"/>
                    <Products title="MYFITNESS Chocolate Peanut Butter Crunchy 510g" 
                    price={266} 
                    image="https://m.media-amazon.com/images/I/61u2TCFc6QL._SX679_.jpg"/>
            </div>
            <div className="secondrow">
                <Products title="EM5 Set of 3 Body Mist" 
                    price={999} 
                    image="https://m.media-amazon.com/images/I/71CWj2FksWL._SY450_PIbundle-3,TopRight,0,0_AA450SH20_.jpg"/>
                <Products title="Murtela Gold Face Wash, Remove Blackheads" 
                    price={275} 
                    image="https://m.media-amazon.com/images/I/9171KBwW+YL._SY450_.jpg"/>
                    <Products title="MY BODYCARE Brightening Face Care Kit" 
                    price={383} 
                    image="https://m.media-amazon.com/images/I/712z2r46EtL._SY450_PIbundle-2,TopRight,0,0_AA450SH20_.jpg"/>
                    <Products title="C2P PRO Slice Non Transfer Matte Lipstick" 
                    price={419} 
                    image="https://m.media-amazon.com/images/I/51YjbgkMO7L._SY450_.jpg"/>
            </div>
    </div>
    </>
  )
}

export default Listproduct
