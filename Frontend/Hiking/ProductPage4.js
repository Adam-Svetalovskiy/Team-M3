import React, { useState } from "react";
import '../ProductPages.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProductPage4() {
  const [selectedSize, setSelectedSize] = useState("5");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleAddToCart = () => {
    // Replace this with your actual add to cart logic
    console.log(`Added product with size ${selectedSize} to cart.`);
  }

  return (
    <div id="product-page" className="columns">
      <div className="column is-7">
        <Slider {...settings}>
          <div>
            <a href="Product Images/Hiking/Product 4/Targhee III Waterproof Hiking Shoes 1.jpeg" target='blank'><img
              src="Product Images/Hiking/Product 4/Targhee III Waterproof Hiking Shoes 1.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Product Images/Hiking/Product 4/Targhee III Waterproof Hiking Shoes 2.jpeg" target='blank'><img
              src="Product Images/Hiking/Product 4/Targhee III Waterproof Hiking Shoes 2.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Product Images/Hiking/Product 4/Targhee III Waterproof Hiking Shoes 3.jpeg" target='blank'><img
              src="Product Images/Hiking/Product 4/Targhee III Waterproof Hiking Shoes 3.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
          </div>
        </Slider>
      </div>
      <div className
="column is-5">
<section className="products-section bg-color-block">
<div id="product-details">
<h1>Keen Targhee III Waterproof Hiking Shoes</h1>
<p className="product-description">
<hr />
These waterproof hiking shoes have a leather and mesh upper, 
a breathable lining, and a dual-density EVA footbed for comfort and support. 
They also have a non-marking rubber outsole for traction. 
<hr />
</p>
<br />
<ul className="product-features">
<li>- Men</li>
<li>- waterproof Hiking Shoe</li>
<li>- Suitable for all hikers</li>
<li>- Available in sizes 5-15</li>
</ul>
<div id="product-price">£135</div>
<button id="add-to-cart" onClick={() => alert("Added to cart!")}>Add to Cart</button>
<label htmlFor="size-dropdown">Size:</label>
<select name="size-dropdown" id="size-dropdown">
<option value="5">5</option>
<option value="5.5">5.5</option>
<option value="6">6</option>
<option value="6.5">6.5</option>
<option value="7">7</option>
<option value="7.5">7.5</option>
<option value="8">8</option>
<option value="8.5">8.5</option>
<option value="9">9</option>
<option value="9.5">9.5</option>
<option value="10">10</option>
<option value="10.5">10.5</option>
<option value="11">11</option>
<option value="11.5">11.5</option>
<option value="12">12</option>
<option value="12.5">12.5</option>
<option value="13">13</option>
<option value="13.5">13.5</option>
<option value="14">14</option>
<option value="14.5">14.5</option>
</select>
</div>
</section>
</div>
</div>
);
}

export default ProductPage4;