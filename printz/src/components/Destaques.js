import React from 'react'
import styles from './styles/Destaques.module.css';
import destaque from '../img/destaques/1.png'
const Destaques = () => {
  return (
    <section>
        <div>
            <h1>#BB SPOTLIGHT</h1>
            <div>
                <img src={destaque}></img>
                <h2>GROW AND BUILD YOUR BRAND</h2>  
                <ul>
                    <li>Multiple Styles and Colors Available</li>
                    <li>Customize with any patch style (Rogue, Leather, Sublimated)</li>
                    <li>High Quality Private Labeled Headwear and Apparel</li>
                    <li>Get Finished Goods In As Quick As 2 Weeks</li>
                    <button>GET STARTED</button>
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Destaques