import React, {useState} from "react";
import style from './style.module.css'
import SearchBar from "./search-bar";
import ImageDisplay from "./image-display";

function App() {
  const [images, changeImage] = useState([]);
  return (
    <div className="i-search">
      <h1 className={style['main-heading']}>I Search</h1>
      <SearchBar changeImages={(images)=>{
       changeImage(images.results);
      }}/>
      <ImageDisplay images={images}/>
    </div>
  );
}

export default App;
