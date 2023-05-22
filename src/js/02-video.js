import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const KEY = "videoplayer-current-time"
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(currentTime);

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on(' timeupdate ', throttle(update (), 1000));

// player.setCurrentTime(currentTime);


// function update({ seconds }) {
//     localStorage.setItem(KEY, `${seconds}`)
    
// }
// const currentTime = localStorage.getItem('videoplayer-current-time') || 0;

// player.setCurrentTime(currentTime);