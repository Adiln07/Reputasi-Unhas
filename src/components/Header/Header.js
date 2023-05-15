import React from 'react'
import  '../../style/components/Header/header.css'
import Unhas from "../../assets/unhas.png" 
const Header = () => {
  return (
    <div className='header'>
        <div className='title'>
        <img src={Unhas}/>
        <h1>reputasi <br></br>universitas hasanuddin</h1>
        </div> 
        <div className='nav'>
            <div className='nav-title'>
            <a src="">Beranda</a>
            <a>Form</a>
            {/* <a>Update</a> */}
            <a>Data Fakultas</a>
            <a>Tentang Kami</a>
            </div>
            <div className='signIn'>
                <a>Masuk</a>
            </div>
        </div>
    </div>
  )
}

export default Header