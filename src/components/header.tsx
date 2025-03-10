import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { ImFire } from "react-icons/im";

const Header = () => {
  const [menuMovilActive,setMenuMovilActive]=useState<boolean>(false);

  const handleSowMenuMovil=():void=>{
    setMenuMovilActive((prev) => !prev);
  } 

  return (
    <nav className="bg-violet-600 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto h-16 w-auto flex items-center text-2xl font-bold p-0.5">
        <span className="text-white"><ImFire className="text-4xl ml-4"/> </span>
        <FiAlignJustify  className="text-white md:hidden text-4xl ml-auto" onClick={handleSowMenuMovil}/>
        <ul className={`text-white flex justify-end space-x-4 min-md:mx-2 w-full max-md:flex-col max-md:bg-white/9 max-md:text-slate-600 
        max-md:absolute max-md:top-16 max-md:h-[700px] max-md:backdrop-blur-md max-md:justify-start max-md:items-center 
        max-md:transform max-md:transition-transform max-md:duration-400 max-md:ease-in-out ${menuMovilActive ? "max-md:translate-x-0" : "max-md:translate-x-[-100%]"}`}>
          <li className="cursor-pointer max-md: mt-4">Inicio</li>
          <li className="cursor-pointer max-md: mt-4">Habilidades</li>
          <li className="cursor-pointer max-md: mt-4">Proyectos</li>
          <li className="cursor-pointer max-md: mt-4">Contacto</li>
        </ul>
      </div>
    </nav>

  )
}

export default Header

