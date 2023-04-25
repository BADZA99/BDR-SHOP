import React from 'react'

export default function Card(props) {
    const {game}=props;
    return (
      <div className="col-sm-4">
        <div className="card taillecart">
          <img
            className="card-img-top"
            src={game.image}
            alt={game.name}
            width={200}
            height={200}
          />
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h6 className="font-weight-bold">{game.name}</h6>
              </div>
              <div className="col-sm-6">
                <h6 className="font-weight-bold">{game.price}€/{game.unit}</h6>
              </div>
              <button className="btn btn-primary btn-sm col-md-7">View</button>
            </div>
          </div>
        </div>
      </div>
    );
}
