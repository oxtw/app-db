"use server";

import { User } from "@/core/model/User";
import Id from "@/core/utils/Id";
import UserRepository from "./UserRepository";

export default async function userSave(user: User) {
    const newUser = { 
        ...user, 
        id: user.id ?? Id.novo 
    };

    UserRepository.save(newUser);
}
