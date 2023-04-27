import { Fragment,useEffect,useState } from "react"
import React from 'react'
// import updatecart
import { removeFromCart, updateCart } from "../../lib/actions";
import { useDispatch,useSelector } from "react-redux";



const Table =()=>{
    const items = useSelector((state) => state.items);
    useEffect(() => {
    console.log(`You have ${items.length}`);
    });
    return (
        <table>
            <tr>
                <th width="200">Product</th>
                <th width="80">Reference</th>
                <th width="150">price</th>
                <th width="150">quantity</th>
                <th width="200">total</th>
            </tr>
            {
                items.map((item)=>{
                    return <Row item={item}/>
                }
                )
            }
           
        </table>
    )
}

const Row =(props)=>{

    const {id,quantity,details}=props.item
    const produit=details;
    const [qty,setqty]=useState(quantity);
    const dispatch = useDispatch();

      const update = (item, quantity) => {
        dispatch(updateCart(item, quantity));
      };

      const remove = (id) =>{
        dispatch(removeFromCart(id));
      }

   

    return (
      <tr>
        <td>
          <img src={produit.image} alt={produit.name} width="70" height="70" />
        </td>
        <td>
          <p>{produit.ref}</p>
        </td>
        <td>
          <p>{produit.price}€</p>
        </td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => (qty > 0 ? setqty(qty - 1) && update(produit,qty) : 1)}
            >
              -
            </button>
            <span className="btn btn-light">{qty}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setqty(qty + 1) && update(produit,qty)}
            >
              +
            </button>
          </div>
        </td>
        <td>{produit.price * qty}€</td>
        <button type="button" className="btn btn-danger " 
        onClick={()=> remove(id) && console.log("hello")}
        >
          x
        </button>
      </tr>
    );
}

export default function CartPage() {
  return (
   <Fragment >
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm cart">
                  <Table/>
                </div>
                <div className="col-sm-3 order-summary">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h6>Order Summary</h6>
                        </li>
                        <li className="list-group-item">
                            <ul className="list-group flex">
                                <li className="text-left">subtotal</li>
                                <li className="text-right">0€</li>
                            </ul>
                            <ul className="list-group flex">
                                <li className="text-left">shipping</li>
                                <li className="text-right">0€</li>
                            </ul>
                            <ul className="list-group flex">
                                <li className="coupon crimson">
                                    <small>add coupon code</small>
                                </li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <ul className="list-group flex">
                                <li className="text-left">total</li>
                                <li className="text-right">0€</li>
                            </ul>
                        </li>
                    </ul>
                    <button
                        className="btn btn-light btn-lg  bg-crimson  btn-block"
                        type="button"
                        // disabled={!items.length}
                        disabled="true"
                    >
            
                        {/* <Link className="white">Checkout</Link> */}
                        checkout
            
                    </button>
                </div>
            </div>
        </div>
   </Fragment>
  )
}
