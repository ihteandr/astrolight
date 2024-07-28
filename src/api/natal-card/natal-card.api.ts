import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../urls";

export type NatalCardDataParams = {
    year: number,
    month: number,
    day: number,
    hour?: number,
    minute?: number,
    longitude: number,
    latitude: number,
    place: string
}

export function useNatalCardData (query: NatalCardDataParams) {
    return useQuery({
        queryKey: ['natal-card-data'],
        queryFn: () => {
            return axios.post(`${API_URL}/western/data`, query).then(res => res.data)
        }
    })
}