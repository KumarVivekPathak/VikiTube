import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../config';
import moment from 'moment';



const Feed = ({ category }) => {

    const [data, setData] = useState();
    const APICALL = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY} `)
        const responseJSON = await response.json();
        const items = responseJSON.items.map((item) => {
            const id = item.id;
            const categoryId = item.snippet.categoryId;
            const imageUrl = item.snippet.thumbnails.medium.url;
            const title = item.snippet.title;
            const channelTitle = item.snippet.channelTitle;
            const viewCount = item.statistics.viewCount;
            const publishedAt = item.snippet.publishedAt;

            const obj = {
                id: id,
                categoryId: categoryId,
                imageUrl: imageUrl,
                title: title,
                channelTitle: channelTitle,
                viewCount: value_converter(viewCount),
                publishedAt: moment(publishedAt).fromNow()
            }

            return obj;
        })
        setData(items);

    }

    useEffect(() => {
        APICALL();

    }, [category])

    return (
        <section className='grid grid-cols-auto-fit-minmax gap-x-4 gap-y-7 mt-4'>
            {data && data.map((item, index) => {
                return (
                    <Link key={index} to={`video/${item.categoryId}/${item.id}`}>
                        <img src={item.imageUrl} className=' rounded-md' />
                        <h2 className=' font-semibold text-black mx-1 '>{item.title}</h2>
                        <h3 className=' text-gray-700 text-base font-medium mx-1 '>{item.channelTitle}</h3>
                        <p className=' font-medium text-gray-400 text-sm'>{item.viewCount} views  &bull; {item.publishedAt}</p>
                    </Link>
                )
            })}


        </section>
    )
}

export default Feed;
