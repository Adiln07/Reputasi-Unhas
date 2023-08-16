import React from 'react'
import "../../style/components/DataFakultas/DataFakultas.css"
import dropdown from "../../assets/dropdown.png"
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'

const DataFakultas = () => {

  const[users, setUser] = useState([]);

  useEffect(()=>{
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  return (
    <div className='data__fakultas'>
        <h1>Data Fakultas</h1>
        <div className='data__fakultas-table'>
          <div className='pilih__fakultas'>
            <h2>Pilih Fakultas</h2>
            <img src={dropdown}/>
          </div>
          <div className='editor'>
          {users.map((user)=> (
                <Link className='edit' to={`/formFakultasEdit/${user.id}`} >Edit Data</Link>
              ))}
          
          </div>
          <table>
            <thead>
            <tr>
              <th>Jenis Data</th>
              <th>Jumlah</th>
            </tr>
            </thead>
            <tbody>
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Total Pendapatan (Dalam Rupiah) </td>
                <td>{user.jumlah1}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Total Pendapatan Penelitian (dalam rupiah) </td>
                <td>{user.jumlah2}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Total Pendapatan Penelitian dari Industri dan Komersial (dalam rupiah) </td>
                <td>{user.jumlah3}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah S3 (Doktor) yang lulus di tahun 2022 </td>
                <td>{user.jumlah4}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah S2 (Magister) yang lulus di tahun 2022 </td>
                <td>{user.jumlah5}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah S1 (sarjana) yang lulus di tahun 2022 </td>
                <td>{user.jumlah6}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Total Mahasiswa lulus di tahun 2022 </td>
                <td>{user.jumlah7}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Mahasiswa S1 Internasional aktif (2022) </td>
                <td>{user.jumlah8}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Mahasiswa S2 Internasional aktif (2022) </td>
                <td>{user.jumlah9}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Mahasiswa S3 Internasional aktif (2022) </td>
                <td>{user.jumlah10}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Total Mahasiswa Internasional aktif di tahun 2022 </td>
                <td>{user.jumlah11}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah mahasiswa aktif S1 (sarjana) di Tahun 2022 </td>
                <td>{user.jumlah12}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah mahasiswa aktif S2 (master) di Tahun 2022 </td>
                <td>{user.jumlah13}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah mahasiswa aktif S3 (doktor) di Tahun 2022 </td>
                <td>{user.jumlah14}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Total Mahasiswa aktif di tahun 2022 </td>
                <td>{user.jumlah15}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah mahasiswa S1 perempuan aktif (2022) </td>
                <td>{user.jumlah16}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah mahasiswa S2 perempuan aktif (2022) </td>
                <td>{user.jumlah17}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah mahasiswa S3 perempuan aktif (2022) </td>
                <td>{user.jumlah18}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Total Mahasiswa Perempuan aktif di tahun 2022 </td>
                <td>{user.jumlah19}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Total Peneliti yang kerjasama dengan peneliti UNHAS  pada tahun 2022 </td>
                <td>{user.jumlah20}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah Total Dosen  </td>
                <td>{user.jumlah21}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah dosen (pengajar) internasional/dosen asing </td>
                <td>{user.jumlah22}</td>
              </tr>
              ))}
              {users.map((user)=> (
                <tr key={user.id}>
                <td>Jumlah dosen Wanita </td>
                <td>{user.jumlah23}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default DataFakultas