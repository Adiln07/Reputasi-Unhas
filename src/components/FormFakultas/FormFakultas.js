import React from "react"
import "../../style/components/FormFakultas/FormFakultas.css"

const FormFakultas = () =>  {
    return(
        <div className="wrapper">
            <div className="form__title">
                <h1>Form Input Fakultas</h1>
            </div>
            <div className="form__wrapper">
                <div className="form">
                    <div className="form__subtitle">
                        <h3>Form Pendapatan Fakultas</h3>
                    </div>
                    <div className="form__content">
                        <form>
                            <div className="form__content__wrapper">
                                <label>Total Pendapatan (Dalam Rupiah)</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Total Pendapatan Penelitian (Dalam Rupiah)</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Total Pendapatan dari Industri dan Komersial (Dalam Rupiah)</label>
                                <input type="text"></input>
                            </div>

                            <button>Submit</button>                            
                        </form>
                    </div>
                </div>

                <div className="form">
                    <div className="form__subtitle">
                        <h3>Form Data Fakultas</h3>
                    </div>
                    <div className="form__content">
                        <form>
                            <div className="form__content__wrapper">
                                <label>Jumlah S3 (Doktor) yang lulus di tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah S2 (Magister) yang lulus di tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah S1 (Sarjana) yang lulus di tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa lulus di tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa S1 Internasional aktif (2021)</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa S2 Internasional aktif (2021)</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa S3 Internasional aktif (2021)</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa Internasional aktif di tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa Aktif S1 (Sarjana) di Tahun 2021</label>
                                <input type="text"></input>
                            </div>
                            
                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa Aktif S2 (Master) di Tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa Aktif S3 (Doktor) di Tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa Aktif di Tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa S1 Perempuan Aktif (2021)</label>
                                <input type="text"></input>
                            </div>
                            
                            <div className="form__content__wrapper">
                                <label>JJumlah Mahasiswa S2 Perempuan Aktif (2021)</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Mahasiswa S3 Perempuan Aktif (2021)</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label className="form__content__wrapper-bold">Jumlah Total Mahasiswa Perempuan Aktif di Tahun 2021</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Total Peneliti (Jumlah peneliti yang melakukan penelitian kerjasama dengan peneliti AS dan masih tercatat pada tahun 2021)</label>
                                <input type="text"></input>
                            </div>
                            
                            <div className="form__content__wrapper">
                                <label>Jumlah Total Dosen</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah dosen (pengajar) internasional/dosen asing</label>
                                <input type="text"></input>
                            </div>

                            <div className="form__content__wrapper">
                                <label>Jumlah Dosen Wanita</label>
                                <input type="text"></input>
                            </div>

                            <button>Submit</button>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormFakultas