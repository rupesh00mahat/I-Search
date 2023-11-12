import React, {useRef} from 'react'
import style from './style.module.css'

function SearchBar({changeImages}) {
   const userInput = useRef('');

   const searchImage = async (e)=>{
    e.preventDefault();

    let url = `https://api.unsplash.com/search/photos?page=1&query=${userInput.current.value}&client_id=IUxVPek6JUrAO4DIg-AlJ1WYrMZjyhFCPxWtFbHKFzs`;
    const response = await fetch(url);
    const images = await response.json();
   changeImages(images);
   }

  return (
    <div className="form-wrapper">
  <form onSubmit={searchImage} className={`form-inline mx-auto ${style['form-search-bar']}`}>
    <input ref={userInput} className="form-control mr-sm-2 mx-3" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>   
  )
}

export default SearchBar