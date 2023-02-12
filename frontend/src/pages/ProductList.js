import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../src/components/styles/table.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { getAdminProduct, deleteProduct } from "../store/actions/product-actions";
import { useNavigate } from "react-router-dom";
import { deleteProductActions } from "../store/index";

const AdminAllProducts = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, products } = useSelector((state) => state.adminProducts);
  const {isDeleted} = useSelector((state) => state.deleteProduct);

  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);

  console.log(loading);

  useEffect(() => {
    if (isDeleted) {
      alert.success("Product deleted successfully")
      dispatch(deleteProductActions.deleteProductRequestReset())
      navigate('/admin/dashboard')
    }

  }, [alert, isDeleted, navigate, dispatch])

  const productHandler = (id) => {
    dispatch(deleteProduct(id))
  }

  return (
    <div>
      <div className="heading">
        <h1>Products</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </tbody>
        {loading ? (
          <p style={{ color: "black" }}>Loading...</p>
        ) : (
          products.map((item) => {
            return (
              <tbody key={ item._id}>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.Stock}</td>
                  <td>{item.price}</td>
                  <td>
                    <span className="tableicon">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span className="tableicon">
                      <FontAwesomeIcon icon={faTrash} onClick={ productHandler.bind(null, item._id)} />
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
};

export default AdminAllProducts;
