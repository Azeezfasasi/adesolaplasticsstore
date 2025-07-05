import {Helmet} from 'react-helmet'
import Footer from "./assets/components/Footer"
import MainHeader from "./assets/components/MainHeader"
import FeaturedProduct from "./assets/components/product/FeaturedProduct"
import RecentProduct from './assets/components/product/RecentProduct'
import TopHeader from "./assets/components/TopHeader"
import ShopByCategories from './assets/components/product/ShopByCategories'
import ProductHero from './assets/components/ProductHero'
import PlasticProducts from './assets/components/product/PlasticProducts'
import KitchenEquipmentProducts from './assets/components/product/KitchenEquipmentProducts'
import HouseholdPlasticsProducts from './assets/components/product/HouseholdPlasticsProducts'
import KitchenAppliancesProducts from './assets/components/product/KitchenAppliancesProducts'


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
    <KitchenEquipmentProducts />
    <HouseholdPlasticsProducts />
    <KitchenAppliancesProducts />
    <PlasticProducts />
    <Footer />
    </>
  )
}

export default Home