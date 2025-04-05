'use server'

import { signIn, signOut } from "./auth"

export async function SignInAction() {
    return await signIn('google',{redirectTo:'/account'})
}
export async function signOutAction() {
    return await signOut({redirectTo:'/'})
}
