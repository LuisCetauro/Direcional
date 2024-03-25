export default function MarqueSuaVisita() {
  return (
    <div className=" mt-40 flex flex-col justify-center items-center">
      <form className="flex flex-col justify-center items-center w-4/5 border-4 border-red-500  p-6 gap-4 rounded-2xl">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Contato" />
        <input type="text" placeholder="Apartamento desejado" />
        <input
          type="submit"
          className="border-4 border-blue-500 p-3 rounded-2xl"
        />
      </form>
    </div>
  );
}
