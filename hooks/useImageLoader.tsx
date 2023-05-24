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

	const uploadFileHandler = useCallback(async() => {
		if(!file) return;
		try {
			const response = await generateImageUrl();
			const data = await response.json();
			await uploadFileToS3(data.url);
			setImageUrl(S3_URL + file!.name);
			setFile(null);
		  } catch (error) {
				console.error(error);
		  }
	},[file])
	const generateImageUrl = useCallback( async () => {
		const response = await fetch('/api/image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name: file!.name, type: file!.type})
		  });
		  return response;
	},[file])
	const uploadFileToS3 = useCallback(async (url: string) => {
		await fetch(url, {
			method: 'PUT',
			headers:{
				"Content-Type": file!.type,
				"Access-Control-Allow-Origin": '*'
			},
			body: file
		})
	},[file])

	const postImageUrlToDB = useCallback(async () => {
		await fetch('/api/imagedb', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({imageUrl})
		});
	},[imageUrl])
	
  return {
	imageUrl,
	file,
	selectFile,
	uploadFileHandler,
	postImageUrlToDB
  }
}
