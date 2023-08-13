import { Palette } from "color-thief-react"
import { ChangeEvent, useState } from "react"
import ColorBox from "./components/ColorBox"
import defaultImage from "./assets/defaultImage.jpg"

function App() {
  const [file, setFile] = useState<string>(defaultImage)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0].type.startsWith('image/')) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    else alert('Invalid File Type')
  }
  
  return (
    <main className="flex flex-col items-center p-4 gap-8 bg-white h-[100dvh]">
      <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#0F9D58]'>Palette Generator</h1>
      <input id="upload" type="file" accept="image/*" onChange={handleFileChange } hidden />
      <label htmlFor="upload" className="h-[405px] w-[720px] flex items-center justify-center cursor-pointer ease-in-out transition group">
        <div className="invisible group-hover:visible absolute z-10 h-[405px] w-[720px] bg-gray-500 opacity-50 rounded-lg"></div>
        <p className="invisible group-hover:visible absolute z-20 text-white text-2xl font-bold uppercase">replace image</p>
        {file && <img src={file} alt="uploaded image" className=" object-contain w-full h-full"/> }
      </label>
      
      <Palette src={file} crossOrigin="anonymous" format="hex" colorCount={6}>
        {({ data, loading }) => 
          <div className="flex gap-10">
            {loading ?
              <p className="text-xl capitalize text-slate-500 font-medium mt-14">loading colors...</p>
                : data?.map(color => <ColorBox key={color} color={color} />)
            }
          </div>
        }
      </Palette>
    </main>
  )
}

export default App
