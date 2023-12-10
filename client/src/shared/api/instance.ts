import axios, { AxiosError, AxiosRequestConfig } from "axios";


export const apiInstans = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const createInstance = async <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const res = await apiInstans({
    ...config, ...options
  });
  return res.data;
}
export type BodyType<Data> = Data
export type TypeError<Error> = AxiosError<Error>