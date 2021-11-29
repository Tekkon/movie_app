import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const { 
      data: { 
        data: {movies} 
      } 
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  renderMovie(movie) {
    console.log(movie);

    return(
      <div clas="movies">
        <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image} 
        />
      </div>      
    );
  }

  render() {
    const { isLoading, movies } = this.state;
    return(
      <section class="container">
        {
          isLoading 
            ? <div class="loader">
              <span class="locader__text">Loading...</span>
            </div>
            : movies.map(movie => this.renderMovie(movie))
        }
      </section>
    );
  }
}

export default App;
