import {Helmet} from 'react-helmet'
import CallToAction from "./assets/components/CallToAction"
import Footer from "./assets/components/Footer"
import Hero from "./assets/components/Hero"
import HowItWorks from "./assets/components/HowItWorks"
import MainHeader from "./assets/components/MainHeader"
import FeaturedProduct from "./assets/components/product/FeaturedProduct"
import RecentProduct from './assets/components/product/RecentProduct'
import RequestQuote from "./assets/components/RequestQuote"
import ServicesSection from "./assets/components/ServicesSection"
import TopHeader from "./assets/components/TopHeader"
import TrackRecords from "./assets/components/TrackRecords"
import WhyChooseUs from "./assets/components/WhyChooseUs"
import ShopByCategories from './assets/components/product/ShopByCategories'
import ProductHero from './assets/components/ProductHero'
import PlasticProducts from './assets/components/product/PlasticProducts'


function Home() {
  return (
    <>
    <Helmet>
      <title>Home - Adesola Plastic Stores</title>
      <meta name="description" content="IT Service Pro offers expert laptop repair, IT solutions, web and mobile development, and more. Trusted, skilled, and always ready to serve your business technology needs." />
    </Helmet>
    <TopHeader />
    <MainHeader />
    <ProductHero />
    <ShopByCategories />
    <FeaturedProduct />
    <RecentProduct />
    <PlasticProducts />
    <Footer />
    </>
  )
}

export default Home