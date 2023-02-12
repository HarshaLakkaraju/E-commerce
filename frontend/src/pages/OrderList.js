import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../components/styles/table.css'
import {useDispatch, useSelector} from 'react-redux'
import { getAllOrders } from '../store/actions/order-actions';
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  const alert = useAlert()
  const dispatch = useDispatch();

  const {error, orders, loading} = useSelector(state => state.allOrders)


  useEffect(() => {
    if (error) {
      alert.error(error)
    }
    dispatch(getAllOrders())
  }, [dispatch, alert, error])

  return (
    <div>
      <div className="heading">
        <h1>Orders</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Items Qty</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </tbody>
        <tbody>
          {loading ? (
            <p>Loading...</p>
          ) : (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.orderStatus}</td>
                <td>{order.orderItems.length}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <span className="tableicon">
                    <Link to={`/admin/order/${order._id}`}>
                      <FontAwesomeIcon icon={faPen} />
                    </Link>
                  </span>
                  <span className="tableicon">
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders
