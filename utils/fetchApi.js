import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async(url) => {
    const { data } = await axios.get(url, {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key": "385a72c8e2mshb9b150fa57090a9p116e07jsn409763e6b175",
        },
    });
    return data;
};