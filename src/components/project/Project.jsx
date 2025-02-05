import img2 from "../../assets/img2.webp";
import img1 from "../../assets/img1.webp";

export const Project = () => {
  return (
    <section className="container mx-auto py-36">
      <h1 className="font-bold text-5xl text-white mb-20">Project</h1>
      <div className="flex justify-around">
        <div>
            <img className="h-96" src={img1} width={540} alt="" />
            <p className="mt-2 font-semibold">MEMORY GAMEP</p>
        </div>
        <div>
            <img className="h-96" src={img2} width={540} alt="" />
            <p className="m-2 font-semibold">TODO WEB APP</p>
        </div>
      </div>
    </section>
  );
};
