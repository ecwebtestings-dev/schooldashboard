import { useEffect, useState } from "react"

const STORAGE_KEY ="theme"



export default function UseTheme() {
  const [theme,setTheme]=useState(()=>{
   
    try {
        return localStorage.getItem(STORAGE_KEY)||'light';
    } catch {
        return "light";
    }
  })

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme);
    try {
        localStorage.setItem(STORAGE_KEY,theme);
    } catch {}
  },[theme]);

  const toggleTheme =()=>setTheme((t)=>(t==='dark'?'light':'dark'));


  return{ theme, isDark:theme==='dark',toggleTheme}
}
