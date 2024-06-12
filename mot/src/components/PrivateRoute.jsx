import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivitaRote() {
  const {currentUser}=useSelector(state=>state.user)

  return  currentUser ? <Outlet /> :<Navigate to='/signin' />


  
}
