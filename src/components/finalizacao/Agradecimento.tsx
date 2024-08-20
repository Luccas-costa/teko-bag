import Image from "next/image";

export default function Agradecimento() {
    return (
        <div className="mx-auto h-full w-[70%] flex flex-col item-center justify-center">
            <div className="w-full flex items-center justify-center">
                <Image src="/logo-transparente.png" alt="logo-transparente" width={200} height={200} />
            </div>
            <div className="text-2xl text-neutral-700 text-center mt-12 mb-12">
                Muito Obrigado por escolher teko bag Um email foi enviado para o seu e-mail confirmando sua compra e <br />
                <span className='font-bold'>se vemos daqui a pouco!</span>
            </div>
        </div>
    );
}