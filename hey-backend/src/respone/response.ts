import HttpRespone from "../respone/http-respone";

export default class Response extends HttpRespone{

    public static CREATED_SUCCESS = (message = "Created success!", data = {}) => {
        return new HttpRespone(201, true, message, data);
    }


}