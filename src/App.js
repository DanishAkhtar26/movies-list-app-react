import React from 'react';

import './App.css';
import Header from './components/Header';
import { Card} from 'react-bootstrap';

const data=[
  {
    "id": 1,
    "title": "Avatar",
    "distributor": "20th Century Fox",
    "year": 2009,
    "amount": "$2,787,965,087",
    "img": {
      "src": "media/avatar.jpg",
      "alt": "avatar"
    },
    "ranking": 1
  },
  {
    "id": 2,
    "title": "Titanic",
    "distributor": "20th Century Fox",
    "year": 1997,
    "amount": "$2,187,463,944",
    "img": {
      "src": "media/titanic.jpg",
      "alt": "titanic"
    },
    "ranking": 2
  },
  {
    "id": 3,
    "title": "Star Wars: The Force Awakens",
    "distributor": "Walt Disney Studios Motion Pictures",
    "year": 2015,
    "amount": "$2,068,223,624",
    "img": {
      "src": "media/star_wars_the_force_awakens.jpg",
      "alt": "star_wars_the_force_awakens"
    },
    "ranking": 3
  },
  {
    "id": 4,
    "title": "Avengers: Infinity War",
    "distributor": "Walt Disney Studios Motion Pictures",
    "year": 2018,
    "amount": "$2,048,359,754",
    "img": {
      "src": "media/avengers_infinity_war.jpg",
      "alt": "avengers_infinity_war"
    },
    "ranking": 4
  },
  {
    "id": 5,
    "title": "Jurassic World",
    "distributor": "Universal Pictures",
    "year": 2015,
    "amount": "$1,671,713,208",
    "img": {
      "src": "media/jurassic_world.jpg",
      "alt": "jurassic_world"
    },
    "ranking": 5
  }
]

      
      
      
      
      
      
      
      /*[
  { name: '21 Jump Street',
   imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLCqM8Ispa4waG8tNLPdy6rtiJFOEZUZxdzP-y_BQzfgo953Gb',distributor:"Columbia TriStar Warner",Amount:"$40,000,234"
 },
  { name: '22 Jump Street', 
  imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQaoamRKQDYxVXvXg6LUl6brQmMdFbpZvOQ2G_nD6u5uq16tiVh',
  distributor:"Columbia TriStar Warner",Amount:"$50,343,234" },
  { name: 'Cars', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg',
  distributor:"Walt Disney Pictures",Amount:"$80,234,322" },
  { name: 'Cars 2', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Cars_2_Poster.jpg',
  distributor:"Walt Disney Pictures",Amount:"$70,245,932"
},
  { name: 'Cars 3', imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_cars3_19643_3ab8aca1.jpeg',
  distributor:"Walt Disney Pictures",Amount:"$90,544,392"  }
]*/

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='movies-list'>
      {
        data.map((movie)=>{
        return (
          // <MovieCard movie={movie}/>
        <Card  className='movie' key={movie.name}>
      <Card.Img
        variant="top"
        src={movie.imgUrl}
        alt="image"
      />
      <Card.Body>
        <Card.Title className='title'>{movie.name}</Card.Title>
        <Card.Text className='text-1'>Distributor: {movie.distributor}</Card.Text>
        <Card.Text className='text-2'>Amount: {movie.Amount}</Card.Text>
      </Card.Body>
    </Card>
    )
        })
      }
      </div>
    </div>
  );
}

export default App;
