import {useSelector,useDispatch} from "react-redux";
import { deleteTodo} from "../features/TodoSlice";
import EditForm from "./Editform";

const TableComponent = () => {
  const data = useSelector((state)=>state.todo.todos)
  const dispatch =useDispatch();
  return (
    <>
      <h4>User Dasboard</h4>
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
                <td>{item.Email}</td>
                <td>{item.MobileNo}</td>
                <td>{item.City}</td>
                <td>{item.Gender}</td>
                <td>{item.Profession}</td>
                <td>{item.Organisation}</td>
                <button onClick={()=>dispatch(deleteTodo(index))}>delete</button>
                <button onClick={()=>{}}>Edit</button>
              </tr>)
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
