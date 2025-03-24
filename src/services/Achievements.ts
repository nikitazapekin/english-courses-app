import $api from "../http";
import axios, { AxiosResponse } from 'axios';
 
 
interface Achievement {
    logo: string,
    title: string,
    date: string 

}
export default class AchievementsService {

    static async createAchievement( data: Achievement  ): Promise<AxiosResponse<any>> {
        return $api.post<any>('/achievement/createAchievement', data)
    }
   
}