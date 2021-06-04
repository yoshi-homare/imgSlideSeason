'use strict';

{
  const month = new Date().getMonth() + 1;
  const img = document.getElementById("img");
  let seasonImg;

  if (11 < month || month > 3) {
    seasonImg = '<img src="img/yuki.jpg">';
  }
  if (2 < month && month < 6) {
    seasonImg = '<img src="img/sakura.jpg">';
  }
  if (5 < month && month < 9) {
    seasonImg = '<img src="img/himawari.jpg">';
  }
  if (8 < month && month < 12) {
    seasonImg = '<img src="img/kouyou.jpg">';
  }

  img.innerHTML = seasonImg;
}