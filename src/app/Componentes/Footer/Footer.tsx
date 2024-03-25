import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black  text-white h-12 fixed bottom-0 w-screen border-t-8 border-red-500 flex flex-row justify-center items-center ">
      <div className="relative w-20 h-10 ">
        <Image src="/logo.svg" alt="" fill />
      </div>
    </div>
  );
}
