import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row gap-10 bg-black h-14 text-white text-sm  border-red-500 border-b-8">
      <Link href="/">
        <div className="ml-3 mt-2">
          <p>Home</p>
        </div>
      </Link>

      <Link href="/Aps">
        <div className="mt-2">
          <p>Veja nossos Apartamentos</p>
        </div>
      </Link>

      <Link href="/Visitas">
        <div className="mt-2">
          <p>Marque sua visita</p>
        </div>
      </Link>
    </div>
  );
}
