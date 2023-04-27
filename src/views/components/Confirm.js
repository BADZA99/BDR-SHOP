import React, { Fragment,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserProfileContext } from '../../lib/UserProfileContext'
import { useSelector,useDispatch } from 'react-redux';
import { resetCart } from '../../lib/actions';


// const SVGtruk=() =>{

// }
export default function Confirm() {
    const userProfile=useContext(UserProfileContext);
    const items=useSelector(state=>state.items);
    const dispatch=useDispatch();

    const reset=()=>{
        dispatch(resetCart());
    }
  return (
    <Fragment>
      <div className="jumbotron text-center">
        <h1 className="display-3">Thank You!</h1>
        <hr />
        <p className="lead">
          <strong>your order is on its way to your home</strong>
          <br />
          <br />
          <Link className="btn btn-primary btn-sm" to={"/"}
          onClick={()=>reset()}
          >
            continue to home page
          </Link>
        </p>
        <hr />
        {userProfile.address && (
          <ul>
            <li>
              {userProfile.firstName.toUpperCase()},
              {userProfile.lastName.toUpperCase()}
            </li>
            <li>{userProfile.address}</li>
            <li>
              {userProfile.zipCode},{userProfile.city}
            </li>
          </ul>
        )}
        

      </div>
    </Fragment>
  );
}
