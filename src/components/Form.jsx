import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../features/TodoSlice";
import { Navigate} from "react-router-dom";

const FormComponent = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobileNo] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleProff = (e) => {
    setProfession(e.target.value);
  };
  const handleOrganisation = (e) => {
    setOrganisation(e.target.value);
  };
  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: fname,
      lastname: lname,
      email: email,
      mobileNo: mobNo,
      city: city,
      gender: gender,
      profession: profession,
      organisation: organisation,
    };
    dispatch(AddTodo(data));
    setFname("");
    setLname("");
    setMobileNo("");
    setOrganisation("");
    setProfession("");
    setEmail("");
    setCity("");
    setGender("");
    setSubmitted(true);

  };

  return (
    <>
      <div className="row mx-0  text-cenetr justify-content-center">
        <div className="col-6 mx-auto my-5">
          <h4 className="text-center">Registration Form</h4>
          <form>
            <div className="row mx-0 mb-2">
              <div className="col-6 p-2">
                <div className="row">
                  <label htmlFor="fname">FirstName</label>
                </div>
                <div className="row px-2">
                  <input
                    type="text"
                    id="fname"
                    onChange={(e) => handleFname(e)}
                    className="form-control"
                    name="fname"
                    value={fname}
                  />
                </div>
              </div>
              <div className="col-6 p-2">
                <div className="row ">
                  <label for="lname">LastName</label>
                </div>
                <div className="row px-2 ">
                  <input
                    type="text"
                    id="lname"
                    className="form-control"
                    onChange={(e) => handleLname(e)}
                    name="lname"
                    value={lname}
                  />
                </div>
              </div>
            </div>
            <div className="row mx-0 mb-2">
              <div className="col-6 p-2">
                <div className="row ">
                  <label for="email">Email</label>
                </div>
                <div className="row px-2">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    onChange={(e) => handleEmail(e)}
                    name="email"
                    value={email}
                  />
                </div>
              </div>
              <div className="col-6 p-2">
                <div className="row ">
                  <label for="mobNo">Mobile Number</label>
                </div>
                <div className="row px-2 ">
                  <input
                    type="text"
                    id="mobNo"
                    className="form-control"
                    onChange={(e) => handleMobileNo(e)}
                    name="mobileNo"
                    value={mobNo}
                    max={10}
                  />
                </div>
              </div>
            </div>
            <div className="row mx-0 mb-2">
              <div className="col-6 p-2">
                <div className="row ">
                  <label for="gender">Gender</label>
                </div>
                <div className="row px-2 ">
                  <select
                    name="gender"
                    id="gender"
                    onChange={(e) => handleGender(e)}
                    className="form-select"
                  >
                    <option selected>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-6 p-2">
                <div className="row ">
                  <label for="city">City</label>
                </div>
                <div className="row px-2">
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    onChange={(e) => handleCity(e)}
                    value={city}
                    name="city"
                  />
                </div>
              </div>
            </div>
            <div className="row mx-0 mb-2">
              <div className="col-6 p-2">
                <div className="row ">
                  <label for="profession">Profession</label>
                </div>
                <div className="row px-2 ">
                  <select
                    name="profession"
                    onChange={(e) => handleProff(e)}
                    id="profession"
                    className="form-select"
                  >
                    <option selected>Select</option>
                    <option value="student">Student</option>
                    <option value="developer">Developer</option>
                  </select>
                </div>
              </div>
              <div className="col-6 p-2">
                <div className="row ">
                  <label for="org">Organization/Insitute</label>
                </div>
                <div className="row px-2">
                  <input
                    type="text"
                    id="org"
                    className="form-control"
                    onChange={(e) => handleOrganisation(e)}
                    value={organisation}
                    name="organisation"
                  />
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        {submitted && <Navigate to="/dashboard" />}
      </div>
    </>
  )
};

export default FormComponent;
