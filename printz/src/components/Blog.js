import React from 'react'
import styles from './styles/Blog.module.css'
import bluecost from '../img/blog/bluecost/bluecostcapa.png'
import { NavLink } from 'react-router-dom'
const Blog = () => {
  return (
    <section className={styles.blogs}>
        <div className={styles.box}>
            <h1>Blue Cost</h1>
            <div className={styles.case}>
                <img src={bluecost} />
            </div>
            <NavLink to="/blog/bluecoast"><h2>Let's see</h2></NavLink>
        </div>
        
        <div>
            <div></div>
        </div>
    </section>
  )
}

export default Blog