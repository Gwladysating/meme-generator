import { useRef } from 'react'
import { useCanvas } from './hooks/useCanvas'
import { myImages } from '../utils/data'

type CanvasProps = {
    width: number,
    height: number,
    top: string,
    bottom: string
    picture: string
}

const Canvas = ({ width, height, top, bottom, picture }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const hookProps = {
        canvasRef,
        imageString: picture,
        topText: top,
        bottomText: bottom
    }

    const dataUrl = useCanvas(hookProps)

    const handleSave = () => {
        if (dataUrl) myImages.push(dataUrl)
    }


    const handleDownload = () => {
        try {
            if (dataUrl) {
                const dll = document.createElement('a')
                dll.href = dataUrl
                dll.download = 'test.png'
                document.body.appendChild(dll)
                dll.click()
                document.body.removeChild(dll)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <canvas ref={canvasRef} width={width} height={height} />
            <br />
            <br />
            <div className='actions'>
            <button onClick={handleSave}>
                Enregistrer
            </button>
            <button onClick={handleDownload}>
                Télécharger
            </button>
            </div>
        </>
    )
}

export default Canvas