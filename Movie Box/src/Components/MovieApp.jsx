import React,{useEffect, useState} from 'react'
import "./MovieApp.css"
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';

const MovieApp = () => {
 const [movie, setMovie] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState("popularity.desc")
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("")
    const [expendedMovieId, setExpendedMovieId] = useState(null)

useEffect(() => {
  const fetchGenres= async()=>{
    const response =await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list',
        {
           params:{
               api_key:'2d9860381c8d4474f13c4fc50cf855fc',
           },
        }
   );
   setGenres(response.data.genres)
  }
  fetchGenres()
},[])

useEffect(() => {
  const fetchMovies = async()=>{
    const response =await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        {
           params:{
               api_key:'2d9860381c8d4474f13c4fc50cf855fc',
               sort_by:sortBy,
               page:1,
               with_genres:selectedGenre,
               query:searchQuery
           },
        }
   );
   setMovie(response.data.results)
  }
  fetchMovies()

}, [searchQuery,sortBy,selectedGenre])

    const handleSearchChange=(e)=>{
setSearchQuery(e.target.value)
    }
    const handleSearchSubmit= async()=>{
const response =await axios.get(
     'https://api.themoviedb.org/3/search/movie',
     {
        params:{
            api_key:'2d9860381c8d4474f13c4fc50cf855fc',
            query:searchQuery,
        },
     }
);
setMovie(response.data.results);

}
const handleSortChange=(e)=>{
setSortBy(e.target.value)
}
const handleGenreChange=(e)=>{
setSelectedGenre(e.target.value)
}
const toggleDescription=(movieId)=>{
setExpendedMovieId(expendedMovieId ===movieId? null:movieId)
}
  return (
    <>
    <div className='container'>
        <h1>MovieHub</h1>
        <div className="search-bar">
            <input type="text"  placeholder='Search Here...' value={searchQuery} onChange={handleSearchChange} className='search-input'/>
            <button className="search-button" onClick={handleSearchSubmit}>
            <AiOutlineSearch />
            </button>
        </div>
        <div className="filters">
<label htmlFor="sort-by">Sort By:</label>
<select id="sort-by" value={sortBy} onChange={handleSortChange}>
    <option value="popularity.desc">Popularity Descending</option>
    <option value="popularity.asc">Popularity Ascending</option>
    <option value="vote_average.desc">Rating Descending</option>
    <option value="release_date.desc">Release Descending</option>
    <option value="release_date.asc">Release Ascending</option>
</select>
<label htmlFor="genre">Genre:</label>
<select id="genre" value={selectedGenre} onChange={handleGenreChange}>
    <option value="">All Genres</option>
    {genres.map((genre)=>(<option key={genre.id} value={genre.id}>{genre.name}</option>))}
</select>
        </div>
        <div className="movie-wrarpper">
            {movie.map((movie, i)=>(
                <div className="movie" key={i}>
<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
<h2>{movie.title}</h2>
<p className="rating">Rating:{movie.vote_average}</p>
{expendedMovieId ===movie.id?(
    <p >{movie.overview}</p>
):(
    <p >{movie.overview.substring(0,150)}...</p>
)}
<button onClick={()=>toggleDescription(movie.id)} className='read-more'>
    {expendedMovieId=== movie.id? "Show less":"Read more"}
</button>
                </div>
            ))}
        </div>

        
        </div></>
  )
}

export default MovieApp