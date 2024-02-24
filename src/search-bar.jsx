import React, {useContext, useRef} from 'react'
import style from './style.module.css'
import { LoadingContext } from './store/loading-context';


function SearchBar() {

  const { alterImage, changeProgress, loadingChange} = useContext(LoadingContext);

   const userInput = useRef('');
   const searchImage = async (e)=>{
    e.preventDefault();
    loadingChange(true);
    changeProgress(10);
    let url = `https://api.unsplash.com/search/photos?page=1&query=${userInput.current.value}&client_id=IUxVPek6JUrAO4DIg-AlJ1WYrMZjyhFCPxWtFbHKFzs`;
    changeProgress(30);
    const response = await fetch(url);
    changeProgress(50);
    const images = await response.json();
    changeProgress(70);
    alterImage(images.results);
    changeProgress(90);
    changeProgress(100);
    loadingChange(false);
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