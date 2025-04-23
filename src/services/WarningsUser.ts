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
/*
{
    "success": true,
    "warnings": [
        {
            "user_id": 15,
            "username": "admin",
            "email": "admin@example.com",
            "role": "admin",
            "warning_id": 1,
            "warning_text": "prpgprge"
        }
    ]
}
    */
export interface IsAdminResponse {
    message: string,
    isAdmin: boolean
}
export default class WarningsUserService {
    static async GetWarnings(): Promise<AxiosResponse<AdminResponse>> {
        return $api.get<AdminResponse>('/warningsuser/getWarnings')
    }

    /*
           {
                "user_id": 15,
                "username": "admin",
                "email": "admin@example.com",
                "role": "admin",
                "warning_id": 1,
                "warning_text": "prpgprge"
            }
                */

    /*   static async UpdateWarning(idBan: string, text: string): Promise<AxiosResponse<IsAdminResponse>> {
          return $api.put<IsAdminResponse>('/warnings/updateWarning', { idWarning: idBan, text: text })
      }
      static async DeleteWarning(idBan: string): Promise<AxiosResponse<IsAdminResponse>> {
          return $api.post<IsAdminResponse>('/warnings/deleteWarning', { idWarning: idBan, })
      }
      static async DeleteWarnings(idCourse: string,): Promise<AxiosResponse<IsAdminResponse>> {
          return $api.post<IsAdminResponse>('/warnings/deleteWarnings', { idCourse: idCourse })
      }
  
      static async AddUserWarnings(warningText: string, userId: number): Promise<AxiosResponse<IsAdminResponse>> {
          return $api.post<IsAdminResponse>('/warnings/addUserWarnings', {warningText, userId })
      } */


}