import React from 'react'
import GalleryTab from './GalleryTab'
import NavBar from './NavBar';


function Gallery (props) {
    console.log(props)

    const mapImages= () => {
        let mappedImages = props.renderImages.map(eachImage =>{
            return(
                <GalleryTab key = {eachImage.id}
                        pic ={eachImage} />
            )
        })
        return mappedImages
        
    }

    






    return(
        <div>
            <NavBar />
            
            {mapImages()}
        
        </div>
    )
}

export default Gallery;