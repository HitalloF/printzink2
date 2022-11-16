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
    <section>
      <div className='container'>
      <div className={styles.silk}>
        <div className={styles.silktxt}>
        <h1>SILK CREEN</h1>
        <p>The silkscreen is a layer of ink trace <strong>used to identify the PCB components, marks, logos, symbols, and so on.</strong>  If you see,<br/> a PCB comprises two parts – components and soldering. Mostly, the silkscreen is applied to the component  part of the PCB. <br/>Nowadays, it is also applied  to the soldering part,<br/></p>
        
        <h2>Advantages of Silkscreen Printing</h2>
        <ul>
       <li>•	Cheap for large quantity printing.</li> 
       <li>•	Cost effective when fewer ink colors are needed (i.e. 1 or 2 colours).</li> 
       <li>•	Designs can be very detailed (e.g. small text, fine lines).</li> 
        </ul>
        <h2>Cost-Efficient & Yields Large Volumes</h2>
        <p>On long print runs, screen printing is still much more cost-efficient compared to <strong>digital printing</strong>, as marginal production times (i.e. per item) <br/>are much faster. Thus higher volumes can be mass produced using screen printing more quickly and more cost  <br/> effectively for larger orders.</p>
        <h2>Provides Long-lasting, High Quality Results</h2>
        <p>The ability of the screen printing ink, like water based inks, to bond to the material of <br/> the garment can result in a much more durable graphic compared to digital printing.<br/>  Heat cured screen prints are durable enough to handle <br/> repeat washing without cracking or fading.</p>
        <h2>Bottom Line</h2>
        <p>Versatile, durable, cost-efficient and high quality; these are just four of the many reasons<br/>  why screen printing continues to be one of the most popular methods of <br/>  printing in a variety of commercial and retail applications.</p>
        <p>For top quality screen printing inks and eco friendly inks, contact us at Colormaker Industries.<br/>  We produce a wide range of PERMASET® premium quality screen printing inks<br/>  for textiles to ensure that you get the best printing outputs.</p>


        <h2>Creates Unique and Authentic Outputs</h2>
<p>Screen printing can create a different visual output when compared to digital<br/>  printing. Screen printing ink is typically applied more thickly, resulting in longer-lasting,<br/>  brighter and more vibrant colours, even on darker backgrounds. For garment design<br/>  that requires a high level of vibrancy when printing on dark grounds, screen printing is <br/> still the best option</p>

<h2>Very Versatile</h2>

<p>Screen printing accommodates a wide range of materials, including vinyl, fabric, <br/>rigid plastic, foam board, metal, glass and many others. The printer can produce different <br/>products, such as banners, T-shirts, hats, posters and wallpapers using the same screens. <br/>It is also not limited by size or shape, so distinctive shapes like those of mugs<br/> and bottles can be designed using this printing method.</p>
<h1>HEAT PRESS</h1>
<p>A heat press is used to permanently apply a heat transfer to a surface. <br/> Common transfer types are Heat Transfer Vinyl cut with a vinyl cutter, Printable Heat Transfer <br/> Vinyl, Inkjet Transfer Paper, Laser Transfer Paper, <br/> Plastisol Transfers, and Sublimation.</p>
<p>HTV works best on cotton or polyester or cotton/poly blends. Other synthetic fabrics,<br/>  like acrylic, won't work correctly because they will melt under the heat of an iron. <br/> For more advanced crafters, you can apply HTV to mugs,<br/>  baseball hats, footballs and even wood!</p>
<ul>
  <li>•	Low printing costs</li>
  <li>•	Durability of the print image</li>
  <li>•	High contrast and high edge sharpness (important e.g. for barcodes)</li>
  <li>•	Low maintenance and proven technology</li>
  <li>•	High printing speed (up to 300 mm/second)</li>
</ul>
<h1>Embroidery</h1>
<p>Embroidery gives you that <strong>extra professional touch that cannot be achieved with printing.</strong><br/> With a more luxurious look, you send the right message with your uniform. <br/> By embroidering your company logo or message onto an item of clothing, <br/>you ensure that you are providing the highest quality for your design.</p>
<p>The advantage of embroidery is that <strong>it provides an extremely durable, vibrant imprint that will survive any number of wash cycles.</strong> The main disadvantages are that depending on the complexity and size of your design it can be substantially more expensive than other print methods.</p>
<h3>What are the main advantages of embroidery?</h3>
<ul>
<li>•	Durability. One of the main benefits of embroidery is that it is extremely long lasting. ...</li>
<li>•	Long Lasting Color. </li>
<li>•	Suited to Hard-To-Print-On Materials. </li>
<li>•	More Colors at No Extra Cost. </li>
<li>•	Has a Quality look. </li>
<li>•	Ideal for Logos. </li>
</ul>

    </div>
  </div>     
</div>

</section>
  )
}

export default Service