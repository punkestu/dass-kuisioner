import { useContext } from "react"
import { BioContext, DiagnosisContext, ViewContext } from "../provider"
import { Gender } from "../model/bio";

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
            <main className="h-screen p-4 flex flex-col gap-4">
                  <h1 className="text-center font-bold text-xl">Hasil Tes</h1>
                  <table className="w-full">
                        <tr>
                              <td className="w-1/2 border text-start p-1 capitalize">Nama</td>
                              <td className="border text-center p-1 capitalize">{bio.nama}</td>
                        </tr>
                        <tr>
                              <td className="border text-start p-1 capitalize">Umur</td>
                              <td className="border text-center p-1 capitalize">{bio.umur} tahun</td>
                        </tr>
                        <tr>
                              <td className="border text-start p-1 capitalize">Jenis Kelamin</td>
                              <td className="border text-center p-1 capitalize">{bio.gender === Gender.Male ? "Laki-laki" : "Perempuan"}</td>
                        </tr>
                  </table>
                  <table className="w-full">
                        <tr>
                              <th className="border text-start p-1 capitalize">Kondisi</th>
                              <th className="border text-center p-1 capitalize">Klasifikasi</th>
                        </tr>
                        <tr>
                              <td className="border text-start p-1 capitalize">Depresi</td>
                              <td className="border text-center p-1 capitalize">{KlasifikasiDepresi(diagnosis.depresi)}</td>
                        </tr>
                        <tr>
                              <td className="border text-start p-1 capitalize">Kecemasan</td>
                              <td className="border text-center p-1 capitalize">{KlasifikasiKecemasan(diagnosis.kecemasan)}</td>
                        </tr>
                        <tr>
                              <td className="border text-start p-1 capitalize">Stress</td>
                              <td className="border text-center p-1 capitalize">{KlasifikasiStress(diagnosis.stress)}</td>
                        </tr>
                  </table>
                  <table className="w-full">
                        <tr className="border text-center">
                              <th>
                                    Depresi
                              </th>
                        </tr>
                        <tr className="border text-center">
                              <td className="p-1">
                                    {Intervensi(KlasifikasiDepresi(diagnosis.depresi))}
                              </td>
                        </tr>
                        <tr className="border text-center">
                              <th>
                                    Kecemasan
                              </th>
                        </tr>
                        <tr className="border text-center">
                              <td className="p-1">
                                    {Intervensi(KlasifikasiKecemasan(diagnosis.kecemasan))}
                              </td>
                        </tr>
                        <tr className="border text-center">
                              <th>
                                    Stress
                              </th>
                        </tr>
                        <tr className="border text-center">
                              <td className="p-1">
                                    {Intervensi(KlasifikasiStress(diagnosis.stress))}
                              </td>
                        </tr>
                  </table>
                  <button type="button" className="button" onClick={tesUlang}>Tes ulang &raquo;</button>
            </main>
      )
}