import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col-2"></div>
          <div className="home-back col-8 d-flex flex-column align-items-center justify-content-center mt-3 shadow-lg">
            {" "}
            <div className="heading mt-5 mb-5">
              <h1>Welcome To BMI Calculator</h1>
              <div className="type-animation-wrapper">
                {" "}
                {/* New wrapper div for animation */}
                <TypeAnimation
                  sequence={[
                    "Calculate Your BMI",
                    1000,
                    "Enter Your Name and Age",
                    1000,
                    "Enter Your Weight and Height",
                    1000,
                    "See Your Body Mass Index",
                    1000,
                    "Get Health Recommendations",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "25px",
                    fontFamily: "Rubik, sans-serif",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="content mb-5">
              <h5>
                BMI is a simple measure of body fat based on your weight and
                height. It provides an indication of whether you are
                underweight, normal weight, overweight, or obese, helping you
                assess your risk for certain health conditions.
              </h5>
            </div>
            <div className="btns h-100 w-100 d-flex align-items-center justify-content-center">
              <Link to={"/bmi"} style={{ textDecoration: "none" }}>
                {" "}
                <Button className="btn btn-dark btn-lg">
                  Check your BMI
                </Button>{" "}
              </Link>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
