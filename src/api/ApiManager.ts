import axios, { AxiosInstance } from "axios";

const PROD_BASE_URL = "";
const STAGE_BASE_URL = "https://427c-195-72-144-71.ngrok.io/";

//TODO MOVE TO ENV VARIABLES https://www.npmjs.com/package/react-native-dotenv
const USE_PROD = false;

export interface ApiRequestError {
  status: number;
  data: any;
}

class ApiManager {
  private static instance: ApiManager;
  private axiosInstance: AxiosInstance;
  private authToken: string | null = null;

  constructor() {
    this.axiosInstance = axios.create();
    this.axiosInstance.defaults.baseURL = USE_PROD
      ? PROD_BASE_URL
      : STAGE_BASE_URL;
    this.axiosInstance.interceptors.request.use(config => {
      config.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(this.authToken
          ? { Authorization: `Bearer ${this.authToken}` }
          : {}),
      };

      return config;
    });
  }

  public static getInstance(): ApiManager {
    if (!this.instance) {
      this.instance = new ApiManager();
    }

    return this.instance;
  }

  public setToken(token: string) {
    this.authToken = token;
  }

  public get = (endpoint: string, params?: any) => {
    return this.axiosInstance.get(endpoint, { params }).catch(error => {
      return Promise.reject<ApiRequestError>({
        status: error.response.status,
        data: error.response.data,
      });
    });
  };

  public post = (endpoint: string, data?: any) => {
    return this.axiosInstance.post(endpoint, data).catch(error => {
      return Promise.reject<ApiRequestError>({
        status: error.response.status,
        data: error.response.data,
      });
    });
  };

  public put = (endpoint: string, data: any) => {
    return this.axiosInstance.put(endpoint, data).catch(error => {
      return Promise.reject<ApiRequestError>({
        status: error.response.status,
        data: error.response.data,
      });
    });
  };

  public patch = (endpoint: string, data?: any) => {
    return this.axiosInstance.patch(endpoint, data).catch(error => {
      return Promise.reject<ApiRequestError>({
        status: error.response.status,
        data: error.response.data,
      });
    });
  };

  public delete = (endpoint: string, params?: any) => {
    return this.axiosInstance.delete(endpoint, { params }).catch(error => {
      return Promise.reject<ApiRequestError>({
        status: error.response.status,
        data: error.response.data,
      });
    });
  };
}

export default ApiManager;
