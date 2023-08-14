const keys={
  a:{pressed:false},
  d:{pressed:false},
  ArrowLeft:{pressed:false},
  ArrowRight:{pressed:false}
}



function detectCollision({ rectangle1, rectangle2}){
  return (rectangle1.attackbox.position.x+rectangle1.attackbox.width+100>=rectangle2.position.x&&
     rectangle1.attackbox.position.x<=rectangle2.position.x+rectangle2.width &&
     rectangle1.attackbox.position.y+rectangle1.attackbox.height>=rectangle2.position.y&&
      rectangle1.attackbox.position.y<=rectangle2.position.y+rectangle2.height )

}




function determineWinner({player,enemy,timerId}){
  clearTimeout(timerId)
  if(player.health>enemy.health)
  {
      document.querySelector('.conclusion').innerHTML='Player 1 Wins';
  }
  else if(enemy.health>player.health)
  {
       document.querySelector('.conclusion').innerHTML='Player 2 Wins';
  }
  else if(player.health===enemy.health)
  {
       document.querySelector('.conclusion').innerHTML='Match Draw';
  }
}




let timer = 60
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}
