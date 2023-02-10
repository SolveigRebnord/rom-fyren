import {createClient} from '@supabase/supabase-js'

// make connection with supabase
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
)

async function signupUser(email, password) {
    let {data, error} = await supabase.auth.signUp({ //{ noe } er desctruction. Så vi får ut enten data, eller error. kan kalle det det vi vil
        email: email,
        password: password
    })
    if (error) {
        return error
    } else {
        return data;
    }
}

export {signupUser}
