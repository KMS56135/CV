export const Form = () => {
  return (
    <>
      <form className="flex flex-col w-[445px]">
        <div className="border-b-2 border-white">
            <label htmlFor="name"></label>
            <input className="w-full bg-transparent p-5" type="text" id="name" name="name" placeholder="NAME" />
        </div>
        <div className="border-b-2 border-white">
            <label htmlFor="email"></label>
            <input className="w-full bg-transparent p-5" type="email" name="email" id="email" placeholder="EMAIL" />
        </div>
        <div className="border-b-2 border-white mb-[32px]">
            <label htmlFor="message"></label>
            <textarea className="w-full bg-transparent p-5" type="email" id="message" placeholder="Комментарий" required></textarea>
        </div>
        <button className="pb-5 font-bold w-[144px] text-[16px] border-b-2 border-emerald-400 self-end" type="button">SEND MESSAGE</button>
      </form>
    </>
  );
};
