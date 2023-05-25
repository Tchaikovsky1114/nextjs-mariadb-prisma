import { httpRequest, imageRequest, imageUrlRequest } from '@/lib/httpRequest';
import { httpMethod } from '@/types/httpMethod';
import React, { useCallback, useState } from 'react'

const S3_URL = 'https://kmsstorage.s3.ap-northeast-2.amazonaws.com/'

export default function useImageLoader() {
	const [file, setFile] = useState<File | null>(null);
	const [imageUrl,setImageUrl] = useState<string | null>(null);
	
	const selectFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if(!files) return;
		setFile(files[0])
	},[])

	const generateImageUrl = useCallback( async () => {
      return await(
        await imageRequest(httpMethod.POST,{name: file!.name, type: file!.type})('이미지 업로드에 실패하였습니다.')()).json()
	},[file])

	const uploadFileToS3 = useCallback(async (url: string) => {
    await httpRequest(url)(httpMethod.PUT, file)('S3 파일 업로드 과정에 문제가 발생하였습니다.')(file!.type);
	},[file])

	const uploadFileHandler = useCallback(async() => {
		if(!file) return;
    try {
      const data = await generateImageUrl();
			await uploadFileToS3(data.url)
      setImageUrl(S3_URL + file!.name);
      setFile(null);
    } catch (error) {
      alert(error);
    }
	},[file,generateImageUrl,uploadFileToS3])

	const postImageUrlToDB = useCallback(async () => {
		if(!imageUrl) return;
    try {
      const data = await (await imageUrlRequest(httpMethod.POST,{url:imageUrl})('이미지 URL 업로드에 실패하였습니다.')()).json();
      alert(data.message);
    } catch (error) {
      alert(error);
    }
	},[imageUrl])
	
  return {
    imageUrl,
    file,
    selectFile,
    uploadFileHandler,
    postImageUrlToDB
    }
}
