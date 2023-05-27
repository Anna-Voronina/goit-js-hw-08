import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorage from './localstorage.js';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.save(CURRENT_TIME_KEY, data.seconds);
}

player.setCurrentTime(localStorage.load(CURRENT_TIME_KEY));
