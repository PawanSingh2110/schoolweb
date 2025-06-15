import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Infra from "../../components/Infra"
import Message from "../../components/Message";
import Teacher from "../../components/Teacher";
import Gallery from "../../components/Gallery"; 
import Welcome from "../../components/Welcome";
import Brands from "../../components/Brands";
import Counter from "../../components/Counter";
import Dislay from "../../components/Dislay";
import Events from "../../components/Events";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Welcome />
      <Message />
     
      <Infra />
      <Teacher />
     
      <Gallery />
      <Counter />
      <Events />
    </div>
  );
};

export default Home;
