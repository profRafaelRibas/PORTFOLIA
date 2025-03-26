import Link from "next/link";
import Container from "./Container";
import Image from 'next/image';
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <header className="bg-black flex items-center h-16">
            <Container className="flex-1 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/logo.svg" alt="logo" width={80} height={0} />
                    </Link>
                    <Menu />
                </div>
                <div className="hidden sm:flex items-center">
                    <Link href="https://www.linkedin.com/in/rafaelribaslima/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 rounded-full px-7 text-sm font-bold py-2">
                        Perfil
                    </Link>
                </div>
           </Container>
        </header>
        )
}