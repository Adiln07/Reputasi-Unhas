import React from "react"
import "../../style/components/FormFakultas/FormFakultas.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const FormFakultasEdit = () =>  {
    const [jumlah1, setJumlah1] = useState('');
    const [jumlah2, setJumlah2] = useState('');
    const [jumlah3, setJumlah3] = useState('');
    const [jumlah4, setJumlah4] = useState('');
    const [jumlah5, setJumlah5] = useState('');
    const [jumlah6, setJumlah6] = useState('');
    const [jumlah7, setJumlah7] = useState('');
    const [jumlah8, setJumlah8] = useState('');
    const [jumlah9, setJumlah9] = useState('');
    const [jumlah10, setJumlah10] = useState('');
    const [jumlah11, setJumlah11] = useState('');
    const [jumlah12, setJumlah12] = useState('');
    const [jumlah13, setJumlah13] = useState('');
    const [jumlah14, setJumlah14] = useState('');
    const [jumlah15, setJumlah15] = useState('');
    const [jumlah16, setJumlah16] = useState('');
    const [jumlah17, setJumlah17] = useState('');
    const [jumlah18, setJumlah18] = useState('');
    const [jumlah19, setJumlah19] = useState('');
    const [jumlah20, setJumlah20] = useState('');
    const [jumlah21, setJumlah21] = useState('');
    const [jumlah22, setJumlah22] = useState('');
    const [jumlah23, setJumlah23] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
      }, []);

    const updateUser = async (e)=>{
        e.preventDefault();

        try{
            await axios.patch(`http://localhost:5000/users/${id}`, {
        jumlah1,
        jumlah2,
        jumlah3,
        jumlah4,
        jumlah5,
        jumlah6,
        jumlah7,
        jumlah8,
        jumlah9,
        jumlah10,
        jumlah11,
        jumlah12,
        jumlah13,
        jumlah14,
        jumlah15,
        jumlah16,
        jumlah17,
        jumlah18,
        jumlah19,
        jumlah20,
        jumlah21,
        jumlah22,
        jumlah23,
      });
      navigate("/DataFakultas");
        }catch(error){
            console.log(error)
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setJumlah1(response.data.jumlah1);
        setJumlah2(response.data.jumlah2);
        setJumlah3(response.data.jumlah3);
        setJumlah4(response.data.jumlah4);
        setJumlah5(response.data.jumlah5);
        setJumlah6(response.data.jumlah6);
        setJumlah7(response.data.jumlah7);
        setJumlah8(response.data.jumlah8);
        setJumlah9(response.data.jumlah9);
        setJumlah10(response.data.jumlah10);
        setJumlah11(response.data.jumlah11);
        setJumlah12(response.data.jumlah12);
        setJumlah13(response.data.jumlah13);
        setJumlah14(response.data.jumlah14);
        setJumlah15(response.data.jumlah15);
        setJumlah16(response.data.jumlah16);
        setJumlah17(response.data.jumlah17);
        setJumlah18(response.data.jumlah18);
        setJumlah19(response.data.jumlah19);
        setJumlah20(response.data.jumlah20);
        setJumlah21(response.data.jumlah21);
        setJumlah22(response.data.jumlah22);
        setJumlah23(response.data.jumlah23);
      };

    return(
        <div className="wrapper">
            <div className="form__title">
                <h1>Form Input Fakultas</h1>
            </div>
            <div className="form__wrapper">
                <div className="form">
                    <form onSubmit={updateUser}>
                        <div className="form__subtitle">
                            <h3>Form Pendapatan Fakultas</h3>
                        </div>
                        <div className="form__content">
                                <div className="form__content__wrapper">
                                    <label>Total Pendapatan (Dalam Rupiah)</label>
                                    <input 
                                        type="text"
                                        value={jumlah1}
                                        onChange={(e)=> setJumlah1(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Total Pendapatan Penelitian (Dalam Rupiah)</label>
                                    <input 
                                        type="text"
                                        value={jumlah2}
                                        onChange={(e)=> setJumlah2(e.target.value)}></input>
                                </div>
                                <div className="form__content__wrapper">
                                    <label>Total Pendapatan dari Industri dan Komersial (Dalam Rupiah)</label>
                                    <input 
                                        type="text"
                                        value={jumlah3}
                                        onChange={(e)=> setJumlah3(e.target.value)}></input>
                                </div>
                        </div>
                        <div className="form__subtitle">
                            <h3>Form Data Fakultas</h3>
                        </div>
                        <div className="form__content">
                                <div className="form__content__wrapper">
                                    <label>Jumlah S3 (Doktor) yang lulus di tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah4}
                                        onChange={(e)=> setJumlah4(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah S2 (Magister) yang lulus di tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah5}
                                        onChange={(e)=> setJumlah5(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah S1 (Sarjana) yang lulus di tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah6}
                                        onChange={(e)=> setJumlah6(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa lulus di tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah7}
                                        onChange={(e)=> setJumlah7(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa S1 Internasional aktif (2021)</label>
                                    <input 
                                        type="text"
                                        value={jumlah8}
                                        onChange={(e)=> setJumlah8(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa S2 Internasional aktif (2021)</label>
                                    <input 
                                        type="text"
                                        value={jumlah9}
                                        onChange={(e)=> setJumlah9(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa S3 Internasional aktif (2021)</label>
                                    <input 
                                        type="text"
                                        value={jumlah10}
                                        onChange={(e)=> setJumlah10(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa Internasional aktif di tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah11}
                                        onChange={(e)=> setJumlah11(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa Aktif S1 (Sarjana) di Tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah12}
                                        onChange={(e)=> setJumlah12(e.target.value)}></input>
                                </div>
                                
                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa Aktif S2 (Master) di Tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah13}
                                        onChange={(e)=> setJumlah13(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa Aktif S3 (Doktor) di Tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah14}
                                        onChange={(e)=> setJumlah14(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa Aktif di Tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah15}
                                        onChange={(e)=> setJumlah15(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa S1 Perempuan Aktif (2021)</label>
                                    <input 
                                        type="text"
                                        value={jumlah16}
                                        onChange={(e)=> setJumlah16(e.target.value)}></input>
                                </div>
                                
                                <div className="form__content__wrapper">
                                    <label>JJumlah Mahasiswa S2 Perempuan Aktif (2021)</label>
                                    <input 
                                        type="text"
                                        value={jumlah17}
                                        onChange={(e)=> setJumlah17(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Mahasiswa S3 Perempuan Aktif (2021)</label>
                                    <input 
                                        type="text"
                                        value={jumlah18}
                                        onChange={(e)=> setJumlah18(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa Perempuan Aktif di Tahun 2021</label>
                                    <input 
                                        type="text"
                                        value={jumlah19}
                                        onChange={(e)=> setJumlah19(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Total Peneliti (Jumlah peneliti yang melakukan penelitian kerjasama dengan peneliti AS dan masih tercatat pada tahun 2021)</label>
                                    <input 
                                        type="text"
                                        value={jumlah20}
                                        onChange={(e)=> setJumlah20(e.target.value)}></input>
                                </div>
                                
                                <div className="form__content__wrapper">
                                    <label>Jumlah Total Dosen</label>
                                    <input 
                                        type="text"
                                        value={jumlah21}
                                        onChange={(e)=> setJumlah21(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah dosen (pengajar) internasional/dosen asing</label>
                                    <input 
                                        type="text"
                                        value={jumlah22}
                                        onChange={(e)=> setJumlah22(e.target.value)}></input>
                                </div>

                                <div className="form__content__wrapper">
                                    <label>Jumlah Dosen Wanita</label>
                                    <input 
                                        type="text"
                                        value={jumlah23}
                                        onChange={(e)=> setJumlah23(e.target.value)}></input>
                                </div>

                                <button type="submit">Update</button>                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormFakultasEdit