import { Link } from "react-router-dom"
import Gallery from "../components/Gallery"

const GalleryPage = () => {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Link to='/'>Accueil</Link>
      </div>
      <hr />
      <Gallery />
    </>
  )
}

export default GalleryPage