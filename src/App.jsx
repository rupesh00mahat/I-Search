import React, {useState} from "react";
import SearchBar from "./search-bar";
import ImageDisplay from "./image-display";
import LoadingBar from 'react-top-loading-bar'
import Navbar from "./navbar";
import { LoadingContext } from "./store/loading-context";


function App() {
  const [images, changeImage] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, changeLoading] = useState(false);

  const changeProgress = (value) => {
    setProgress(value);
  }
  const loadingChange = (value) => {
    changeLoading(value);
  }
  const alterImage = (value) => {
    changeImage(value);
  }
  
  return (
   <LoadingContext.Provider value={{
    loading,
    loadingChange,
    alterImage,
    changeProgress,
   }}>
    <LoadingBar
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     <div className="i-search">
      <Navbar />
      <SearchBar 
      />
     <ImageDisplay images={images}/>
     
    </div>
    </LoadingContext.Provider>
  );
}

export default App;
