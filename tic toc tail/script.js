let point=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
let player = 'X';
let bot = 'O';
let bool = true ;

function randomint(min,max)
{
  return( Math.floor(Math.random()*(max-min+1)));
} 

function player_move()
{}
 

function bot_move()
{
  var bot_num =randomint(0,9);
  console.log(bot_num);
  for(let i=0; i<9 ; i++)
  if(!bot_num == point[i])
  {
    console.log('kk');
  }
}
// while(bool)
// {
//document.querySelector('.box').innerHTML=bot;
//   bot_move();
//   player_move();
// }