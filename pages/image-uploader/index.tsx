import { Container } from '@/components/style/Container';
import useImageLoader from '@/hooks/useImageLoader';
import Image from 'next/image';
import React from 'react'
import { styled } from 'styled-components';

const ImageUploaderContainer = styled(Container)`
    align-items: center;
`


export default function ImageUploaderPage() {
    const {imageUrl, selectFile, uploadFileHandler } = useImageLoader();

    console.log(imageUrl);
  return (
    <>

    <ImageUploaderContainer>
        <p>업로드 할 사진을 선택해주세요</p>
        <input type="file" onChange={(e) => selectFile(e)} />
        
        <button onClick={uploadFileHandler}>이미지 업로드하기</button>
        {imageUrl && <Image width={500} height={500} src={imageUrl} alt="이미지"/>}
    </ImageUploaderContainer>
    </>
  )
}
