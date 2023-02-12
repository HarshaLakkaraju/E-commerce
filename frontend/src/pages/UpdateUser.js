import React from 'react'
import "../components/styles/AdminCreateProduct.css";
import { useSelector } from 'react-redux';

const UpdateUser = () => {
  const show = useSelector((state) => state.FormShow.show);
    const onSubmitHandler = (e) => {
      e.preventDefault();
    };
  return (
    <>
      <div className="UsercompleteForm" style={{ left: show ? "44%" : "37%" }}>
        <form className="productForm" onSubmit={onSubmitHandler}>
          <div className="createUserForm">
            <div
              style={{ marginLeft: -40, marginTop: -20 }}
              className="heading"
            >
              <h1>UPDATE USER</h1>
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="text"
                placeholder="user name"
                className="inputField"
                id="name"
                // value={data.productName}
              />
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="email"
                placeholder="email"
                className="inputField"
                id="email"
                // value={data.productDiscription}
              />
            </div>
            <div className="userDivInput">
              <select className="selectOption">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="createButton">
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}


export default UpdateUser
