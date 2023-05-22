
import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const KEY = "videoplayer-current-time"


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', throttle(update, 1000));
    
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

function update({seconds}) {
    localStorage.setItem(KEY, seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(currentTime);







