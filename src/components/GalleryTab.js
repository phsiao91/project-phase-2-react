import React from 'react' ;


function GalleryTab ({pic}) {

    console.log(pic)


    return(
            
            <li className="card">
                <div className="place-image">
                 <img src={pic.image} alt={pic.name}/>
                </div>
            </li>
    )

}

export default GalleryTab;