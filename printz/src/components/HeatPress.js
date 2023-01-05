import React from 'react'
import styles from './styles/HeatPress.module.css'
import Heat from '../img/services/heat.png'
const HeatPress = () => {

  React.useEffect(() => {
    document.title = 'PrintZInk - Heat Press';
  }, []);

  return (
    <div>
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
    </div>
  )
}

export default HeatPress