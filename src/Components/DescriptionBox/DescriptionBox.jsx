import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box fade"> Reviews (122) </div>
        <div className="descriptionbox-nav-box ">Description</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our ecommerce platform, your one-stop shop for all your
          needs! We offer a diverse selection of high-quality products, from
          trendy fashion to cutting-edge electronics, home essentials, and
          accessories. Our user-friendly website ensures a seamless shopping
          experience, with secure checkout and fast, reliable shipping. Explore
          exclusive deals, limited-time offers, and new arrivals to enhance your
          lifestyle. 
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox
