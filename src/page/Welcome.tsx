import { useContext } from "react";
import { ViewContext } from "../provider";
import Illustration1 from "../assets/components/ilus1.svg";

export default function WelcomePage() {
      const setView = useContext(ViewContext)[1];
      return (
            <main className="flex flex-col justify-between p-8 w-screen h-screen bg-blue">
                  <section className="flex-grow flex flex-col justify-center items-center gap-4">
                        <section className="text-white">
                              <h1 className="text-center font-bold text-2xl">Selamat datang di <span>RULESS</span></h1>
                              <p className="text-center">Di sini kamu bisa mengisi kuisioner untuk mendeteksi kesehatan mentalmu</p>
                        </section>
                        <img src={Illustration1} alt="illustration 1" />
                  </section>
                  <button className="button" onClick={() => setView("bio")}>Mulai &raquo;</button>
            </main>
      );
}