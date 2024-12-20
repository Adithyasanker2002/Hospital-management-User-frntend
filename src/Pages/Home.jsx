import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to CareNet Health Institute | Your Partner in Seamless Healthcare Management. "
        }
        imageUrl={"/docImg.png"}
      />
      <Biography imageUrl={"/bioImg.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
