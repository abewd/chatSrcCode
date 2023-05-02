import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Animation() {
      return (
        <div className='feather faded faded-all'>
          <Carousel 
            autoPlay 
            infiniteLoop
            showThumbs = {false}
            interval   = {2000}
          >
              <div>
                  <img height={"300px"} width={'100%'} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                  <img height={"300px"} width={'100%'} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" />
                  {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                  <img height={"300px"} width={'100%'} src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  {/* <p className="legend">Legend 3</p> */}
              </div>
          </Carousel>
        </div>
)}
