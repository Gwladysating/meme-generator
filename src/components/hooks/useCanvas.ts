import { MutableRefObject, useEffect, useState } from "react"

type UseCanvasProps = {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>,
    imageString: string,
    topText: string,
    bottomText: string
}

export const useCanvas = ({ canvasRef, imageString, topText, bottomText }: UseCanvasProps) => {
    const [dataUrl, setDataUrl] = useState('')

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')

        if (context && canvas) {
            const image = new Image()
            image.src = imageString
            image.crossOrigin = 'Anonymous'
            const {newWidth, newHeight} = getNewDimensions(image, canvas as HTMLCanvasElement)
            // canvas.width = newWidth
            // canvas.height = newHeight
            image.onload = () => {
                context.clearRect(0, 0, canvas.width, canvas.height)
                // context.drawImage(image, x, y, newWidth, newHeight)
                context.drawImage(image, 0, 0, newWidth, newHeight)
                context.font = '50px Arial'
                context.strokeText(topText, 50, 50)
                context.fillText(topText, 50, 50)
                context.strokeText(bottomText, 50, newHeight - 15)
                context.fillText(bottomText, 50, newHeight - 15)
                context.strokeStyle = "#000000"
                context.fillStyle = '#ffffff'
                context.lineWidth = 5
                if (canvas) setDataUrl(canvas.toDataURL())
            }
        }

    }, [topText, bottomText, canvasRef, imageString])

    return dataUrl
}

function getNewDimensions(img: HTMLImageElement, canvas: HTMLCanvasElement) {
    // const ratio = img.width / img.height
    const scaleX = canvas.width / img.width
    const scaleY = canvas.height / img.height

    // const scale = Math.min(scaleX, scaleY)

    const newWidth = img.width * scaleX
    const newHeight = img.height * scaleY


    /* const x = (canvas.width - newWidth) / 2
    const y = (canvas.height - newHeight) / 2 */

    return { newWidth, newHeight }
}