import { useContext } from "react"
import { BioContext, DiagnosisContext, ViewContext } from "../provider"
import { Gender } from "../model/bio";
import bg3 from "../assets/components/bg3.svg";
import Illustration2 from "../assets/components/ilus2.svg";
import Slider from "../components/Slider";

function KlasifikasiDepresi(level: number) {
      if (level <= 4) {
            return "normal";
      } else if (level <= 6) {
            return "ringan";
      } else if (level <= 10) {
            return "sedang";
      } else if (level <= 13) {
            return "berat";
      } else {
            return "sangat berat";
      }
}

function KlasifikasiKecemasan(level: number) {
      if (level <= 3) {
            return "normal";
      } else if (level <= 5) {
            return "ringan";
      } else if (level <= 7) {
            return "sedang";
      } else if (level <= 9) {
            return "berat";
      } else {
            return "sangat berat";
      }
}

function KlasifikasiStress(level: number) {
      if (level <= 7) {
            return "normal";
      } else if (level <= 9) {
            return "ringan";
      } else if (level <= 12) {
            return "sedang";
      } else if (level <= 16) {
            return "berat";
      } else {
            return "sangat berat";
      }
}

function Intervensi(skala: string) {
      switch (skala) {
            case "normal":
                  return "Tidak ada intervensi";
            case "ringan":
                  return "Melakukan teknik relaksasi dan pernafasan, mengungkapkan keluh kesah kepada orang terdekat, olahraga secara rutin, melakukan meditasi";
            case "sedang":
                  return "Datang kepada bantuan professional untuk pencegahan berupa konseling";
            case "berat":
                  return "Memerlukan bantuan professional berupa konseling dan terapi obat dari dokter psikiater";
            case "sangat berat":
                  return "Memerlukan bantuan professional berupa konseling, terapi obat dari psikiater dan kemungkinan untuk rawat inap";
            default:
                  return "";
      }
}

export default function DiagnosisPage() {
      const setView = useContext(ViewContext)[1];
      const [diagnosis, setDiagnosis] = useContext(DiagnosisContext);
      const [bio, setBio] = useContext(BioContext);

      const tesUlang = () => {
            setDiagnosis({
                  depresi: 0,
                  kecemasan: 0,
                  stress: 0
            });
            setBio({
                  nama: "",
                  umur: 0,
                  gender: Gender.Male
            });
            setView("bio");
      }
      return (
            <main>
                  <img src={bg3} alt="background 3" className="absolute left-0 w-screen h-screen bottom-0 object-cover z-0" />
                  <section className="min-h-screen p-8 flex flex-col items-center gap-4">
                        <img src={Illustration2} alt="illustration 2" className="w-1/2 z-10" />
                        <div className="flex flex-col items-center gap-1 z-10">
                              <h1 className="font-semibold text-xl">{bio.nama}</h1>
                              <h2>{bio.umur} Tahun</h2>
                              <h2>{bio.gender === Gender.Male ? "Laki-laki" : "Perempuan"}</h2>
                        </div>
                        <div className="flex flex-col items-center gap-1 z-10">
                              <div className="flex flex-col items-center">
                                    <h1 className="font-semibold">Depresi ({KlasifikasiDepresi(diagnosis.depresi)})</h1>
                                    <p className="text-center">{Intervensi(KlasifikasiDepresi(diagnosis.depresi))}</p>
                              </div>
                              <div className="flex flex-col items-center">
                                    <h1 className="font-semibold">Kecemasan ({KlasifikasiKecemasan(diagnosis.kecemasan)})</h1>
                                    <p className="text-center">{Intervensi(KlasifikasiKecemasan(diagnosis.kecemasan))}</p>
                              </div>
                              <div className="flex flex-col items-center">
                                    <h1 className="font-semibold">Stress ({KlasifikasiStress(diagnosis.stress)})</h1>
                                    <p className="text-center">{Intervensi(KlasifikasiStress(diagnosis.stress))}</p>
                              </div>
                        </div>
                  </section>
                  <Slider>
                        <button type="button" className="button" onClick={tesUlang}>Tes ulang</button>
                        <button type="button" className="button" onClick={() => setView("video")}>Lihat rekomendasi video</button>
                  </Slider>
            </main>
      )
}