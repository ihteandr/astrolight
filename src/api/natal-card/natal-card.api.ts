import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../urls";

export type NatalCardDataParams = {
    year: number,
    month: number,
    day: number,
    hour?: number,
    minute?: number,
    longitude: number,
    latitude: number
}

export function useNatalCardData () {
    return useMutation({
        mutationKey: ['natal-card-data'],
        mutationFn: (data: NatalCardDataParams) => {
            return axios.post(`${API_URL}/western/data`, data).then(res => res.data)
        }
    })
}