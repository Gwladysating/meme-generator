import { ChangeEvent, useState } from 'react'
import Canvas from './Canvas'

type EditorProps = {
    pictureString: string
}

const Editor = ({ pictureString }: EditorProps) => {
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === 'top') setTopText(value)
        else if (name === 'bottom') setBottomText(value)
    }

    return (
        <>
            <div className='inputs'>
                <input
                    type="text" name="top" className='input'
                    value={topText} placeholder='Texte du haut'
                    onChange={handleChange}
                />
                <input
                    type="text" name="bottom" className='input'
                    value={bottomText} placeholder='Texte du bas'
                    onChange={handleChange}
                />
            </div>
            <Canvas
                width={400} height={330}
                top={topText} bottom={bottomText}
                picture={pictureString}
            />
        </>
    )
}

export default Editor