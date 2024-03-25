"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UmApartamento() {
  const [photoIndex, setPhotoIndex] = useState(1);
  const [photoSrc, setPhotoSrc] = useState(
    `/Apartamento1/img${photoIndex}.png`
  );

  const NextPhoto = () => {
    if (photoIndex != 6) {
      setPhotoIndex(photoIndex + 1);
      setPhotoSrc(`/Apartamento1/img${photoIndex}.png`);
    }
  };

  const PrevPhoto = () => {
    if (photoIndex != 1) {
      setPhotoIndex(photoIndex - 1);
      setPhotoSrc(`/Apartamento1/img${photoIndex - 1}.png`);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1>Recanto dos Canários</h1>
      <div className="border-4 border-red-500 rounded-2xl p-2">
        <div className="relative w-60 h-36">
          <Image alt="" src={photoSrc} fill className="rounded-2xl" />
        </div>
        <div className="flex flex-row gap-24 ml-1 mt-2">
          <button
            onClick={PrevPhoto}
            className="border-2 border-blue-500 rounded-2xl p-1"
          >
            Anterior
          </button>
          <button
            onClick={NextPhoto}
            className="border-2 border-blue-500 rounded-2xl p-1"
          >
            Próxima
          </button>
        </div>
      </div>
      <div className="border-4 border-red-500 rounded-2xl text-sm p-2">
        <p>
          A construção do setor planejado Recanto dos Pássaros acelerou o
          crescimento de todo o entorno. A principal via da cidade foi reformada
          e ganhou um viaduto que, além de facilitar o acesso, atraiu mais
          comércios e comodidades. O setor é um sucesso de vendas em todas as
          etapas: Recanto das Araras, Recanto dos Sabiás e Recanto dos Canários,
          o condomínio de casas. O aconchego da casa com quintal conquistou a
          todos. Agora, lançamos a Etapa 2 do Recanto dos Canários, mais uma
          chance de você ter uma casa com a qualidade Direcional no Recanto das
          Emas. More com a estrutura do setor planejado, as facilidades de uma
          localização única e todo o aconchego e exclusividade de uma casa com
          quintal e vaga.
        </p>
        <p>Quer dar uma olhada pessoalmente?</p>
        <div className="ml-20 mt-1">
          <Link href="/Visitas">Agende sua visita clicando aqui.</Link>
        </div>
      </div>
    </div>
  );
}
