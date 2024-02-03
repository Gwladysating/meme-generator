import { ChangeEvent, useState } from 'react'
// import { myImages } from '../utils/data'
import Editor from './Editor'



const FileUpload = () => {
    const [selected, setSelected] = useState<File | null>(null)
    const [pic, setPic] = useState<string>('')

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target

        if (files && files.length > 0) {
            setSelected(files[0])
            const imageData = await readImageFile(files[0])
            // myImages.push(imageData)
            setPic(imageData)
        }
    }

    return (
        <>
        <div className='inputs'>
            <input type="file" onChange={handleChange} />
        </div>
        {selected && <Editor pictureString={pic} />}
        
        </>
    )
}

function readImageFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        resolve(imageData);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

export default FileUpload