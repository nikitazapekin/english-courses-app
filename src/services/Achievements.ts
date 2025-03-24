import $api from "../http";
import axios, { AxiosResponse } from 'axios';
 
 
interface Achievement {
    logo: string,
    title: string,
    date: string 

}

interface Response {
 
        message: string,
        achievements: Achievement[]
   
}
export default class AchievementsService {

    static async createAchievement( data: Achievement  ): Promise<AxiosResponse<any>> {
        return $api.post<any>('/achievement/createAchievement', data)
    }
   


    static async getAchievement(   ): Promise<AxiosResponse<Response>> {
        return $api.get<Response>('/achievement/getAchievement')
    }
}