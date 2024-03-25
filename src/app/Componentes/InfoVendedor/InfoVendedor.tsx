import Image from "next/image";

export default function InfosDoVendedor() {
  //pegar info do vendedor

  const VendedorMockUp = {
    nome: "Luis Cetauro",
    desc: "Olá, estou tentando engressar como o mais novo colaborador da Direcional Vendas e aqui está uma breve demonstração do que eu posso trazer para o time de Brasília.",
    foto: "/eu2.png",
  };

  return (
    <div className="flex flex-col justify-center items-center w-3/5 ml-20 mt-12 gap-4">
      <div className="relative w-40 h-40">
        <Image fill src={VendedorMockUp.foto} alt="Um homem vestido de terno" />
      </div>
      <p>{VendedorMockUp.nome}</p>
      <p>{VendedorMockUp.desc}</p>
    </div>
  );
}
