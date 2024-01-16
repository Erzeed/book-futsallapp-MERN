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

    return{
        Register
    }
})()

export default api;