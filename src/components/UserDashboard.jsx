import FormComponent from "./Form";
import EditForm from "./Editform";
import TableComponent from "./Table";

const DashBoard = () => {
  return (
    <>
      <div className="row mx-0 ">
        <div className="col-lg-4 col-sm-12 p-3 ">
          <FormComponent />
        </div>
        <div className="col-lg-8 col-sm-12 p-3" >
          <TableComponent />
        </div>
        <div className="col-12"></div>
      </div>
    </>
  );
};

export default DashBoard;
