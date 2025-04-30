
import $api from "../http";
import axios, { AxiosResponse } from 'axios';

interface Props {
    message: string
    rates:
    {
        id: number,
        tutor_id: number,
        author_id: number,
        rate: string,
        text: string,
        created_at: string,
        author_username: string,
        author_email: string,
        author_description: string,
        author_avatar_path: string,
        author_avatar: string


    }[]

}

interface Medium {
    message: string,
    rates: {
        average: number,
        count: number
    }
}


export default class RatesService {
    static async CreateRate(tutor_id: number, rate: number, text: string): Promise<AxiosResponse<any>> {
        return $api.post<any>('/rates/createRate', { tutor_id, rate, text });
    }
    static async GetRates(tutor_id: number): Promise<AxiosResponse<Props>> {
        return $api.get<Props>(`/rates/getRates?tutor_id=${tutor_id}`);
    }

    static async GetMediumRates(tutor_id: number): Promise<AxiosResponse<Medium>> {
        return $api.get<Medium>(`/rates/getMediumRate?tutor_id=${tutor_id}`);
    }

}