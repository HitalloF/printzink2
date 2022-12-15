import React from 'react'
import styles from './styles/Silk.module.css'
import img from '../img/services/silk.jpg'
const Silk = () => {
  return (
    <div>        <div >
    <h1>SILK CREEN</h1>
    <p>At our company, we offer high-quality screen printing services for a variety of commercial and retail applications.<br/> Screen printing, also known as silkscreen printing, is a popular method of printing because it is versatile,<br/>  durable, cost-efficient, and produces vibrant, long-lasting results.<br/></p>
    <div className={styles.txtImg}>
      <div>
    <h2>Advantages of Silkscreen Printing</h2>
    <ul>
   <li>•	Cheap for large quantity printing.</li> 
   <li>•	Cost effective when fewer ink colors are needed (i.e. 1 or 2 colours).</li> 
   <li>•	Designs can be very detailed (e.g. small text, fine lines).</li> 
    </ul>
    </div>
    <div >
    <img src={img}></img>
    </div>
    </div>
    
    <p>One of the main advantages of screen printing is its cost-effectiveness. <br/>It is ideal for large quantity printing and when fewer ink colors are needed. This makes it a cost-efficient option for businesses looking to mass produce their products. <br/>Additionally, screen printing allows for detailed designs, such as small text and fine lines, <br/>giving you the ability to create unique and authentic outputs.</p>
    <p>We can print on a wide range of materials, including fabric, plastic, metal, and more. <br/>This means that our screen printing services can be used to produce a variety of products, <br/> such as T-shirts, hats, banners, posters, and more. We can also print on unique shapes, <br/> such as mugs and bottles, allowing you to create truly one-of-a-kind products.</p>
    </div></div>
  )
}

export default Silk