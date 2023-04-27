import { Fragment, useEffect, useState } from "react"
import React from 'react'
// import updatecart
import { removeFromCart, updateCart } from "../../lib/actions";
import { useDispatch, useSelector } from "react-redux";



const Table = ({ items }) => {
    // const items = useSelector((state) => state.items);

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
                items.map((item) => {
                    return <Row item={item} />
                }
                )
            }

        </table>
    )
}

const Row = (props) => {

    const { id, quantity, details } = props.item
    const produit = details;
    const [qty, setqty] = useState(quantity);
    const dispatch = useDispatch();

    const update = (value) => {
        if(value==="incremente"){
            setqty(qty+1);
        }
        else if(value==="decremente"){
            if(qty>1){
                setqty(qty-1);
            }
        }
        dispatch(updateCart(id,qty));
        console.log(qty);

    };

    const remove = (id) => {
        dispatch(removeFromCart(id));
    }

    useEffect(()=>{
        // dispatch
        dispatch(updateCart(id,qty));
    },[qty])



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
                        onClick={() => {
                            update("decremente")
                        }}
                    >
                        -
                    </button>
                    <span className="btn btn-light">{qty}</span>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            update("incremente")}}
                    >
                        +
                    </button>
                </div>
            </td>
            <td>{produit.price * qty}€</td>
            <button type="button" className="btn btn-danger "
                onClick={() => remove(id)}
            >
                x
            </button>
        </tr>
    );
}

export default function CartPage() {
    const items = useSelector((state) => state.items);
    const [subTotal, setSubTotal] = useState(0);
    const [Total, setTotal] = useState(0);
    const shipping = 10;

    useEffect(() => {
        let totals = items.map(item => {
            return item.quantity * item.details.price

        })

        setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
        // let sousTotal=totals.reduce((item1,item2)=> item1+item2,0)
        setTotal(subTotal + shipping);
        // console.log(sousTotal);
        // console.log(items);
    },[items,subTotal,Total]);
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm cart">
                        <Table items={items} />
                    </div>
                    <div className="col-sm-3 order-summary">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h6>Order Summary</h6>
                            </li>
                            <li className="list-group-item">
                                <ul className="list-group flex">
                                    <li className="text-left">subtotal</li>
                                    <li className="text-right">{subTotal}€</li>
                                </ul>
                                <ul className="list-group flex">
                                    <li className="text-left">shipping</li>
                                    <li className="text-right">{shipping}€</li>
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
                                    <li className="text-right">{subTotal === 0 ? "00" : Total}€</li>
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
    );
}
