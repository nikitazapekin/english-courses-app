
import $api from "../http";
import axios, { AxiosResponse } from 'axios';
 





export default class RatesService {
    static async CreateRate( tutor_id: number, rate: number, text: string ): Promise<AxiosResponse<any>> {
        return $api.post<any>('/rates/createRate', { tutor_id, rate, text });
    }
    static async GetRates( tutor_id: number): Promise<AxiosResponse<any>> {
        return $api.get<any>(`/rates/getRates?tutor_id=${tutor_id}`);
    }
   /*  static async GetRates( {data}:  ): Promise<AxiosResponse<PersonalResponse>> {
        return $api.put<any>('/personal/editUser', data);
    } */
}