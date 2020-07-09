import React , {useEffect, Fragment} from "react";
import {useSelector , useDispatch} from 'react-redux'
import {getUsers , deleteUser} from '../../actions/users'
import Manageproducts from "../ManageProducts/Manageproducts";





function EditableTable() {
  const isLoading = useSelector((state) => state.users.isLoading);
    const usersList = useSelector((state) => state.users.usersList);
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
        return () => {};
      }, [dispatch]);
  return  isLoading ? (
    
    <div className='row justify-content-md-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  ) : (



    <Fragment>
    <div>
      <div className="card">
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
       Managing Users 
        </h3>
        <div className="card-body">
          <div id="table" className="table-editable">
          
           
            <table className="table table-bordered table-responsive-md table-striped text-center">
              <thead>
                <tr>
                  <th className="text-center">user Name</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Adress</th>
                  <th className="text-center">Phone Number</th>
                  <th className="text-center">Zip Code</th>
                  <th className="text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
{usersList.map((user , key)=>(
    




    <tr key={key}>
                  <td className="pt-3-half" >
                  {user.name}
                  </td>
                  <td className="pt-3-half" >
              {user.email}
                  </td>
                  <td className="pt-3-half" >
                  {user.adress}
                  </td>
                  <td className="pt-3-half">
                  {user.zipCode}
                  </td>
                  <td className="pt-3-half" >
                 {user.phoneNumber}
                  </td>
                 
                  <td>
                    <span className="table-remove">
                    
                      <button
                        type="submit"
                        className="btn btn-danger btn-rounded btn-sm my-0"  onClick={()=>dispatch(deleteUser(user._id))}
                      >
                        Remove
                      </button>
                    </span>
                  </td>
                </tr>

                   

) )}

</tbody>
       
            </table>
          </div>
        </div>
      </div>

    </div>

    <Manageproducts/>
    </Fragment>
  );
}

export default EditableTable;