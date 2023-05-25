import { httpMethod } from "@/types/httpMethod";
import { mutate } from "swr";

export const httpRequest = (url: string) => (method: httpMethod = httpMethod.GET,bodyObject: any = {}) => (errorMessage: string = '요청이 실패하였습니다') => async (contentType: string = 'application/json') => {
    try {
        await fetch(url, {
            method,
            headers: {
              'Content-Type': `${contentType}`
            },
            body: JSON.stringify(bodyObject)
          });
        mutate(url);
          return true;
    } catch (error) {
        throw Error(errorMessage)
    }
  }

export const todoRequest = httpRequest('/api/todos');


