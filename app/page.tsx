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

const base_url = "https://backend-lzw-ken.cyclic.app/api/compress"


export default function Home() {

  const [textComp, setTextComp] = useState('');
  const [responseData, setResponseData] = useState<{ message: string } | null>(null);;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextComp(event.target.value);
  };

  const fetchDataComp = async () => {
    try {
      const response = await fetch(`/api/compress/comp/${textComp}`);
      const jsonData = await response.json();
      setResponseData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataDecomp = async () => {
    try {
      const response = await fetch(`/api/compress/decomp/${textComp}`);
      const jsonData = await response.json();
      setResponseData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataComp();
  }, [textComp]);

  useEffect(() => {
    // Handle updates based on new response data
    if (responseData) {
      // Perform any necessary operations with the updated response data
      console.log('New response data:', responseData);
    }
  }, [responseData]);

  const updatedText = responseData ? responseData.message : '';

  const handleButtonClickComp = (event: React.MouseEvent<HTMLButtonElement>) => {
    fetchDataComp();
  };

  const handleButtonClickDecomp = (event: React.MouseEvent<HTMLButtonElement>) => {
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
