import axios, { AxiosError, AxiosRequestConfig } from "axios";


export const apiInstans = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  return apiInstans({
    ...config, ...options
  }).then(res => res.data)
}
export type BodyType<Data> = Data
export type TypeError<Error> = AxiosError<Error>