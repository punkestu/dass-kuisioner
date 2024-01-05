import { createContext } from "react";
import Bio, { Gender } from "../model/bio";
import Diagnosis from "../model/diagnosis";

export const BioContext = createContext<
  [Bio, React.Dispatch<React.SetStateAction<Bio>>]
>([
  {
    nama: "",
    umur: 0,
    gender: Gender.Male,
  },
  () => {},
]);

export const DiagnosisContext = createContext<
  [Diagnosis, React.Dispatch<React.SetStateAction<Diagnosis>>]
>([{ depresi: 0, kecemasan: 0, stress: 0 }, () => {}]);

export const ViewContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);
