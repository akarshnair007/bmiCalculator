import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Bmi = () => {
  const [data, setData] = useState({
    name: "",
    weight: "",
    height: "",
    age: "",
  });

  const [bmiIndex, setbmiIndex] = useState();

  const [bmiValue, setbmiValue] = useState(false);
  const [bmiShow, setBmiShow] = useState(false);

  const [nameShow, setNameShow] = useState(true);
  const [heightShow, setHeightShow] = useState(true);
  const [weightShow, setWeightShow] = useState(true);
  const [ageShow, setageShow] = useState(true);

  const clickHandler = (e) => {
    e.preventDefault();

    if (!data.name) {
      setNameShow(false);
      return;
    }

    if (!data.age) {
      setageShow(false);
      return;
    }

    if (!data.weight) {
      setWeightShow(false);
      return;
    }

    if (!data.height) {
      setHeightShow(false);
      return;
    }

    let bmiFormula = Math.floor(data.weight / (data.height / 100) ** 2);
    setbmiIndex(bmiFormula);
    setbmiValue(true);
    setBmiShow(true);
  };

  const ChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setNameShow(value !== "");
    } else if (name === "age") {
      setageShow(value !== "");
    } else if (name === "weight") {
      setWeightShow(value !== "");
    } else if (name === "height") {
      setHeightShow(value !== "");
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 mt-4 mb-2">
          <div className="bmical rounded shadow-lg p-5">
            <h1 className="my-4 text-center">BMI Calculator</h1>
            <Form className="mt-3">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="label">Enter your Name:</Form.Label>
                <Form.Control
                  className="inputField"
                  value={data.name}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={(e) => ChangeHandler(e)}
                  required
                />
              </Form.Group>

              {!nameShow && (
                <p className="text-danger">Please enter Your name</p>
              )}

              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label className="label">Enter Your Age</Form.Label>
                <Form.Control
                  className="inputField"
                  value={data.age}
                  type="number"
                  name="age"
                  placeholder="Enter Age"
                  onChange={(e) => ChangeHandler(e)}
                  required
                />
              </Form.Group>

              {!ageShow && <p className="text-danger">Please enter Your Age</p>}

              <Form.Group className="mb-3" controlId="formBasicWeight">
                <Form.Label className="label">
                  Enter Your weight (in KG)
                </Form.Label>
                <Form.Control
                  className="inputField"
                  value={data.weight}
                  type="number"
                  name="weight"
                  placeholder="Enter Weight (KG)"
                  onChange={(e) => ChangeHandler(e)}
                  required
                />
              </Form.Group>

              {!weightShow && (
                <p className="text-danger">Please enter Your Weight</p>
              )}

              <Form.Group className="mb-3" controlId="formBasicHeight">
                <Form.Label className="label">
                  Enter Your Height (in CM)
                </Form.Label>
                <Form.Control
                  className="inputField"
                  value={data.height}
                  type="number"
                  name="height"
                  placeholder="Enter Height (CM)"
                  onChange={(e) => ChangeHandler(e)}
                  required
                />
              </Form.Group>

              {!heightShow && (
                <p className="text-danger">Please enter Your Height</p>
              )}

              <Button
                className="w-50 submitButton"
                variant="dark"
                type="button"
                onClick={(e) => clickHandler(e)}
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Submit
              </Button>
            </Form>
          </div>

          {bmiShow && (
            <p className="text-center bmi-value mt-5">
              {bmiValue ? (
                <div className="bmi-message">
                  <h4>
                    Hey <span className="bmiName"> {data.name}</span>, Your BMI
                    Index is: <span className="bmiIndex">{bmiIndex}</span>
                  </h4>
                  {data.age < 18 && (
                    <p>
                      Your BMI may have different implications for someone your
                      age. Consult a healthcare professional for advice.
                    </p>
                  )}
                  {data.age > 18 && bmiIndex < 18.5 && (
                    <p>
                      You are underweight. Consider consulting a healthcare
                      professional for advice.
                    </p>
                  )}
                  {data.age > 18 && bmiIndex >= 18.5 && bmiIndex <= 24.9 && (
                    <p>
                      Your weight falls within the normal range for your age and
                      height. Keep up the good work!
                    </p>
                  )}
                  {data.age > 18 && bmiIndex >= 25 && bmiIndex <= 29.9 && (
                    <p>
                      You are overweight. Consider making lifestyle changes to
                      improve your health.
                    </p>
                  )}
                  {data.age > 18 && bmiIndex >= 30 && (
                    <p>
                      You are obese. It's important to take steps to address
                      your weight for your health.
                    </p>
                  )}
                </div>
              ) : (
                ""
              )}
            </p>
          )}
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
};

export default Bmi;
