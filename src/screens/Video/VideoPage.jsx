import React from 'react';

import PlayVideo from '../../components/PlayVideo';
import Recommended from '../../components/Recommended';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className=' bg-gray-100 px-4 py-5 flex justify-between flex-wrap md:px-4 '>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default VideoPage
