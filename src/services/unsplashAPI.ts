import axios from "axios";

const BASE_URL: string = 'https://api.unsplash.com';

const unsplashAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'Bearer Client-ID laRIwUOSRHl_bIXY_D8uKwixAN3wyKM8RqTIN2Dqy-c'
    }
})

export const getPhotos = (params = {}) => unsplashAPI.get('/photos', {params})

