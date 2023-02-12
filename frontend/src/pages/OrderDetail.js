import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getOrderDetails } from '../store/actions/order-actions';
import {useDispatch, useSelector} from 'react-redux'


const OrderDetail = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;

    const {loading, order}  = useSelector(state => state.getOrder)

    useEffect(() => {
        dispatch(getOrderDetails(id))
        
    }, [dispatch, id]);

    console.log(order);
  return (
      <>
          {loading ? <p style={{ color: 'black' }}> Loading</p> : <h1 style={{ color: 'black' }} >{order._id }</h1>}
      </>
  )
}

export default OrderDetail