import React from 'react'
import Silk from '../img/services/silk.jpg'
import Bordado from '../img/services/bordado.png'
import Heat from '../img/services/heat.png'
import styles from './styles/Service.module.css'
const Service = () => {


  React.useEffect(() => {
    document.title = 'PrintZInk - SERVICE';
  }, []);

  
  return (
    <section className={styles.sectionService}>
      <div className='container'>
      <div className={styles.silk}>
        <div className={styles.silktxt}>
        <div >
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
        <img src={Silk}></img>
        </div>
        </div>
        
        <p>One of the main advantages of screen printing is its cost-effectiveness. <br/>It is ideal for large quantity printing and when fewer ink colors are needed. This makes it a cost-efficient option for businesses looking to mass produce their products. <br/>Additionally, screen printing allows for detailed designs, such as small text and fine lines, <br/>giving you the ability to create unique and authentic outputs.</p>
        <p>We can print on a wide range of materials, including fabric, plastic, metal, and more. <br/>This means that our screen printing services can be used to produce a variety of products, <br/> such as T-shirts, hats, banners, posters, and more. We can also print on unique shapes, <br/> such as mugs and bottles, allowing you to create truly one-of-a-kind products.</p>
        </div>
<h1>HEAT PRESS</h1>
<p>A heat press is used to permanently apply a heat transfer to a surface. <br/> Common transfer types are Heat Transfer Vinyl cut with a vinyl cutter, Printable Heat Transfer <br/> Vinyl, Inkjet Transfer Paper, Laser Transfer Paper, <br/> Plastisol Transfers, and Sublimation.</p>
<p>HTV works best on cotton or polyester or cotton/poly blends. Other synthetic fabrics,<br/>  like acrylic, won't work correctly because they will melt under the heat of an iron. <br/> For more advanced crafters, you can apply HTV to mugs,<br/>  baseball hats, footballs and even wood!</p>

<div className={styles.txtImg}>
  <div>
  <ul>
  <li>•	Low printing costs</li>
  <li>•	Durability of the print image</li>
  <li>•	High contrast and high edge sharpness (important e.g. for barcodes)</li>
  <li>•	Low maintenance and proven technology</li>
  <li>•	High printing speed (up to 300 mm/second)</li>
</ul>
</div>
<div>  <img src={Heat}></img></div></div>
<h1>Embroidery</h1>
<p>Embroidery gives you that <strong>extra professional touch that cannot be achieved with printing.</strong><br/> With a more luxurious look, you send the right message with your uniform. <br/> By embroidering your company logo or message onto an item of clothing, <br/>you ensure that you are providing the highest quality for your design.</p>
<p>The advantage of embroidery is that <strong>it provides an extremely durable, vibrant imprint that will survive any number of wash cycles.</strong> The main disadvantages are that depending on the complexity and size of your design it can be substantially more expensive than other print methods.</p>
<h3>What are the main advantages of embroidery?</h3>
<div className={styles.txtImg}>
  <div>
<ul>
<li>•	Durability. One of the main benefits of embroidery is that it is extremely long lasting. ...</li>
<li>•	Long Lasting Color. </li>
<li>•	Suited to Hard-To-Print-On Materials. </li>
<li>•	More Colors at No Extra Cost. </li>
<li>•	Has a Quality look. </li>
<li>•	Ideal for Logos. </li>
</ul>
</div>
<div>
<img src={Bordado}></img>
</div>
</div>

    </div>
  </div>     
</div>

</section>
  )
}

export default Service