
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Stories.module.css';

export default function Stories() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [open, setOpen] = useState(false);

  const [stories, setStories] = useState({
    username: 'filipeleonelbatista',
    image: 'https://github.com/filipeleonelbatista.png',
    stories: [
      {
        id: 0,
        video: "./assets/4434242.mp4",
        duration: 22,
        played: 0,
        likes: false,
      },
      {
        id: 1,
        video: "./assets/4678261.mp4",
        duration: 22,
        played: 0,
        likes: false,
      },
      {
        id: 2,
        video: "./assets/6010502.mp4",
        duration: 22,
        played: 0,
        likes: false,
      },
    ]
  })

  const handleUpdateLikeStatus = (id: number) => {
    var changedValues = { ...stories }
    changedValues.stories[id].likes = !changedValues.stories[id].likes
    setStories(changedValues)
  }

  const handleupdateduration = (id: number, duration: number) => {
    stories.stories[id].duration = duration;
    setStories(state => stories);
  }

  const handleupdateprogress = (id: number, playedSeconds: number) => {
    var changedValues = { ...stories }
    changedValues.stories[id].played = (playedSeconds * 100) / changedValues.stories[id].duration;
    setStories(changedValues);
  }

  useEffect(() => {

  }, [stories])

  return (
    <div className={styles.main} >
      {open && (
        <div className={styles.stories}>
          <div className={styles.timers}>
            {
              stories.stories.map(story => (
                <div key={story.id} className={styles.progress}>
                  <div
                    className={styles.progressConcluded}
                    style={{ width: `${story.played}%` }}></div>
                </div>
              ))
            }
          </div>
          <div className={styles.actions}>
            <button onClick={() => {
              setCurrentSlide(0)
              setOpen(false)
            }}>
              <FaTimes size={48} color="#FFFFFFcc" />
            </button>
          </div>
          <Swiper
            className={styles.video}
            navigation={true}
            modules={[Navigation]}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            id="swiperContainerStories"
            onSwiper={setSwiper}
            onSlideChange={(swiper) => {
              if (stories.stories[swiper.realIndex - 1]) {
                stories.stories[swiper.realIndex - 1].played = 100
              }

              stories.stories[swiper.realIndex].played = 0

              setStories(stories)
              setCurrentSlide(swiper.realIndex)
            }}
          >
            {
              stories.stories.map(story => (
                <SwiperSlide id="sliderContainerStories" key={story.id} className={styles.swiperContainer}>
                  <div className={styles.video}>
                    <ReactPlayer
                      playing={currentSlide === story.id}
                      muted
                      onEnded={() => {
                        handleupdateprogress(story.id, story.duration)
                        if (stories.stories.length > currentSlide + 1) {
                          swiper?.slideNext()
                        } else {
                          setOpen(false)
                          setCurrentSlide(0)
                        }
                      }}
                      onProgress={(event) => currentSlide === story.id && handleupdateprogress(story.id, event.playedSeconds)}
                      onDuration={(duration) => currentSlide === story.id && handleupdateduration(story.id, duration)}
                      controls={false}
                      width="100%"
                      height="100%"
                      url={story.video}
                    />
                  </div>
                  <div className={styles.reactions}>
                    <button onClick={() => currentSlide === story.id && handleUpdateLikeStatus(story.id)}>
                      {
                        !story.likes
                          ? <FaRegHeart size={48} color="#FFFFFFcc" />
                          : <FaHeart size={48} color="#EE1D52cc" />
                      }
                    </button>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      )}
      <div className={styles.instaStoriesContainer}>
        <button onClick={() => setOpen(true)} className={styles.instaStories}>
          <img src="https://github.com/filipeleonelbatista.png" />
          <p>filipeleonelbatista</p>
        </button>
      </div>
      <div className={styles.whatsStoriesContainer}>
        <div className={styles.whatsTitleGroup}>
          <p>RECENTE</p>
        </div>
        <button onClick={() => setOpen(true)} className={styles.whatsStories}>
          <div className={styles.imageContainer}>
            <img src="https://github.com/filipeleonelbatista.png" />
          </div>
          <div className={styles.userData}>
            <h2>Filipe Batista</h2>
            <p>ontem às 19:40</p>
          </div>
        </button>
      </div>
    </div >
  )
};
