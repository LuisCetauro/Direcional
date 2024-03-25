import Image from "next/image";
import Link from "next/link";

interface Props {
  foto: string;
  desc: string;
  nome: string;
  loc: string;
}

export default function ApartamentosIndividuais(props: Props) {
  // pegar apartamentos

  return (
    <div className="border-4 border-red-500 rounded-xl mt-2 flex flex-col gap-4 justify-center items-center p-2">
      <p>{props.nome}</p>
      <div className="relative w-60 h-36 ">
        <Image alt="" src={props.foto} fill className="rounded-2xl" />
      </div>
      <p className="text-sm">{props.desc}</p>
      <p>Localização:{props.loc}</p>
      <Link href="/Aps/1">Conheça</Link>
    </div>
  );
}
