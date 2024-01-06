import { useState } from "react";
import { BioContext, ViewContext, DiagnosisContext } from "./provider/index";
import Bio, { Gender } from "./model/bio";
import BioPage from "./page/Bio";
import SurveiPage from "./page/Survei";
import Diagnosis from "./model/diagnosis";
import DiagnosisPage from "./page/Diagnosis";
import SplashPage from "./page/Splash";

function App() {
  const [bio, setBio] = useState<Bio>({
    nama: "",
    umur: 0,
    gender: Gender.Male
  });
  const [diagnosis, setDiagnosis] = useState<Diagnosis>({ depresi: 0, kecemasan: 0, stress: 0 });
  const [view, setView] = useState("bio");

  return (
    <BioContext.Provider value={[bio, setBio]}>
      <ViewContext.Provider value={[view, setView]}>
        <DiagnosisContext.Provider value={[diagnosis, setDiagnosis]}>
          <SplashPage />
          <SwitchView view={view} />
        </DiagnosisContext.Provider>
      </ViewContext.Provider>
    </BioContext.Provider>
  )
}

function SwitchView(opt: { view: string }) {
  switch (opt.view) {
    case "bio":
      return <BioPage />
    case "soal":
      return <SurveiPage />
    case "diagnosis":
      return <DiagnosisPage />
    default:
      break;
  }
}

export default App
