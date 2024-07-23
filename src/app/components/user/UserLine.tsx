import { User } from "@/core/model/User";
import Image from "next/image";

export interface UserLineProps {
  user: User;
}

export default function UserLine(props: UserLineProps) {
  return (
    <div className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md">
      <Image
        src="https://img.freepik.com/vetores-premium/icone-de-simbolo-de-sombra-de-perfil-de-usuario-isolado-ilustracao-vetorial_34480-596.jpg?w=740"
        width={80}
        height={80}
        className="rounded-full"
        alt="Avatar"
      />

      <div className="flex flex-col">
        <span className="text-xl font-black">{props.user.name}</span>
        <span className="text-sm text-zinc-400">{props.user.email}</span>
      </div>
    </div>
  );
}
