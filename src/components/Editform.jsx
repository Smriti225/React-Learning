import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../features/TodoSlice"; // Adjust path as needed
import { useParams ,useNavigate } from "react-router-dom";

const EditForm = () => {
  const dispatch = useDispatch();
  const { index } = useParams();
  const todo = useSelector((state) => state.todo.todos[index]);
  console.log(todo);

  const [firstname, setFirstname] = useState(todo.firstname);
  const [lastname, setLastname] = useState(todo.lastname);
  const [email, setEmail] = useState(todo.email);
  const [mobileNo, setMobileNo] = useState(todo.mobileNo);
  const [city, setCity] = useState(todo.city);
  const [gender, setGender] = useState(todo.gender);
  const [profession, setProfession] = useState(todo.profession);
  const [organisation, setOrganisation] = useState(todo.organisation);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      firstname,
      lastname,
      email,
      mobileNo,
      city,
      gender,
      profession,
      organisation,
    };
    dispatch(editTodo({ index, updatedTodo }));
    navigate("/");

  };

  return (
    <>
      <h2>Edit Details</h2>
      <div className="col-6">
        <form onSubmit={handleSubmit}>
          <label className="col-12">
            First Name:
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <label className="col-12">
            Last Name:
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
          <label className="col-12">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="col-12">
            Mobile No:
            <input
              type="text"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </label>
          <label className="col-12">
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label className="col-12">
            Gender:
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label className="col-12">
            Profession:
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </label>
          <label className="col-12">
            Organisation:
            <input
              type="text"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-primary">Update Todo</button>
        </form>
      </div>
    </>
  );
};

export default EditForm;
