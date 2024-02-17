import { FormAddField } from "../components/form/addFieldForm/formField";
import { LoginType } from "../pages/login";
import { RegisterType } from "../pages/register";

export type searchParams = {
    name?: string,
    kota?: string,
    tipeLapangan?: string,
    lokasi?: string[],
    facility?: string[],
    minHarga?: string,
    maxHarga?: string
}

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

    async function getDataCourt() {
        const resp = await fetch(`${BASE_URL}/api`)

        if (!resp.ok) {
            throw new Error("Gagal memuat data");
        }
        const response = await resp.json()
        return response;
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

    async function addCourt(data: FormData) {
        const resp = await fetch(`${BASE_URL}/api/my-field`, {
            method: "POST",
            credentials: "include",
            body: data
        })

        if (!resp.ok) {
            throw new Error("error during uploud");
        }

        return resp.json();
    }

    async function getProfileCourt() {
        const resp = await fetch(`${BASE_URL}/api/my-field`, {
            credentials: "include",
        })

        if (!resp.ok) {
            throw new Error("Gagal memuat data");
        }
        const response = await resp.json()
        return response;
    }

    async function addFieldData(data: FormAddField) {
        let newData = data
        newData = {
            ...data,
            pricePerHours: Number(data.pricePerHours)
        }
        const resp = await fetch(`${BASE_URL}/api/type-field`, {
            method: "POST",
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })

        if (!resp.ok) {
            throw new Error("error during add data");
        }

        return resp.json();
    }

    async function updateFieldData(data: FormAddField, id: string) {
        let newData = data
        newData = {
            ...data,
            pricePerHours: Number(data.pricePerHours)
        }
        const resp = await fetch(`${BASE_URL}/api/type-field/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })

        if (!resp.ok) {
            throw new Error("error during update data");
        }

        return resp.json();
    }

    async function getDataField() {
        const resp = await fetch(`${BASE_URL}/api/type-field`, {
            credentials: "include",
        })

        if (!resp.ok) {
            throw new Error("Gagal memuat data");
        }
        const response = await resp.json()
        return response;
    }

    async function getDataFieldById(id: string) {
        const resp = await fetch(`${BASE_URL}/api/type-field/${id}`, {
            credentials: "include",
        })

        if (!resp.ok) {
            throw new Error("Gagal memuat data");
        }
        const response = await resp.json()
        return response;
    }

    async function deleteDataField(id: string) {
        const resp = await fetch(`${BASE_URL}/api/type-field/${id}`, {
            method: "DELETE",
            credentials: "include",
        })

        if (!resp.ok) {
            throw new Error("Gagal menghapus data");
        }
        const response = await resp.json()
        return response;
    }

    async function search(searchParams: searchParams) {
        const queryParams = new URLSearchParams();
        queryParams.append("name", searchParams.name || "")
        queryParams.append("kota", searchParams.kota || "")
        queryParams.append("minHarga", searchParams.minHarga || "")
        queryParams.append("maxHarga", searchParams.maxHarga || "")
        queryParams.append("tipeLapangan", searchParams.tipeLapangan || "")
        searchParams.facility?.forEach((facility) => {
            queryParams.append("facility", facility)
        })
        searchParams.lokasi?.forEach((lokasi) => {
            queryParams.append("lokasi", lokasi)
        })

        const resp = await fetch(`${BASE_URL}/api/search?${queryParams}`)
        if (!resp.ok) {
            throw new Error("Gagal memuat data");
        }
        const response = await resp.json()
        return response;
    }

    return{
        Register,
        validateToken,
        Login,
        SignOut,
        addCourt,
        getProfileCourt,
        addFieldData,
        getDataField,
        deleteDataField,
        getDataFieldById,
        updateFieldData,
        getDataCourt,
        search
    }
})()

export default api;