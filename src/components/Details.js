import React from 'react';
import YouTube from 'react-youtube';

function Details({ course, handleBuy }) {

    const videoOptions = {
        width: '100%',
        playerVars: {
          // Add any additional YouTube player parameters here
          height: '100%'
        },
      };

  return (
    <div className="container mx-auto py-20 text-center flex flex-wrap">
      <div className="w-full md:w-1/2 bg-gray-900 p-4">
        <div className="aspect-w-16 aspect-h-9 yt">
          <YouTube
            videoId="78wJt9iC61E"
            containerClassName="aspect-w-16 aspect-h-9"
            opts={videoOptions}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Course {course.courseId.toString()}</h2>
        <p className='font-xl font-bold'>TITLE OF THE COURSE</p>
        <p className='font-bold'>Cost: {course.pricePerShare.toString()}</p>
        <p className='font-bold'>Duration: 10 HOURS </p>
        <p className='font-bold'>Topic: BLOCKCHAIN</p>
        {/* <p>Filler Text:</p> */}
        <button
          onClick={() => handleBuy(course.courseId, 1)}
          className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Buy a Share
        </button>
        <button
        //   onClick={}
          className="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Sell Your Share
        </button>
      </div>
    </div>
  );
}

export default Details;

