import Button from '@/components/style/Button';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`
interface Props {

}

export default function BusanPage(props) {
  const [mapCenter, setMapCenter] = useState({ lat: 35.1798, lng: 129.07503 });
  const [mapLevel, setMapLevel] = useState(3);
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
    document.head.appendChild(mapScript);
  }, []);

  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <title>Busan 7 Beach</title>
      </Head>

      <Container>
        <Map
          center={mapCenter}
          style={{ width: '50%', height: '50vh' }}
          level={mapLevel}
        ></Map>
        <ButtonGroup>
          <Button onClick={() => setMapCenter({lat: 33.452613,lng: 126.57088})}>
            지도 중심좌표 이동시키기
          </Button>
          <Button onClick={() => setMapCenter({ lat: 35.1798, lng: 129.07503 })}>
            지도 중심좌표 부드럽게 이동시키기
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => setMapLevel(prev => prev + 1)}>+</Button>
          <Button onClick={() => setMapLevel(prev => prev - 1)}>-</Button>
        </ButtonGroup>
      </Container>
    </html>
  );
}
