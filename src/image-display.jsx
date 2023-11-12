import React, {Fragment} from 'react'
import style from './style.module.css'

function ImageDisplay({images}) {
    console.log(images);
  return (
    <div class="container">
  <div class="row">
   {images.map((image)=>{
    return  <Fragment>
        <div class="col-sm-3 mx-4 my-4">
            <img className={`mx-2 my-2 ${style['image-item-link']}`} src={image.urls.thumb} />
        </div>
     </Fragment>
   })}
  </div>
  
</div>
  )
}

export default ImageDisplay