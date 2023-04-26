import React, { useState } from 'react'


export default function Modal({ item,addToCart,count }) {
    const [qty, setqty] = useState(1);
    return (
      <div
        class="modal fade"
        id={item.ref}
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {item.name}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="col-sm">
                  <p className="lead">Lorem ipsum dolor sit amet.</p>
                  <h3 className="price">{item.price * count}€</h3> <br />
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="basic example"
                  >
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={() => setqty(count > 1 ? count - 1 : 1)}
                    >
                      -
                    </button>
                    <span className="btn btn-light">{qty}</span>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={() => setqty(count + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => addToCart(count +1)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
