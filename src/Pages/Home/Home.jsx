import Banner from "../../Components/Banner/Banner";
import Pickup from "../../Components/Banner/Pickup";
import ApplesProducts from "../../Components/Shop/ApplesProducts";
import DealSection from "../../Components/Shop/DealSection";
import DiscoverItems from "../../Components/Shop/DiscoverItems";
import MostViewsItem from "../../Components/Shop/MostViewsItem";
import OnSelling from "../../Components/Shop/OnSelling";
import OnSellingItem from "../../Components/Shop/OnSellingItem";
import Shop from "../../Components/Shop/Shop";
import ShopAllCategories from "../../Components/Shop/ShopAllCategories";
import TopBrands from "../../Components/Shop/TopBrands";
import Vendors from "../../Components/Shop/Vendors";
import VendorsTwo from "../../Components/Shop/VendorsTwo";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Pickup></Pickup>
      <Shop></Shop>
      <DealSection></DealSection>
      <OnSelling></OnSelling>
      <OnSellingItem></OnSellingItem>
      <ApplesProducts></ApplesProducts>
      <ShopAllCategories></ShopAllCategories>
      <MostViewsItem></MostViewsItem>
      <TopBrands></TopBrands>
      <Vendors></Vendors>
      <VendorsTwo></VendorsTwo>
      <DiscoverItems></DiscoverItems>
  
    </>
  );
};

export default Home;
