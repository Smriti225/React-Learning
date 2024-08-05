import { Routes, Route } from "react-router-dom";
import FormComponent from "../components/Form";
import TableComponent from "../components/Table";
import EditForm from "../components/Editform";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/dashboard" element={<TableComponent />} />
        <Route path="/edit/:index" element={<EditForm />} />
      </Routes>
    </>
  )
};

export default Allroutes;