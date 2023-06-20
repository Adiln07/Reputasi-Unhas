import React from 'react'
import "../../style/components/DataFakultas/DataFakultas.css"
import dropdown from "../../assets/dropdown.png"

const DataFakultas = () => {
  return (
    <div className='data__fakultas'>
        <h1>Data Fakultas</h1>
        <div className='data__fakultas-table'>
          <div className='pilih__fakultas'>
            <h2>Pilih Fakultas</h2>
            <img src={dropdown}/>
          </div>
          <table>
            <tr>
              <th>Jenis Data</th>
              <th>Jumlah</th>
            </tr>
            <tr>
              <td>Total Pendapatan (Dalam Rupiah) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Total Pendapatan Penelitian (Dalam Rupiah) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Total Pendapatan Penelitian dari Industri dan Komersial (dalam rupiah) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah S3 (Doktor) yang lulus di tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah S2 (Magister) yang lulus di tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah S1 (sarjana) yang lulus di tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Total Mahasiswa lulus di tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Mahasiswa S1 Internasional aktif (2022) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Mahasiswa S2 Internasional aktif (2022) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Mahasiswa S3 Internasional aktif (2022) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Total Mahasiswa Internasional aktif di tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah mahasiswa aktif S1 (sarjana) di Tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah mahasiswa aktif S2 (master) di Tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah mahasiswa aktif S3 (doktor) di Tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Total Mahasiswa aktif di tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah mahasiswa S1 perempuan aktif (2022) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah mahasiswa S2 perempuan aktif (2022) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah mahasiswa S3 perempuan aktif (2022) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Total Mahasiswa Perempuan aktif di tahun 2022 </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Total Peneliti (Jumlah peneliti yang melakukan penelitian kerjasama dengan peneliti UNHAS dan masih tercatat pada tahun 2022) </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah Total Dosen  </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah dosen (pengajar) internasional/dosen asing </td>
              <td>--</td>
            </tr>
            <tr>
              <td>Jumlah dosen Wanita </td>
              <td>--</td>
            </tr>

          </table>
        </div>
    </div>
  )
}

export default DataFakultas