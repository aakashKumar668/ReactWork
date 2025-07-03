import React, { useContext } from 'react'
import "../Css/shopCategory.css"
import { ShopContext} from '../context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../components/Item/Item'
const ShopCategory = (props) => {
const {all_product}=useContext(ShopContext)

  return (
    <div className='shop-category'>
<img src={props.banner} className='shopcategory-banner' alt="" />
<div className="shopcategory-indexSort">
  <p>
    <span>Showing 1-2</span> out of 36 products
  </p>
  <div className="shopCategory-short">
Sort by <img src={dropdown_icon} alt="" />
  </div>
</div>
<div className="shopCategory-products">
  {all_product.map((item, i)=>{
if (props.category ===item.category) {
  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
}else {
  return null
}
  })}
</div>

<div className="shopcategory-loadmore">
  explore more...
</div>
    </div>
  )
}

export default ShopCategory