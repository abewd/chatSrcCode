import React from "react";
import Header from "../../componets/Header/index";
import Animations from "../../componets/Animations/Animations";
import GamesContainer from "../../componets/GamesContainer/GamesContainer";

const home = () => {
  return (
    <div>
      <div class="flex flex-row">
        <div class="basis-1/2 m-3">
          {" "}
          <GamesContainer />
        </div>
        <div class="basis-1/2">
          <Animations />
        </div>
      </div>
    </div>
  );
};

export default home;
