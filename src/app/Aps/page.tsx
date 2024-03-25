import ApartamentosIndividuais from "../Componentes/Apartamentos/Apartamentos";

export default function Apartamentos() {
  return (
    <div className=" flex flex-col gap-10">
      <ApartamentosIndividuais
        desc="A construção do setor planejado Recanto dos Pássaros acelerou o crescimento de todo o entorno. A principal via da cidade foi reformada e ganhou um viaduto que, além de facilitar o acesso, atraiu mais comércios e comodidades.
          O setor é um sucesso de vendas em todas as etapas: Recanto das Araras, Recanto dos Sabiás e Recanto dos Canários, o condomínio de casas.
          O aconchego da casa com quintal conquistou a todos. Agora, lançamos a Etapa 2 do Recanto dos Canários, mais uma chance de você ter uma casa com a qualidade Direcional no Recanto das Emas.
          More com a estrutura do setor planejado, as facilidades de uma localização única e todo o aconchego e exclusividade de uma casa com quintal e vaga."
        foto="/Apartamento1/img1.png"
        nome="Recanto dos Canários"
        loc="Recanto das Emas"
      />
    </div>
  );
}
