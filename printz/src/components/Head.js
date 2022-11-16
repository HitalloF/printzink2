import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Head.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../img/logopz.png'
import useMedia from '../Hooks/useMedia';

const Head = () => {
  const mobile = useMedia('(max-width:40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  
  let activeStyle = {
    textShadow: "0 0 10px #FFFFFF", 
    textDecoration: "underline",
    color: "green",
  };

  let activeClassName = "underline";


  return (
    <div >
    
    <header className={styles.header}>
      <div className={styles.boxnav}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}

        <nav
          className={`${mobile ? styles.navMobile : styles.block} ${
            mobileMenu && styles.navMobileActive
          } container `}
        >
          <NavLink to="/">HOME</NavLink>
          <NavLink
            activeStyle={{
              color: '#263ca8',
              textShadow: '2px 2px 8px #ff7134',
            }}
            to="/service"
          >
            SERVICE
          </NavLink>
          <NavLink
            activeStyle={{
              color: '#263ca8',
              textShadow: '2px 2px 8px #ff7134',
            }}
            to="/about"
          >
            ABOUT
          </NavLink>
          { <NavLink
            activeStyle={{
              color: '#263ca8',
              textShadow: '2px 2px 8px #ff7134',
            }}
            to="/contact"
          >
            CONTACT
          </NavLink> }
        </nav>
      </div>
    </header>
            <div className={styles.bgheader}></div>
    
    </div>
  )
}

export default Head