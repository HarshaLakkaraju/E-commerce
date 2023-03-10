import React, { useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../components/styles/table.css';
import { getAllUsers } from '../store/actions/user-actions'
import {useDispatch, useSelector} from 'react-redux'
import {useAlert} from 'react-alert'
import { getAllUserActions } from '../store/index';
import { Link } from 'react-router-dom';


const AdminAllUser = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  
  const {loading, users, error} = useSelector(state => state.getAllUser)

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(getAllUserActions.getAllUserReset())
    }
    dispatch(getAllUsers())
  }, [dispatch, error, alert]);

  // console.log(users);
  return (
    <div>
      <div className="heading">
        <h1>AllUsers</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </tbody>
        <tbody>
          {loading?<p style= {{color: 'black'}}>Loading..</p> :(users.map(user => <tr key = {user._id }>
            <td>{user._id}</td>
            <td>{ user.email}</td>
            <td>{ user.name}</td>
            <td>{ user.role}</td>
            <td>
              <Link to={`/admin/user/${user._id}`}><span className='tableicon'><FontAwesomeIcon icon={faPen}/></span></Link>
              <span className='tableicon'><FontAwesomeIcon icon={faTrash}/></span>
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAllUser
