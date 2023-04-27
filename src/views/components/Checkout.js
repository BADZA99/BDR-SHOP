import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function Checkout() {
    const [isValid,setValid]=useState(false)
    const validate = ()=>{
        let errors=[]
        const inputs= document.querySelectorAll(".form-control")

        inputs.forEach(input=>{
           !inputs.value ? errors.push(input) : errors.length && errors.pop()
        })
        // console.log(errors)
        setValid(!errors.length); 
        
    }
    useEffect(()=>{
         validate()

    })
    return (
      <div classNameName="container">
        <h2>Checkout</h2>
        <br />

        <form className="container">
          <form action="">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </form>

          <div className="form-grou pt-2">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              classNameName="form-control col-md-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control col-md-5"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Adress</label>
            <input
              type="password"
              className="form-control col-md-5"
              id="exampleInputPassword1"
              placeholder="Adress"
            />
          </div>
          <form action="">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="post code"
                />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="city" />
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-danger btn-lg btn-block mt-2"
            disabled={!isValid && true}
          >
            Checkout
          </button>
        </form>
      </div>
    );
}
