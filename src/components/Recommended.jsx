import React, { useEffect, useState } from 'react'
import thumbnail1 from '../assets/thumbnail1.png';
import thumbnail2 from '../assets/thumbnail2.png';
import thumbnail3 from '../assets/thumbnail3.png';
import { API_KEY, value_converter } from '../config';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {

    const [recommended, setRecommended] = useState([]);

    const recommendedApiCall = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`)
        const responseJSON = await response.json();
        const data = responseJSON.items.map((item) => {
            const snippet = item?.snippet;
            const image = snippet?.thumbnails.medium.url;
            const title = snippet.title;
            const channelTitle = snippet.channelTitle;
            const viewCount = item.statistics.viewCount;
            const categoryId = snippet.categoryId;
            const id = item.id;

            const obj = {
                id: id,
                image: image,
                title: title,
                channelTitle: channelTitle,
                viewCount: value_converter(viewCount),
                categoryId: categoryId,

            }
            return obj;
        })
        console.log("Data is :: ", data)
        setRecommended(data);
    }

    useEffect(() => {
        recommendedApiCall();
    }, [categoryId])

    return (
        <section className=' basis-1/3'>

            {recommended && recommended?.map((item, idx) => {
                return (
                    <Link to={`/video/${item?.categoryId}/${item?.id}`} key={idx} className=' flex justify-between mb-2 ml-2  '>
                        <img className=' basis-1/2 w-1/2 rounded-lg ' src={item?.image + ""} alt='' />
                        <div className=' basis-1/2 ml-2'>
                            <h4 className=' text-sm mb-1 font-semibold'> {item?.title}  </h4>
                            <p className=' text-gray-600 text-base font-normal '>{item?.channelTitle}</p>
                            <p className=' text-gray-600 text-base font-normal '>{item?.viewCount} views</p>
                        </div>
                    </Link>)
            })
            }

        </section>
    )
}

export default Recommended;
