import { useContext } from "react";
import Videos from "../assets/video";
import { ViewContext } from "../provider";

export default function VideoPage() {
      const setView = useContext(ViewContext)[1];
      return (
            <main className="h-screen flex flex-col gap-4">
                  <section className="flex flex-col pt-8 px-8 gap-4">
                        {
                              Videos.map((video, index) => {
                                    return (
                                          <a href={video.url} target="_blank" rel="noreferrer" className="drop-shadow-xl bg-slate-50" key={index}>
                                                <img src={video.thumbnail} alt="video1" />
                                                <h2 className="p-2">{video.title}</h2>
                                          </a>
                                    )
                              })
                        }
                  </section>
                  <div className="sticky bottom-0 w-full bg-white flex justify-center items-center gap-4 p-8 pt-4">
                        <button className="button w-full" onClick={()=>setView("diagnosis")}>&laquo; Back</button>
                  </div>
            </main>
      )
}