function Food({name, picture}) {
  return(    
    <div>
      <h3>I like {name}</h3>
      <img src={picture} alt="" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'borshch',
    image: ''
  },
  {
    id: 2,
    name: 'chease',
    image: ''
  },
  {
    id: 3,
    name: 'beaf',
    image: ''
  },
  {
    id: 4,
    name: 'pasta',
    image: ''
  }
]

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
