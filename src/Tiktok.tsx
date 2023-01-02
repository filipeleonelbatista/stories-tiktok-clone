import { useState } from 'react';
import { BsBookmarkFill, BsChatTextFill } from 'react-icons/bs';
import { FaHeart, FaShare } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Tiktok.module.css';

export default function Tiktok() {
  const [videosButtonStatus, setVideoButtonStatus] = useState([
    {
      likes: false,
      comments: false,
      shares: false,
      bookmarks: false
    },
    {
      likes: false,
      comments: false,
      shares: false,
      bookmarks: false
    },
    {
      likes: false,
      comments: false,
      shares: false,
      bookmarks: false
    },
  ])

  const handleLike = (id: number) => {
    let array = [
      ...videosButtonStatus
    ]

    array[id].likes = !array[id].likes

    setVideoButtonStatus(array)
  }

  const handleComments = (id: number) => {
    let array = [
      ...videosButtonStatus
    ]

    array[id].comments = !array[id].comments

    setVideoButtonStatus(array)
  }

  const handleShares = (id: number) => {
    let array = [
      ...videosButtonStatus
    ]

    array[id].shares = !array[id].shares

    setVideoButtonStatus(array)
  }

  const handleBookmarks = (id: number) => {
    let array = [
      ...videosButtonStatus
    ]

    array[id].bookmarks = !array[id].bookmarks

    setVideoButtonStatus(array)
  }

  const videoArray = [
    {
      id: 0,
      username: 'filipeleonelbatista',
      image: 'https://github.com/filipeleonelbatista.png',
      video: "./assets/4434242.mp4",
      description: 'Get a trip!',
      likes: 829,
      comments: 523,
      shares: 423,
      bookmarks: 152,
    },
    {
      id: 1,
      username: 'tiktok',
      image: 'https://github.com/tiktok.png',
      video: "./assets/4678261.mp4",
      description: 'How beautiful view at this morning',
      likes: 1829,
      comments: 2523,
      shares: 3423,
      bookmarks: 1452,
    },
    {
      id: 2,
      username: 'google',
      image: 'https://github.com/google.png',
      video: "./assets/6010502.mp4",
      description: 'This is wonder of working at home office',
      likes: 1829,
      comments: 2523,
      shares: 3423,
      bookmarks: 1452,
    },
  ]

  return (
    <Swiper
      className={styles.main}
      direction={"vertical"}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      id="swiperContainerTiktok"
    >
      {
        videoArray.map(video => (
          <SwiperSlide id="sliderContainer" key={video.id} className={styles.swiperContainer}>
            <div className={styles.container}>
              <div className={styles.video}>
                <ReactPlayer
                  playing
                  loop
                  muted
                  controls={false}
                  width="100%"
                  height="100%"
                  url={video.video}
                />
              </div>
              <div className={styles.overlay}>
                <div className={styles.data}>
                  <a href={`https://github.com/${video.username}`} target="_blank"><h6>@{video.username}</h6></a>
                  <p>{video.description}</p>
                </div>
                <div className={styles.controls}>
                  <button onClick={() => window.open(`https://github.com/${video.username}`, "_blank")} className={styles.avatarContainer}>
                    <img src={video.image} alt={video.username} />
                  </button>
                  <button onClick={() => handleLike(video.id)} className={styles.infoContainer}>
                    <FaHeart size={48} color={!videosButtonStatus[video.id].likes ? "#FFF" : "#EE1D52"} />
                    <p>{video.likes}</p>
                  </button>
                  <button onClick={() => handleComments(video.id)} className={styles.infoContainer}>
                    <BsChatTextFill size={48} color={!videosButtonStatus[video.id].comments ? "#FFF" : "#CCC"} />
                    <p>{video.comments}</p>
                  </button>
                  <button onClick={() => handleBookmarks(video.id)} className={styles.infoContainer}>
                    <BsBookmarkFill size={48} color={!videosButtonStatus[video.id].bookmarks ? "#FFF" : "#FFFC00"} />
                    <p>{video.bookmarks}</p>
                  </button>
                  <button onClick={() => handleShares(video.id)} className={styles.infoContainer}>
                    <FaShare size={48} color={!videosButtonStatus[video.id].shares ? "#FFF" : "#69C9D0"} />
                    <p>{video.shares}</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};
