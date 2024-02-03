import { Link } from "react-router-dom"
import FileUpload from "../components/FileUpload"

const HomePage = () => {
    return (
        <>
            <div style={{marginBottom: '1rem'}}>
                <Link to='/gallery'>Gallerie</Link>
            </div>
            <hr />
            <FileUpload />
        </>

    )
}

export default HomePage