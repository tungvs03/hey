
export default class HttpException{
    statusCode: number;
    status: boolean;
    message: string;
    

    constructor(statusCode: number, message: string){
        this.statusCode = statusCode;
        this.message = message;
        this.status = false;
    }
}