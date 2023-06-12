import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(update, 1000));

function update({ seconds }) {
  localStorage.setItem(KEY, `${seconds}`);
}

const currentTime = localStorage.getItem(KEY) || 0;

player.setCurrentTime(currentTime);
