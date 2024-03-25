import InfosDoVendedor from "./Componentes/InfoVendedor/InfoVendedor";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <div className="">
        <InfosDoVendedor />
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <p>Quer saber mais sobre a Direcional?</p>
        <a
          href="https://www.direcional.com.br/"
          className="border-4 border-blue-500  w-32 text-center rounded-2xl"
        >
          Clique Aqui
        </a>
      </div>
    </div>
  );
}
