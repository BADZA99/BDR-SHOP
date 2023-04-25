import React from 'react'

export default function Modal({ item }) {
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
                                <h3 className="price">{item.price}€</h3> <br />
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="basic example"
                                >
                                    <button type="button" class="btn btn-secondary">
                                        +
                                    </button>
                                    <span className="btn btn-light">1</span>
                                    <button type="button" class="btn btn-secondary">
                                        -
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
                        <button type="button" class="btn btn-primary">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
