//style add 
function setPlayerStyle(player) {
    player.style.border = '2px solid yellow';
    player.style.marginBottom = '5px';
    player.style.padding = '5px';
    player.style.borderRadius = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
  //set backgroundColor manually
    /* newPlayer.addEventListener('click',function(){
        newPlayer.style.backgroundColor='green';
    }); */

}
//set backgroundColor by event bubble (functional)
document.getElementById('players').addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase()=='div'){
        event.target.style.backgroundColor='green';
    }else{
        event.target.parentNode.style.backgroundColor='green';
    }
})
// add players
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.innerHTML = `
    <h3 class='playerName'>New Player name-5    click to change backgrund</h3>
    <p>Consequuntur sint consectetur explicabo consequatur quibusdam obcaecati saepe eligendi culpa? Fugit optio perspiciatis repellendus asperiores provident, quia veritatis quasi quaerat enim dolorem? Minus, blanditiis numquam sunt labore unde aliquam quae.</p>
    `;
    playersContainer.appendChild(newPlayer);
    setPlayerStyle(newPlayer);
    //set backgroundColor manually
    /* newPlayer.addEventListener('click',function(){
        newPlayer.style.backgroundColor='green';
    }); */
}