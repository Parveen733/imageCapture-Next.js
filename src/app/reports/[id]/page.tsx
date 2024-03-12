"use client"
import React, { useState, useEffect, } from 'react';

import { useParams, useRouter } from 'next/navigation'
import { getReport } from '@/app/services/api';
const MyComponent = () => {
    const [imageUrl, setImageUrl] = useState("");
    const imgurl = process.env.ImgUrl;
    const { id } = useParams();
    const router = useRouter()
    // Fetch or capture image (replace with your logic)
    useEffect(() => {

        const fetchImage = async () => {
            const response = await getReport(Number(id));
            setImageUrl(imgurl + response.imageUrl);
        }
        fetchImage();
    }, []);

    return (
        <div>
            <br/><br/><br/>
            <div >
                <a onClick={()=>router.back()}>Back</a></div>
            <div>
                <br/><br/><br/>
                {imageUrl && <img src={imageUrl} alt="Captured Crop" />}
            </div></div>

    );
};

export default MyComponent;