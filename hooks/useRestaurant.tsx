import { httpRequest, restaurantRequest } from '@/lib/httpRequest';
import { httpMethod } from '@/types/httpMethod';
import { restaurant } from '@prisma/client';
import { useState } from 'react';

export default function useRestaurant() {
  const [rstr, setRstr] = useState([]);

  // 공공데이터 api 호출 후 상태 저장 
  // const getRestaurant = async(pageNumber: number) => {
  //   try {
  //     const res = await httpRequest(`/api/restaurant?pageNum=${pageNumber}`)(httpMethod.GET)()();
  //     const data = await res.json();
  //     console.log(data.body[0]);
  //     setRstr(data.body);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  // 공공데이터 개인 DB로 저장
  // const postRestaurant = async() => {
  //   try {
  //     const response = await restaurantRequest(httpMethod.POST,JSON.stringify(rstr))('레스토랑 저장에 실패하였습니다.')()
  //     const message = (await response.json()).message;
  //     alert(message);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }
  // return {getRestaurant, postRestaurant,rstr}
  
  return {}
}
