import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'; // ✅ use react-router-dom
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId)); // error from this line id 
   
    console.log("All products:", all_product);
    console.log("Product ID from URL:", productId);
    console.log("Matched Product:", product);

    if (!product) {
      return <div>Product not found.</div>; // fallback UI
    }

  return (
    <div>
       
       <Breadcrum product={product} />
       <ProductDisplay product={product} />
       <DescriptionBox />
       <RelatedProducts/>
    </div>
  )
}

export default Product
