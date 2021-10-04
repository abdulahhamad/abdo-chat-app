import React, { useEffect, useState } from 'react'
import useLogin from "../../../hooks/useLogin"; 

export default function SearchInput({setSearch}) {
  const {theme}=useLogin();
  
  const inputSearch=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <div className={`search-input`}>
      <input className={`${theme==="dark"&&"search-input-dark"}`} type="text" placeholder="Search" onChange={inputSearch}></input>
    </div>
  )
}
