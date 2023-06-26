import NavImage from '../assets/Navbar.png'; 
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav><Image src={NavImage} alt="Navbar"/></nav>
        
    )
}