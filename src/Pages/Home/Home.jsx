import Banner from "../../Components/Banner/Banner";
import Pickup from "../../Components/Banner/Pickup";
import ApplesProducts from "../../Components/Shop/ApplesProducts";
import OnSelling from "../../Components/Shop/OnSelling";
import OnSellingItem from "../../Components/Shop/OnSellingItem";
import Shop from "../../Components/Shop/Shop";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Pickup></Pickup>
      <Shop></Shop>
      <OnSelling></OnSelling>
      <OnSellingItem></OnSellingItem>
      <ApplesProducts></ApplesProducts>
  
    </>
  );
};

export default Home;
