'use client';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar'
import InputBox from './InputBox'
import OutputBox from './OutputBox';
import Compress from './Compress'
import Decompress from './Decompress'
import icon from '../assets/text-format.png'

const base_url = "https://backend-lzw-ken.cyclic.app/api/compress"


export default function Home() {
  return (
    <div>
      <head>
        <title>LZW Algorithm Compressor</title>
        <Image src={icon} alt="icon"></Image>
      </head>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <h1 className="text-7xl">LZW Algorithm Compressor</h1>

        <InputBox></InputBox>
        <OutputBox></OutputBox>
        <div className="buttons">
          <Compress onClick={() => console.log("anjay")}></Compress>
          <Decompress></Decompress>
        </div>
      
    </main>
    </div>
    
  )
}
