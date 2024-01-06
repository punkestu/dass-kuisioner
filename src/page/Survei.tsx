import Survei from "../model/survei";
import ListSoal from "../assets/soal.json";
import Kunci from "../assets/kunci.json";
import { useContext, useState } from "react";
import { DiagnosisContext, ViewContext } from "../provider";
import Swal from "../provider/swal";

function Jawaban(opt: { label: string, value: number, active: number, updateJawaban: (value: number) => void }) {
      return (
            <label className={`w-full p-2 border-2 bg-slate-100 ${opt.active === opt.value ? "border-blue-500" : "border-slate-100"}`} htmlFor={`jawaban${opt.value}`}>
                  <input className="hidden" type="radio" name="jawaban" id={`jawaban${opt.value}`} value={`${opt.value}`} onClick={() => {
                        opt.updateJawaban(opt.value);
                  }} />
                  {opt.label}
            </label>
      );
}

export default function SurveiPage() {
      const [diagnosis, setDiagnosis] = useContext(DiagnosisContext);
      const setView = useContext(ViewContext)[1];
      const [listSoal, setListSoal] = useState<Survei[]>(ListSoal.map(soal => ({ ...soal, jawaban: -1 })));
      const [nomor, setNomor] = useState(1);
      const [active, setActive] = useState(listSoal[nomor - 1].jawaban);

      const updateJawaban = (value: number) => {
            setActive(value);
            setListSoal(listSoal);
            const prevAns = listSoal[nomor - 1].jawaban;
            if (Kunci.depresi.includes(nomor)) {
                  if (prevAns > 0) diagnosis.depresi -= prevAns;
                  diagnosis.depresi += value;
            }
            if (Kunci.kecemasan.includes(nomor)) {
                  if (prevAns > 0) diagnosis.kecemasan -= prevAns;
                  diagnosis.kecemasan += value;
            }
            if (Kunci.stress.includes(nomor)) {
                  if (prevAns > 0) diagnosis.stress -= prevAns;
                  diagnosis.stress += value;
            }
            setDiagnosis(diagnosis);
            listSoal[nomor - 1].jawaban = value;
      }
      const next = () => {
            if (nomor < 21) {
                  setActive(listSoal[nomor].jawaban);
                  setNomor(nomor + 1);
            } else {
                  const finish = listSoal.reduce((acc, curr) => {
                        if (curr.jawaban < 0) {
                              return false;
                        }
                        return acc
                  }, true);
                  if (finish) {
                        Swal.fire({
                              icon: "info",
                              title: "Okey...",
                              text: "Anda yakin ingin melanjutkan?",
                              showCancelButton: true
                        }).then((result) => {
                              if (result.isConfirmed) {
                                    setView("diagnosis");
                              } else if (result.isDenied) {
                                    return;
                              }
                        });
                  } else {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Ada soal yang belum dijawab"
                        })
                  }
            }
      }
      const back = () => {
            setActive(listSoal[nomor - 2].jawaban);
            setNomor(nomor - 1);
      }

      return (
            <main className="h-screen flex flex-col p-4 justify-between overflow-y-scroll">
                  <h1 className="font-bold text-xl mb-2 self-end">{nomor}/21</h1>
                  <form className="flex flex-col">
                        <div>
                              <p className="font-medium mb-2 text-center">{listSoal[nomor - 1].soal}</p>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                              <Jawaban value={0} label="Tidak pernah" active={active} updateJawaban={updateJawaban} />
                              <Jawaban value={1} label="Kadang-kadang" active={active} updateJawaban={updateJawaban} />
                              <Jawaban value={2} label="Lumayan sering" active={active} updateJawaban={updateJawaban} />
                              <Jawaban value={3} label="Sering sekali" active={active} updateJawaban={updateJawaban} />
                        </div>
                  </form>
                  <div className="flex gap-2">
                        {
                              nomor > 1 && <button className="button flex-grow" type="button" onClick={back}>&laquo; Back</button>
                        }
                        <button className="button flex-grow" type="button" onClick={next}>{nomor < 21 ? "Next" : "Finish"} &raquo;</button>
                  </div>
            </main>
      );
}