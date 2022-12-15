import React from 'react'
import Home from './Home'
import Banner from './Banner';
import Vitrine from './Vitrine';
import Icons from './Icons';
import Promotion from './Promotion';
import Destaques from './Destaques';

const Body = () => {
  return (
    <section>
    <Banner/>
    <Vitrine />
    <Icons/>
    <Promotion />
    <Destaques />
    <Home />

    
    </section>
  )
}

export default Body