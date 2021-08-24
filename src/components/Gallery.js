import React from 'react'
import GalleryTab from './GalleryTab'


function Gallery (props) {
    console.log(props)

    const mapImages= () => {
        let mappedImages = props.renderImages.map(eachImage =>{
            return(
                <GalleryTab key = {eachImage.id}
                        pic ={eachImage.image} />
            )
        })
        return mappedImages
    }






    return(
        <div>
            
            {mapImages()}
        
        </div>
    )
}

export default Gallery;