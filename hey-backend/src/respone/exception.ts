import HttpException from "./http-exception";

export class Exception extends HttpException {
    public static ERR_DATA_REQUIRED = () => {
        return new HttpException(400, "ERR DATA REQUIRED!");
    }

    public static ERR_DATA_INVALID = () => {
        return new HttpException(400, "ERR DATA INVALID!");
    }

    public static ERR_DATA_NOT_FOUND = () => {
        return new HttpException(404, "ERR DATA NOT FOUND!");
    }

    public static ERR_DATA_EXISTED = (message: string = "ERR DATA EXISTED!") => {
        return new HttpException(400, message);
    }

    public static ERR_DATA_NOT_MATCH = () => {
        return new HttpException(400, "ERR DATA NOT MATCH!");
    }

}