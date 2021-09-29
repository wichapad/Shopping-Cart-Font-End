// หน้าแรกของเว็บ
import React from 'react'
import Announcement from '../component/Announcement'
import Catecgories from '../component/Categories'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newletter from '../component/Newletter'
import Products from '../component/Products'
import Slider from '../component/Slider'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Catecgories/>
            <Products/>
            <Newletter/>
            <Footer/>
        </div>
    )
}

export default Home
