'use client'

import Page from "@/app/components/template/page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import users from "@/app/data/constants/users";
import { User } from "@prisma/client";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Pagina() {
    const [user, setUser] = useState<User>(users[0])

  return (
    <Page className="flex flex-col gap-10">
      <Title
        icon={IconUser}
        primary="Usuários"
        secondary="Cadastro de Usuários"
      />
      {/* <UserList/> */}
      <UserForm 
        user={user}
        onChange={setUser}
        save={}
        cancel={() => {}}
        
      />

    </Page>
  );
}
