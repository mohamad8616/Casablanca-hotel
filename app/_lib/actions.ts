'use server'

import { signIn, signOut } from "./auth"

export async function SignInAction() {
    return await signIn('google',{redirectTo:'https://casablanca-hotel.vercel.app/account'})
}
export async function signOutAction() {
    return await signOut({redirectTo:'/'})
}