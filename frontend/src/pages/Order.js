import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myOrders } from "../store/actions/order-actions";
import "../components/styles/Order.css";
import { Link } from "react-router-dom";
const Order = () => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector((state) => state.myOrder);

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p style={{ color: "black" }}>Loading...</p>
      ) : (
        <div>
          {orders.map((order) => (
            <Link
              to={`/order/${order._id}`}
              key={order._id}
              style={{ color: "black" }}
              className="link"
            >
              {order._id}{" "}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Order;
