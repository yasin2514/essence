import Banner from "../../Components/Banner/Banner";
import Pickup from "../../Components/Banner/Pickup";
import ApplesProducts from "../../Components/Shop/ApplesProducts";
import MostViewsItem from "../../Components/Shop/MostViewsItem";
import OnSelling from "../../Components/Shop/OnSelling";
import OnSellingItem from "../../Components/Shop/OnSellingItem";
import Shop from "../../Components/Shop/Shop";
import ShopAllCategories from "../../Components/Shop/ShopAllCategories";
import TopBrands from "../../Components/Shop/TopBrands";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Pickup></Pickup>
      <Shop></Shop>
      <OnSelling></OnSelling>
      <OnSellingItem></OnSellingItem>
      <ApplesProducts></ApplesProducts>
      <ShopAllCategories></ShopAllCategories>
      <MostViewsItem></MostViewsItem>
      <TopBrands></TopBrands>
  
    </>
  );
};

export default Home;
