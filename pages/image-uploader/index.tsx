import Button from '@/components/style/Button';
import { Container } from '@/components/style/Container';
import useImageLoader from '@/hooks/useImageLoader';
import Image from 'next/image';
import React from 'react'
import { styled } from 'styled-components';

const ImageUploaderContainer = styled(Container)`
    align-items: center;
`
const ImageUploadInputBox = styled.div`
    display: flex;
    padding: 1rem;
    border: 1px solid #fff;
    background-color: #aaa;
    border-radius: 0.75rem;
`

export default function ImageUploaderPage() {
    const {imageUrl, selectFile, uploadFileHandler } = useImageLoader();

    console.log(imageUrl);
  return (
    <>

    <ImageUploaderContainer>
        <p>업로드 할 사진을 선택해주세요</p>
        <ImageUploadInputBox>
        <input type="file" onChange={(e) => selectFile(e)} />
        </ImageUploadInputBox>
        <Button onClick={uploadFileHandler}>이미지 S3 업로드</Button>
        {imageUrl && <Image width={500} height={500} src={imageUrl} alt="이미지"/>}

        <Button onClick={() => {}}>이미지 DB에 저장 </Button>
    </ImageUploaderContainer>
    </>
  )
}
