import React from "react";
import styles from "./styles/BlueCoast.module.css";
import image1 from "../../img/blog/bluecost/1.png";
import image2 from "../../img/blog/bluecost/2.png";
import image3 from "../../img/blog/bluecost/3.png";
import {NavLink} from 'react-router-dom'
const BlueCost = () => {
  return (
    <section className={styles.cost}>
      <h1>BLUE COAST</h1>
      <p>Texto falando sobre a experiencia de trabalho e o trabalho deles</p>
      <div className={styles.top}>
        <div className={styles.topimg}>
          <img src={image1} />
        </div>
      </div>
      <div className={styles.bluecost}>
        <div>
          <div>
            <div className={styles.left}>
              <div>
                <img src={image2} />
              </div>
              <div>
                <img src={image3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.video}> 

          <iframe
            width="372"
            height="661"
            src="https://www.youtube.com/embed/YnWffs3nSFU"
            title="Blue Cost Hat Making."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

      </div>
      <h3>Do like them and bring your company to PrintZInk,<br/> we are waiting for you with open arms!</h3>
      <NavLink to='/contact'><h3>GET STARTER</h3></NavLink>
    </section>
  );
};

export default BlueCost;
