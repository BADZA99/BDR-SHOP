import React from 'react'
import Modal from './Modal';
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/actions";


export default function Card(props) {
    const {item,count}=props;
    return (
      <div className="col-sm-4 pb-2">
        <div className="card taillecart">
          <img
            className="card-img-top"
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
          />
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h6 className="font-weight-bold">{item.name}</h6>
              </div>
              <div className="col-sm-6">
                <h6 className="font-weight-bold">
                  {item.price}€/{item.unit}
                </h6>
              </div>
              <button
                className="btn btn-primary btn-sm col-md-7"
                data-toggle="modal"
                data-target={`#${item.ref}`}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <Modal
          item={item}
          count={count}
        />
      </div>
    );
}
