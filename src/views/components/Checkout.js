import React, { useEffect, useState, useContext } from "react";
import { UserProfileContext } from "../../lib/UserProfileContext";
// import { Link } from 'react-router-dom';


export default function Checkout() {
    const [isValid, setValid] = useState(false);
    const value = useContext(UserProfileContext)
    const {
        firstName,
        lastName,
        email,
        address,
        zipCode,
        city,
        setUserProfileContext
    } = value
    const validate = () => {
        let errors = []
        const inputs = document.querySelectorAll(".form-control")

        inputs.forEach(input => {
            !inputs.value ? errors.push(input) : errors.length && errors.pop()
        })
        // console.log(errors)
        setValid(!errors.length);

    }
    useEffect(() => {
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
                  defaultValue={firstName}
                  name="firstName"
                  onChange={(e) => {
                    setUserProfileContext({ [e.target.name]: e.target.value });
                  }}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  defaultValue={lastName}
                  name="lastName"
                  placeholder="Last name"
                  onChange={(e) => {
                    setUserProfileContext({ [e.target.name]: e.target.value });
                  }}
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
                defaultValue={email}
              name="email"
              onChange={(e) => {
                setUserProfileContext({ [e.target.name]: e.target.value });
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Adress</label>
            <input
              type="password"
              className="form-control col-md-5"
              id="exampleInputPassword1"
              placeholder="Adress"
              defaultValue={address}
              name="address"
              onChange={(e) => {
                setUserProfileContext({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <form action="">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="post code"
                    defaultValue={zipCode}
                  name="zipCode"
                  onChange={(e) => {
                    setUserProfileContext({ [e.target.name]: e.target.value });
                  }}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="city"
                 defaultValue={city}
                  name="city"
                  onChange={(e) => {
                    setUserProfileContext({ [e.target.name]: e.target.value });
                  }}
                />
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-danger btn-lg btn-block mt-2"
            // disabled={!isValid && true}
          >
            Checkout
          </button>
        </form>
      </div>
    );
}
