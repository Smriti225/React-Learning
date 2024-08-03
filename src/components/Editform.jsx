import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../features/TodoSlice"; // Adjust path as needed

const EditForm = ({ index }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos[index]);

  const [firstname, setFirstname] = useState(todo.firstname);
  const [lastname, setLastname] = useState(todo.lastname);
  const [email, setEmail] = useState(todo.email);
  const [mobileNo, setMobileNo] = useState(todo.mobileNo);
  const [city, setCity] = useState(todo.city);
  const [gender, setGender] = useState(todo.gender);
  const [profession, setProfession] = useState(todo.profession);
  const [organisation, setOrganisation] = useState(todo.organisation);

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Mobile No:
        <input
          type="text"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </label>
      <label>
        Profession:
        <input
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </label>
      <label>
        Organisation:
        <input
          type="text"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
        />
      </label>
      <button type="submit">Update Todo</button>
    </form>
  );
};

export default EditForm;
