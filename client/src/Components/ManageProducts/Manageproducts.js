import React  , {useEffect , Fragment}from 'react'
import {Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {getProducts , deleteProduct} from '../../actions/products'

import {Link} from "react-router-dom";

function Manageproducts() {

const isLoading = useSelector((state) => state.products.isLoading);
const productList = useSelector((state) => state.products.productList);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    return () => {};
  }, [dispatch]);
 
  return isLoading ? (
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
      Manage Products
          </h3>
          <div className="card-body">
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <a href="#!" className="text-success">
                <Link to="/addProduct">
                  <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                  </Link>
                </a>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center">Product Name</th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Stockage</th>
                    <th className="text-center">Ram</th>
                    <th className="text-center">Processeur</th>
                    <th className="text-center">Prix</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>

                {productList.map((phone , key) => (
                  <tr key={key}>
                    <td className="pt-3-half">
                     {phone.name}
                    </td>
                    <td className="pt-3-half" >
                   {phone.image}
                    </td>
                    <td className="pt-3-half" >
                     {phone.storage}
                    </td>
                    <td className="pt-3-half" >
                      {phone.ram}
                    </td>
                    <td className="pt-3-half" >
                     {phone.processor}
                    </td>
                    <td className="pt-3-half">
                      {phone.price}
                    </td>
                   
                    <td>
                      <span className="table-remove">
                      <Button variant="danger"  onClick={()=>dispatch(deleteProduct(phone._id))}>Remove</Button>
                      </span>
                    </td>
                  </tr>
                  
             
                  ))   }
                

        
                

                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
  
</Fragment>
          
    )
}

export default Manageproducts
