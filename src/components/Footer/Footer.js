import React from 'react'
import "../../style/components/Footer/footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__atas'>
        <div className='footer__atas--about'>
          <h2> Tentang Kami</h2>

          <p><em>Reputasi Universitas Hasanuddin Merupakan tim yang sedang<br></br> mengumpulkan data untuk Times Higher Education (THE) <br></br>dari masing-masing fakultas di Universitas Hasanuddin. </em></p>
        </div>  
        <div className='footer__atas--kontak'>
          <h2>Kontak</h2>
          
          <ul>
            <li> <em>Jln. Perintis Kemerdekaan No.KM.10, Kota Makassar,<br></br> Sulawesi Selatan</em></li>
            <li><em>Reputasi@unhas.ac.id </em></li>
          </ul>
        </div>
        <div>

        </div>
      </div>
      <div className='footer__bawah'>
        <p><em>Reputasi Universitas Hasanuddin 2022</em></p>
      </div>
    </div>
  )
}

export default Footer