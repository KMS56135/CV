import img2 from '../../assets/img2.webp'


export const Project = () => {
    return (
        <section className="container mx-auto py-36">
            <h1 className="font-bold text-5xl text-white mb-20">Project</h1>
            <div className="flex justify-around">
                <img src="/img1.webp" width={540} alt="" />
                <img src={img2} width={540} alt="" />
            </div>
        </section>
    );
};
