import { useContext } from "react";
import { BioContext, ViewContext } from "../provider";
import { Gender } from "../model/bio";

export default function BioPage() {
      const [bio, setBio] = useContext(BioContext);
      const setView = useContext(ViewContext)[1];

      const changeNama = (nama: string) => {
            setBio({ ...bio, nama });
      }
      const changeUmur = (umur: string) => {
            const umurInt = parseInt(umur);
            if (!isNaN(umurInt)) {
                  setBio({ ...bio, umur: umurInt })
            } else {
                  setBio({ ...bio, umur: 0 })
            }
      }
      const nextView = () => {
            if (bio.nama.length > 0 && bio.umur > 0) {
                  setView("soal");
            }
      }
      return (
            <main className="h-screen flex flex-col items-center justify-center">
                  <form className="w-2/3 flex flex-col">
                        <h1 className="font-bold text-xl mb-4">Biodata</h1>
                        <label className="font-medium" htmlFor="nama">Nama</label>
                        <input className="input-box mb-2" name="nama" type="text" value={bio.nama} onChange={e => changeNama(e.target.value)} placeholder="Inputkan nama..." />
                        <label className="font-medium" htmlFor="umur">Umur</label>
                        <input className="input-box mb-2" name="umur" type="text" value={bio.umur <= 0 ? "" : bio.umur} onChange={e => changeUmur(e.target.value)} placeholder="Inputkan umur..." />
                        <label className="font-medium" htmlFor="gender">Jenis Kelamin</label>
                        <select className="input-box mb-2" name="gender" value={bio.gender === Gender.Male ? "male" : "female"} onChange={e => setBio({ ...bio, gender: e.target.value === "male" ? Gender.Male : Gender.Female })}>
                              <option value="male">Laki-laki</option>
                              <option value="female">Perempuan</option>
                        </select>
                        <button className="button" type="button" onClick={nextView}>Next</button>
                  </form>
            </main>
      )
}