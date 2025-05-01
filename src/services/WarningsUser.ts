import $api from "../http";
import axios, { AxiosResponse } from 'axios';
export interface AdminResponse {
  

        success: true,
        
        warnings: 
            {
                user_id: number,
                username:  string,
                email:  string,
                role: string,
                warning_id: number,
                warning_text:  string,
            }[]
        
}
 
export interface IsAdminResponse {
    message: string,
    isAdmin: boolean
}
export default class WarningsUserService {
    static async GetWarnings(): Promise<AxiosResponse<AdminResponse>> {
        return $api.get<AdminResponse>('/warningsuser/getWarnings')
    }
    static async GetUserWarnings(): Promise<AxiosResponse<AdminResponse>> {
        return $api.get<AdminResponse>('/warningsuser/getWarningUser')
    }

  //getUserWarnings

}