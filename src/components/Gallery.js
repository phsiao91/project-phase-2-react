import React from 'react'
import GalleryTab from './GalleryTab'
import NavBar from './NavBar';


function Gallery (props) {
    console.log(props)

  //const [newImg, setNewImg] = useState( [] )

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.image.value)
        let newImg = {
            
            image: e.target.image.value,
            
        }
        e.target.reset()
        props.addImg(newImg)
        
    }

    const mapImages= () => {
        let mappedImages = props.renderImages.map(eachImage =>{
            return(
                <GalleryTab key = {eachImage.id}
                        pic ={eachImage}
                        />
            )
        })
        return mappedImages
        
    }

    






    return(
        <div>
            <NavBar />

            <form  onSubmit={handleSubmit}>
                <h3>Add Pictures Here</h3>
                <label htmlFor="link">Image </label>
                <input type="text"
                id= "image"
                //onChange ={ e => {
                   // setNewImg(e.target.value)
                    //console.log(newImg)
               // }}
                    
                />

                <input type="submit" 
                value="Post"
                //onClick={props.addImg(newImg)}
                 />
            </form>
            
            {mapImages()}
        
        </div>
    )

}

export default Gallery;