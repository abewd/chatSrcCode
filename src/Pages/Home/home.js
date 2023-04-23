import React from "react";
import Header from "../../componets/Header/index";
import Animations from "../../componets/Animations/Animations";
import GamesContainer from "../../componets/GamesContainer/GamesContainer";

const home = () => {
  return (
    <div>
      <div>
        {" "}
        <GamesContainer />
      </div>{" "}
      <div>
        {" "}
        <Animations />{" "}
      </div>
    </div>
  );
};

export default home;
