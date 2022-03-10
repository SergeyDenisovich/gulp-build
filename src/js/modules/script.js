import * as flsFunctions from './functions.js';

flsFunctions.isWebp();
flsFunctions.menuInit();

$(document).ready(function () {
  let btn = document.querySelector('.btn');

  let block = document.querySelector('.block1');

  btn.addEventListener('click', function () {
    flsFunctions._slideToggle(block);
  });
});
