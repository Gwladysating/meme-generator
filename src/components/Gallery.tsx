import '../App.css'
import GalleryItem from "./GalleryItem"
import { myImages } from "../utils/data"

const Gallery = () => {
    return (
        <>
            <h2>Gallerie</h2>
            <div className="gallery">
                {[...new Set(myImages)].map(image => (
                    <GalleryItem key={image} imageString={image} />
                ))}
            </div>
        </>
    )
}

export default Gallery