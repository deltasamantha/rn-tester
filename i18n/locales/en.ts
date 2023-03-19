const en = {
    auth: {
        signUp: "Sign Up",
        signIn: "Sign In",
        email: {
            placeholder: "Email",
            required: "Email is required",
            invalid: "Please enter valid email",
        },
        password: {
            placeholder: "Password",
            required: "Password is required",
            minLength: "Minimum password length must be 3",
        },
        reenterPassword: {
            placeholder: "Re-enter password",
            required: "Password is required",
            minLength: "Minimum password length must be 3",
        },
    },
}

export default en;

/**
 * English is "master", use this type in other language file to let
 * typescript linter/compiler throw errors if anything is missing
 */
export type AppLang = typeof en;