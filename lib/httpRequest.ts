import { httpMethod } from "@/types/httpMethod";
import { mutate } from "swr";

export const httpRequest =
      (url: string) => 
      (method: httpMethod = httpMethod.GET,bodyObject: any = {}) =>
      (errorMessage: string = '요청이 실패하였습니다') =>
      async (contentType: string = 'application/json') => {
  try {
      const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': contentType,
            "Access-Control-Allow-Origin": '*',
          },
          body: method === httpMethod.GET ? null : bodyObject
        });

      if(url.startsWith('/api')){
        mutate(url);
      }
        return response;
  } catch (error) {
    console.log(error);
      throw Error(errorMessage)
  }
}

export const todoRequest = httpRequest('/api/todos');
export const imageRequest = httpRequest('/api/image');
export const imageUrlRequest = httpRequest('/api/imagedb');
export const markerRequest = httpRequest('/api/markers');
export const restaurantRequest = httpRequest('/api/restaurant');

