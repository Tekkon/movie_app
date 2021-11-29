import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return(    
    <div>
      <h3>I like {name}</h3>
      <h4>{rating} / 5</h4>
      <img src={picture} alt="" />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: 'borshch',
    image: '',
    rating: 4.8
  },
  {
    id: 2,
    name: 'chease',
    image: '',
    rating: 4.4
  },
  {
    id: 3,
    name: 'beaf',
    image: '',
    rating: 4.3
  },
  {
    id: 4,
    name: 'pasta',
    image: '',
    rating: 5.0
  }
]

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
