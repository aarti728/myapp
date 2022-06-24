import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero" style={{height:"100vh"}}>
      <div className="card bg-dark text-white border-0"style={{height:"100vh",width:"auto"}}>
        <img src="/Image/pan.jpeg" alt="loading"  style={{height:"100vh"}}/>
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-3  justify-content-center  text-danger fw-bold fs-15"  style={{ color:"white",fontFamily:"Lobster",marginLeft:"29%"}}>New Season Arrivals</h5>
            <p className="card-text text-align-center text-danger fw-bold"  style={{marginBottom:"25%",marginLeft:"36%", fontFamily:"Lobster", fontSize:"23px"}}  >
             CHECK OUT ALL THE NEW TRENDS
            </p>
         <button className="btn btn-outline-danger  me-15"style={{marginLeft:"45%", marginTop:"-40%"}} >Shop Now</button>
          
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
