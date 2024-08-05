import {useSelector,useDispatch} from "react-redux";
import { deleteTodo} from "../features/TodoSlice";
import {useNavigate } from "react-router-dom";

const TableComponent = () => {
  const data = useSelector((state)=>state.todo.todos)
  const dispatch =useDispatch();
  const navigate = useNavigate();
  
  const handleEditForm = (index) => {
    console.log("edit clicked");
    navigate(`/edit/${index}`); // Navigate to the specified route
  };
  return (
    <>
    <h4 className="text-center">User Dasboard</h4>
    <div className="col-10">
      <table className="table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>City</th>
            <th>Profession</th>
            <th>Organization</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return (<tr key={index}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.mobileNo}</td>
                <td>{item.city}</td>
                <td>{item.gender}</td>
                <td>{item.profession}</td>
                <td>{item.organisation}</td>
                <td><button onClick={()=>dispatch(deleteTodo(index))}>delete</button></td>
                <td><button onClick={()=>handleEditForm(index)}>Edit</button></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
    </>
  );
};

export default TableComponent;
