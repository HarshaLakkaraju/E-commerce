import {
  getOrderActions,
  OrderActions,
  myOrderActions,
  deleteOrderActions,
  allOrderActions,
  updateOrderActions,
} from "../index";

const token = localStorage.getItem("token");
// Create Order
export const createOrder = (order) => async (dispatch) => {
  dispatch(OrderActions.createOrderRequest());
  console.log(order);
  const response = await fetch("http://localhost:4000/api/v1/order/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  console.log(data);
  if (data.success) dispatch(OrderActions.createOrderSuccess(data.order));
  else dispatch(OrderActions.createOrderFail(data.message));
};

// My Orders
export const myOrders = () => async (dispatch) => {
  dispatch(myOrderActions.myOrderRequest())

  const response = await fetch("http://localhost:4000/api/v1/orders/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });
  const data = await response.json();
  
  if (data.success) dispatch(myOrderActions.myOrderSuccess(data.orders));
  else dispatch(myOrderActions.myOrderFail(data.message));
};

// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch(allOrderActions.allOrdersRequest());

    const response = await fetch("http://localhost:4000/api/v1/admin/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
    const data = await response.json();
    // console.log(data);
    dispatch(allOrderActions.allOrdersSuccess(data.orders));
  } catch (error) {
    dispatch(allOrderActions.allOrdersFail(error.response.data.message));
  }
};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch(updateOrderActions.updateOrderRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = fetch(`/api/v1/admin/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: order,
      config,
    });

    dispatch(updateOrderActions.updateOrderSuccess(data.success));
  } catch (error) {
    dispatch(updateOrderActions.updateOrderfail(error.response.data.message));
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch(deleteOrderActions.deleteOrderRequest());

    const { data } = await fetch(`/api/v1/admin/order/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });

    dispatch(deleteOrderActions.deleteOrderSuccess(data.success));
  } catch (error) {
    dispatch(deleteOrderActions.deleteOrderfail(error.response.data.message));
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {

    dispatch(getOrderActions.getOrderRequest());

    const response = await fetch(`http://localhost:4000/api/v1/order/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
  const data = await response.json();
  if(data.success)
    dispatch(getOrderActions.getOrderSuccess(data.order));
 else
    dispatch(getOrderActions.getOrderFail(data.message));
  
};
