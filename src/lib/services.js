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

export async function createPost({ content, user }) {
    const { data, error } = await supabase
        .from('posts')
        .insert({ content, user })
    return { data, error }
}

export async function createLike({ post, user }) {
    const { data, error } = await supabase.from('likes').insert({
        post, user
    })
    return { data, error }
}

export async function createComment({ post, user, content }) {
    const { data, error } = await supabase.from('comment').insert({
        post, user, content
    })
    return { data, error }
}

export async function getAllPosts() {
    let { data, error } = await supabase.from('posts').select().order('created_at', { ascending: false }).limit(3)
    if (error) return { data, error }

    data = await Promise.all(data.map(async (post) => {
        const [{ count: likes }, { data: comments, error }, /*{publicURL}*/] = await Promise.all([
            await supabase.from('likes')
                .select('id', { count: 'estimated', head: true })
                .eq('post', post.id),
            await supabase
                .from('comments')
                .select()
                .eq('post', post.id)
        ])
        return { ...post, likes, comments }
    }))
    return { data, error }
}

export async function getPost(id) {
    const { data, error } = await supabase.from('posts').select().eq("id", parseInt(id))
    return { data, error }
}