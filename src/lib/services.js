import supabase from "./supabase"

export function getUser() {
    return supabase.auth.user()
}

export async function signIn({ email }) {
    // this also returns a user and a session but because for this project we are only using magic email the user and session are created when  the magic link is clicked
    const { error } = await supabase.auth
        .signIn({ email })
    return { data: !error, error }
}

export async function signout() {
    const { error } = await supabase.auth
        .signOut()
    return { data: !error, error }

}


