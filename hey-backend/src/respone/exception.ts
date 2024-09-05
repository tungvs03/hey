import HttpException from "./http-exception";

export class Exception extends HttpException {
    public static ERR_BAD_REQUEST = (message: string = "ERR BAD REQUEST!") => {
        return new HttpException(400, message);
    }

    public static ERR_DATA_NOT_FOUND = () => {
        return new HttpException(404, "ERR DATA NOT FOUND!");
    }

    public static ERR_INTERNAL_SERVER = (message: string = "ERR INTERNAL SERVER!") => {
        return new HttpException(500, message);
    }

}