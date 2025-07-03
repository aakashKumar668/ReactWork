import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const {addTocart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} className='productdisplay-main-img' alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(130)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                ${product.new_price}

                </div>
              
            </div>
            <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur quidem numquam incidunt suscipit, laboriosam voluptates facilis magnam quibusdam nisi minus accusantium ipsam, laborum eaque id porro quam veritatis odio.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>

                </div>
                <button className='productdisplay-right-button' onClick={()=>{addTocart(product.id)}}>Add To Cart</button>
                <div className="productdisplay-right-category">
                    <span>Category: <span>Women, T-Shirt, Crop Top</span></span>

                </div>
                <div className="productdisplay-right-category">
                    <span>Tags: <span>Modern, Latest, Trend Shorts</span></span>

                </div>
        </div>

    </div>
  )
}

export default ProductDisplay