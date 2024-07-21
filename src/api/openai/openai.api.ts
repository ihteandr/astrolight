import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../urls";

export type OpenaiDataParams = {
    question: string
}

export function useOpenaiAspectQuestion () {
    return useMutation({
        mutationKey: ['openai-question'],
        mutationFn: (data: OpenaiDataParams) => {
            return axios.post(`${API_URL}/openai/aspect/description`, data)
                .then(res => res.data)
        }
    })
}