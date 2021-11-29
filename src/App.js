function Food({name, picture}) {
  return(    
    <div>
      <h3>I like {name}</h3>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'borshch',
    image: ''
  },
  {
    name: 'chease',
    image: ''
  },
  {
    name: 'beaf',
    image: ''
  },
  {
    name: 'pasta',
    image: ''
  }
]

function App() {
  return (
    <div>
      <h1>Hi there!</h1>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
