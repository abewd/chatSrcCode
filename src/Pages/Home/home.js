import React from "react";
import Header from "../../componets/Header/index";
import Animations from "../../componets/Animations/Animations";
import GamesContainer from "../../componets/GamesContainer/GamesContainer";
// import "./home.css";

const home = () => {
  return (
    <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      <div class="relative w-full max-w-lg">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="m-8 relative space-y-4">
          <div className="p-4" style={{ height: "100vh" }}>
            <div className="flex flex-row animationContainer rounded-lg m-3">
              <div class="basis-1/2 m-3 p-3 ">
                {" "}
                <GamesContainer />
              </div>
              <div className="basis-1/2 p-8">
                <Animations />
              </div>
            </div>

            {/* IF YOU WANT TO ADD MORE CARDS AND GIFS, USE THIS */}

            {/* <div className="flex flex-row animationContainer rounded-lg m-3">
        <div class="basis-1/2 m-3 p-3 ">
          {" "}
          <Animations />
        </div>
        <div className="basis-1/2 p-8">
          <GamesContainer />
        </div>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
