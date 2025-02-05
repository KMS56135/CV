export const About = () => {
  const person = [
    {
      address: "Russia, SPB",
      phone: "89111526190",
      email: "yaroslav@gmail.com",
      dateOfBirth: "24.03.2003",
      launguages: ["Russian", "English"],
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-white font-bold text-6xl mb-10">
        Nice to meet you!
        <br />
        I’m <span className="underline underline-offset-8 decoration-4 decoration-emerald-400">Yaroslav Dudar</span>.
      </h1>
      <div>
        <ul className="flex flex-col gap-3">
          {person.map(({ address, phone, email, dateOfBirth, launguages }, index) => {
            return (
              <>
                <li
                  key={index}
                  className="text-xl font-medium flex items-center gap-2 text-slate-300"
                >
                  <span className="font-bold">Address:</span>
                  <span className="">{address}</span>
                </li>
                <li
                  key={index}
                  className="text-xl font-medium flex items-center gap-2 text-slate-300"
                >
                  <span className="font-bold">Phone:</span>
                  <span>{phone}</span>
                </li>
                <li
                  key={index}
                  className="text-xl font-medium flex items-center gap-2 text-slate-300"
                >
                  <span className="font-bold">Email:</span>
                  <span>{email}</span>
                </li>
                <li
                  key={index}
                  className="text-xl font-medium flex items-center gap-2 text-slate-300"
                >
                  <span className="font-bold">Date of birth:</span>
                  <span>{dateOfBirth}</span>
                </li>
                <li
                  key={index}
                  className="text-xl font-medium flex items-center gap-2 text-slate-300"
                >
                  <span className="font-bold ">Launguages:</span>
                  <span>{launguages.map((item) => item).join(", ")}</span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
