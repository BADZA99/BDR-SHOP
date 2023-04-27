import { Fragment } from "react"
import React from 'react'
// import link
// import { Link } from "react-router-dom";



const Table =()=>{
    return (
        <table>
            <tr>
                <th width="200">Product</th>
                <th width="90">Reference</th>
                <th width="150">price</th>
                <th width="150">quantity</th>
                <th width="200">total</th>
            </tr>
            <Row/>
            <Row/>
        </table>
    )
}

const Row =()=>{
    return (
        <tr>
            <td>
                <img src="" alt="produit" width="70" height="70"/>
            </td>
            <td>
                <p>ref</p>
            </td>
            <td>
                <p>price</p>
            </td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">-</button>
                    <span className="btn btn-light">1</span>
                    <button type="button" className="btn btn-secondary">+</button>
                </div>
            </td>
            <td>
                2,99
            </td>
            <button
                type="button"
                className="btn btn-danger remove" 
            >
                X
            </button>
        </tr>
    )
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
