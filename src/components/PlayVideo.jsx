import React, { useEffect, useState } from 'react';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import share from '../assets/share.png';
import save from '../assets/save.png';
import { API_KEY, value_converter } from '../config';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import showMore from '../assets/show-more.png'



const PlayVideo = () => {
    const { videoId } = useParams();

    const [apiData, setApiData] = useState();
    const [channelData, setChannelData] = useState();
    const [commentData, setCommentData] = useState();
    const [showCompeleteDes, setShowCompeleteDes] = useState(false);


    const videoAPICall = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
        const responseData = await response.json();
        const items = responseData.items[0];
        const title = items?.snippet.title;
        const viewCount = items?.statistics.viewCount;
        const publishedAt = items?.snippet.publishedAt;
        const likes = items?.snippet.likeCount;
        const description = items?.snippet.description;
        const commentCount = items?.statistics.commentCount;
        const channelTitle = items?.snippet.channelTitle;
        const channelId = items?.snippet.channelId;


        const obj = {
            title: title,
            viewCount: value_converter(viewCount),
            publishedAt: moment(publishedAt).fromNow(),
            likes: value_converter(likes),
            description: description,
            commentCount: value_converter(commentCount),
            channelTitle: channelTitle,
            channelId: channelId
        }
        setApiData(obj);
    }

    const channelDataAPICall = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.channelId}&key=${API_KEY}`);
        const responseData = await response.json();
        const data = responseData.items[0];
        const channelImage = data?.snippet?.thumbnails?.default.url;
        const subscribers = data?.statistics?.subscriberCount
        console.log("data is :: ", responseData)
        const obj = {
            channelImage: channelImage,
            subscrbers: value_converter(subscribers),
        }
        setChannelData(obj);
    }

    const commentAPICall = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`)
        const responseData = await response.json();
        const data = responseData.items.map((item) => {
            const profileImage = item.snippet.topLevelComment.snippet.authorProfileImageUrl;
            const name = item.snippet.topLevelComment.snippet.authorDisplayName;
            const commentText = item.snippet.topLevelComment.snippet.textDisplay;
            const likes = item.snippet.topLevelComment.snippet.likeCount;
            const publishedAt = item.snippet.topLevelComment.snippet.publishedAt;
            const obj = {
                image: profileImage,
                name: name,
                commentText: commentText,
                likes: value_converter(likes),
                publishedAt: moment(publishedAt).fromNow()
            }
            return obj;
        })

        setCommentData(data);

    }

    useEffect(() => {
        videoAPICall()
    }, [videoId])

    useEffect(() => {
        channelDataAPICall();
        commentAPICall()
    }, [apiData])

    return (
        <div className='flex basis-2/3 flex-col md:basis-full '>
            {/* <video
                className=' w-full '
                src={Video1} controls autoPlay muted /> */}
            <iframe
                className='w-full h-[37vw] md:w-96 md:h-[50vw]'
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            <h3 className=' mt-2 font-semibold text-base '>{apiData?.title}</h3>
            <div className='flex items-center justify-between flex-wrap mt-2 text-sm text-[#5a5a5a] ' >  {/*playvideinfo*/}
                <p>{apiData?.viewCount} views &bull; {apiData?.publishedAt} </p>
                <div className=' flex items-center'>
                    <span className=' inline-flex items-center ml-5 md:ml-0 md:mr-4 md:mt-4' > <img className=' w-5 mr-2' src={like} alt='' />{apiData?.likes}</span>
                    <span className=' inline-flex items-center ml-5 md:ml-0 md:mr-4 md:mt-4'> <img className=' w-5 mr-2' src={dislike} alt='' /></span>
                    <span className=' inline-flex items-center ml-5 md:ml-0 md:mr-4 md:mt-4'> <img className=' w-5 mr-2' src={save} alt='' />Save</span>
                    <span className=' inline-flex items-center ml-5 md:ml-0 md:mr-4 md:mt-4'> <img className=' w-5 mr-2' src={share} alt='' />Share</span>

                </div>

            </div>
            <hr className=' h-[2px] bg-[#ccc] my-2' />
            <div className=' flex items-center mt-5'>
                <img className='w-10 rounded-full mr-4 ' src={channelData?.channelImage} alt='' />
                <div className=' flex-1 leading-5 '>
                    <p className=' text-black font-semibold text-lg '>{apiData?.channelTitle}</p>
                    <span className=' text-sm text-gray-600'>{channelData?.subscrbers} Subscribers</span>
                </div>
                {/* <button className=' bg-red-600 text-white py-2 px-8 rounded-md cursor-pointer ' > Subscribe</button> */}
            </div>
            <div className=' pl-14 my-4 mx-0 md:p-0'> {/* desc */}
                {!showCompeleteDes ?
                    <p className='text-sm mb-2 text-gray-600'>
                        {apiData?.description.slice(0, 250)}
                        <span
                            className=' cursor-pointer'
                            onClick={() => setShowCompeleteDes(true)}
                        >
                            ...
                        </span>
                    </p> :
                    <p className=' text-sm mb-2 text-gray-600'>{apiData?.description}</p>
                }
                <hr />
                <h4 className='text-sm text-gray-600 mt-4 font-semibold'>{apiData?.commentCount} Comments</h4>

                {commentData && commentData?.map((item, idx) => {
                    return (
                        <div key={idx} className=' flex items-start my-5 '>
                            <img className=' w-9 rounded-full mr-4' src={item?.image} alt='' />
                            <div>
                                <h3 className=' text-sm mb-1 '>{item?.name}
                                    <span className=' text-xs text-gray-600 font-medium ml-2'>{item?.publishedAt}</span>
                                </h3>
                                <p>{item.commentText}</p>
                                <div className=' flex items-center my-2 text-sm  '>
                                    <img className='w-5 mr-1 ' src={like} alt='' />
                                    <span className=' mr-5 text-gray-600'>{item?.likes}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default PlayVideo
