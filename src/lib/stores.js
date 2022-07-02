import { readable } from "svelte/store";
import { getUser } from "$lib/services";


export const user = readable(null, (set) => {
    const userApiInterval = setInterval(() => {
        const currentUser = getUser();
        set(currentUser)
    }, 500);

    return () => clearInterval(userApiInterval)
});



