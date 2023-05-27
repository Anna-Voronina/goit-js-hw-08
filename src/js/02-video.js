import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorage from './localstorage.js';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

setTime();

function setTime() {
  const currentTimeData = localStorage.load(CURRENT_TIME_KEY);

  if (currentTimeData === undefined) {
    return;
  }

  player.setCurrentTime(currentTimeData);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.save(CURRENT_TIME_KEY, data.seconds);
}
