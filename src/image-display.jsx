import React, {Fragment, useContext} from 'react'
import { LoadingContext } from './store/loading-context'

function ImageDisplay({images}) {

  const loadingContext = useContext(LoadingContext).loading;
  

  return loadingContext ? <div>Loading ...</div>: <Fragment>
    <div class="container">
  <div class="row">
   {images.map((image)=>{
    return  <Fragment>
        <div class="col-sm-4 my-4">
        <div class="card" >
  <img class="card-img-top" src={image.urls.thumb} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{image.alt_description}</p>
  </div>
  </div>
        </div>
     </Fragment>
   })}
  </div>
</div>
  </Fragment>
}

export default ImageDisplay