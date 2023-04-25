import React from "react";
import Header from "../../componets/Header/index";
import Animations from "../../componets/Animations/Animations";
import GamesContainer from "../../componets/GamesContainer/GamesContainer";

const home = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-row animationContainer rounded-lg m-3">
        <div class="basis-1/2 m-3 p-3 ">
          {" "}
          <GamesContainer />
        </div>
        <div className="basis-1/2 p-8">
          <Animations />
        </div>
      </div>
      <div className="flex flex-row animationContainer rounded-lg m-3">
        <div class="basis-1/2 m-3 p-3 ">
          {" "}
          <Animations />
        </div>
        <div className="basis-1/2 p-8">
          <GamesContainer />
        </div>
      </div>
    </div>
  );
};

export default home;
