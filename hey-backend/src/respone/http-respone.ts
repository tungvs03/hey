export default class HttpRespone {
  status: number;
  message: string;
  total?: number;
  data?: {} | {}[];

  constructor(status: number, message: string, data?: any, total?: number) {
    this.message = message;
    this.status = status;

    if (total) {
      this.total = total;
    }
    if (data) {
      this.data = data;
    }
  }

}
