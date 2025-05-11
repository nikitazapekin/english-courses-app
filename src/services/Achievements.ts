import $api from "../http";
import axios, { AxiosResponse } from 'axios';
 
 
interface Achievement {
    logo: string,
    title: string,
    date: string 
    id?: number,
    currentTitle?: string

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
    static async updateAchievement(  data: Achievement ): Promise<AxiosResponse<Response>> {
        return $api.put<Response>('/achievement/editAchievement', data)
    }

    static async deleteAchievement( currentTitle: string): Promise<AxiosResponse<Response>> {
        return $api.post<Response>('/achievement/deleteAchievement',{currentTitle: currentTitle})
    }
}


/*
import $api from "../http";
import axios, { AxiosResponse } from 'axios';
 
export default class AchievementsService {
    static async createAchievement( data  ) {
        return $api.post('/achievement/createAchievement', data)
    }
   
   
}
    */