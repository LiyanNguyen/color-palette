import { useState } from "react"

type Props = {
  color: string
}

const ColorBox = (props: Props) => {
  const { color } = props
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleClick = () => {
    navigator.clipboard.writeText(color)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, (500))
  }
  
  return (
    <div onClick={handleClick} className='cursor-pointer flex flex-col gap-2 items-center group'>
      <p className="font-medium uppercase" style={{ color: color }} >{color}</p>
      <div className='flex items-center justify-center h-20 w-20 rounded-[50%] bg-red-500' style={{ backgroundColor: color }}>
        <p className="text-slate-100 font-semibold invisible group-hover:visible">{isCopied ? 'Copied!' : 'Copy'}</p>
      </div>
    </div>
  )
}

export default ColorBox