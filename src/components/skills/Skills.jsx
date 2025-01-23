export const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JavaScript",
    },
    {
      id: 4,
      name: "React",
    },
    {
      id: 5,
      name: "Tailwind CSS",
    },
  ];

  return (
    <section className="container mx-auto pt-12">
      <ul className="flex justify-between flex-wrap gap-8">
        {skills.map(({ id, name }) => {
          return <li className="w-60 text-3xl text-slate-100 font-bold" key={id}>{name}</li>;
        })}
      </ul>
    </section>
  );
};
