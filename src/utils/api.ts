import { LoginType } from "../pages/login";
import { RegisterType } from "../pages/register";

const api = (() => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    async function Register(data: RegisterType) {
        const resp = await fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const respJson = await resp.json()

        if (!resp.ok) {
            throw new Error(respJson.message);
          }
    }

    async function Login (data: LoginType) {
        const resp = await fetch(`${BASE_URL}/api/auth/login`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const respJson = await resp.json()

        if (!resp.ok) {
            throw new Error(respJson.message);
          }
    }

    async function validateToken() {
        const resp = await fetch(`${BASE_URL}/api/auth/verify-token`, {
            credentials: "include"
        })

        if (!resp.ok) {
            throw new Error("token invalid");
        }

        return resp.json()
    }

    async function SignOut() {
        const resp = await fetch(`${BASE_URL}/api/auth/logout`, {
            method: "POST",
            credentials: "include"
        })

        if (!resp.ok) {
            throw new Error("error during sign out");
        }
    }

    return{
        Register,
        validateToken,
        Login,
        SignOut
    }
})()

export default api;