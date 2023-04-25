import React from 'react'
import Card from './Card'

export default function List(props) {
    const {data,category}=props;
    const article=data[category];

    // console.log(article);
  return (
    <div>
      <div className="col-sm">
        <div className="row">
             {
               article.map(game => <Card key={game.ref} game={game}/>) 

            } 
        </div>
      </div>
    </div>
  )
}
