import React from 'react'
import styles from './styles/Embroidery.module.css'
import img from '../img/services/bordado.png'
const Embroidery = () => {
  return (
    <div>

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
<img src={img}></img>
</div>
</div>

    </div>
  )
}

export default Embroidery