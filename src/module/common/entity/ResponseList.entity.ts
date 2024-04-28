export interface IResponseList<T> {
  data: T[];
  totalData: number;
}

export class ResponseList<T> implements IResponseList<T> {
  constructor(data: IResponseList<T>) {
    Object.assign(this, data);
  }
  data!: T[];
  totalData!: number;
}
