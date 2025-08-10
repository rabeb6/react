 import react from 'react';
import product from './product';                          
 function Image({image}) {
   return (

     <div>
       <img src={image} alt={product.name} style={{width:'310px', height:'250px'}}/>
     </div>
   );
 }
  export default Image;