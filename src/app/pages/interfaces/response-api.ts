export interface ResponseBase<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface ResponseApi {
  success: boolean;
  data: any;
  message: string;
}
