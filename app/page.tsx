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
  const [responseData, setResponseData] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setTextComp(inputValue);
  };

  const fetchDataComp = async () => {
    try {
      console.log("fetching data comp")
      const encodedTextComp = encodeURIComponent(textComp);
      const response = await fetch(`${base_url}/api/compress/comp/${encodedTextComp}`);
      const textData = await response.text();
      setResponseData(textData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataDecomp = async () => {
    try {
      console.log("fetching data decomp")
      const encodedTextComp = encodeURIComponent(textComp);
      const response = await fetch(`${base_url}/api/compress/decomp/${encodedTextComp}`);
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
    console.log("button click compress", textComp)
    fetchDataComp();
  };

  const handleButtonClickDecomp = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button click decompress", textComp)
    fetchDataDecomp();
  };

  return (
    <>
      <head>
        <title>LZW Algorithm Compressor</title>
      </head>
      <body>
        <Navbar/>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
          <h1 className="text-7xl">LZW Algorithm Compressor</h1>

          <InputBox value={textComp} onChange={handleInputChange}></InputBox>
          <OutputBox value={responseData}></OutputBox>
          <div className="buttons">
            <Compress onClick={handleButtonClickComp}></Compress>
            <Decompress onClick={handleButtonClickDecomp}></Decompress>
          </div>
      </main>
    </body>
    </>
    
  )
}
