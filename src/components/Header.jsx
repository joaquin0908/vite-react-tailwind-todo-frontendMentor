import { useEffect, useState } from "react";
import Moon from "./icons/Moon"
import Sun from "./icons/Sun";

const Header = () => { 

const InitialStateDarkMode = localStorage.getItem("theme") === "dark" ;

const [darkMode, SetDarkMode] = useState(InitialStateDarkMode);


useEffect(() => {
if (darkMode){
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'

}else{
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'ligth'

}

}, [darkMode]); 
    return(
    <header className="container mx-auto px-4 md:max-w-xl " >
<div className="flex px-4 justify-between pt-8">
<h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">
    todo
</h1>
<button onClick={() => SetDarkMode(!darkMode)}>
 {darkMode ? <Sun /> : <Moon />}
</button>
</div>
</header>
);
};
export default Header