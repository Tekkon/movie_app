function Food({name}) {
  return(    
    <h3>I like to eat {name}!</h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hi there!</h1>
      <Food name='borshch' />
      <Food name='butter' />
      <Food name='beaf' />
      <Food name='pasta' />
    </div>
  );
}

export default App;
