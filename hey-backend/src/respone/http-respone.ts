export default class HttpRespone {
  statusCode: number;
  status: boolean;
  message: string;
  results?: string;
  total?: number;
  data?: {} | {}[];

  constructor(statusCode: number, status: boolean, message: string, data?: any, total?: number, results?: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.status = status;

    if (results) {
      this.results = results;
    }
    if (total) {
      this.total = total;
    }
    if (data || Object.keys(data).length > 0) {
      this.data = data;
    }
  }

}
