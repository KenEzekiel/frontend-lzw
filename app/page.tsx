'use client';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar'
import InputBox from './InputBox'
import OutputBox from './OutputBox';
import Compress from './Compress'
import Decompress from './Decompress'
import icon from '../assets/text-format.png'
import { useEffect, useState } from 'react';

const base_url = "https://backend-lzw-ken.cyclic.app"


export default function Home() {

  const [textComp, setTextComp] = useState('');
  const [responseData, setResponseData] = useState<string | null>(null);;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextComp(event.target.value);
  };

  const fetchDataComp = async () => {
    try {
      const response = await fetch(`${base_url}/api/compress/comp/${textComp}`);
      const textData = await response.text();
      setResponseData(textData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataDecomp = async () => {
    try {
      const response = await fetch(`${base_url}/api/compress/decomp/${textComp}`);
      const textData = await response.text();
      setResponseData(textData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    // Handle updates based on new response data
    if (responseData) {
      // Perform any necessary operations with the updated response data
      console.log('New response data:', responseData);
    }
  }, [responseData]);

  const updatedText = responseData ? responseData : '';

  const handleButtonClickComp = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button click compress")
    fetchDataComp();
  };

  const handleButtonClickDecomp = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button click decompress")
    fetchDataDecomp();
  };

  return (
    <div>
      <head>
        <title>LZW Algorithm Compressor</title>
        <Image src={icon} alt="icon"></Image>
      </head>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <h1 className="text-7xl">LZW Algorithm Compressor</h1>

        <InputBox value={textComp} onChange={handleInputChange}></InputBox>
        <OutputBox value={updatedText}></OutputBox>
        <div className="buttons">
          <Compress onClick={handleButtonClickComp}></Compress>
          <Decompress onClick={handleButtonClickDecomp}></Decompress>
        </div>
      
    </main>
    </div>
    
  )
}
