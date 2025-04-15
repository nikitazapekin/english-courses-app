
import $api from "../http";
import { AxiosResponse } from 'axios';

export default class MailService {
    static async SendMessage(
        email: string,
        firstName: string,
        secondName: string,
        message: string,
        author: string
    ): Promise<AxiosResponse> {
        return $api.post('/mail/sendMessage', { 
            email, 
            firstName, 
            secondName, 
            message, 
            author 
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
/* import $api from "../http";
import axios, { AxiosResponse } from 'axios';


export default class MailService {
    static async SendMessage(email: string,
        firstName: string,
        secondName: string,
        message: string,
        author: string,): Promise<AxiosResponse<any>> {
        return $api.post<any>('/mail/sendMessage', { email, firstName, secondName, message, author }, {
            headers: {
                'Content-Type': 'application/json' 
            }
        });
    }


} */