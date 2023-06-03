
import Head from 'next/head'
import React, { useEffect } from 'react'
import { Map,MapMarker } from 'react-kakao-maps-sdk'
import { styled } from 'styled-components'



export default function BusanPage(props) {

  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;

    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
    document.head.appendChild(mapScript);
  },[])
  return (
    <html>
    <Head>
      <meta charSet='utf-8' />
      <title>Busan 7 Beach</title>
    </Head>
    <body>
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
	
    </body>
    </html>
  )
}
