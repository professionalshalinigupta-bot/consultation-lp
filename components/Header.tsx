import Image from "next/image";
export function Header() {
  return (
    <header className="relative z-10 flex h-24 items-center justify-center px-5">
      <Image
        src="/shalini-logo.png"
        alt="Shalini Gupta, AI Marketing Expert"
        width={360}
        height={86}
        priority
        className="h-auto w-[min(92vw,360px)]"
      />
    </header>
  );
}
