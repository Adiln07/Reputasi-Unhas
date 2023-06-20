import React from 'react'
import  '../../style/components/Header/header.css'
import Unhas from "../../assets/unhas.png" 
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className='title'>
        <img src={Unhas}/>
        <h1>reputasi <br></br>universitas hasanuddin</h1>
        </div> 
        <div className='nav'>
            <div className='nav-title'>
              <Link to="/">Beranda</Link>
              <Link to="/formfakultas">Form</Link>
              {/* <a>Update</a> */}
              <Link to="/datafakultas">Data Fakultas</Link>
              <Link to="/about">Tentang Kami</Link>
            </div>
            <div className='signIn'>
                <a>Masuk</a>
            </div>
        </div>
    </div>
  )
}

export default Header