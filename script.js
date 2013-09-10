function PlayGame() {
var slaying = true;
var youHit = Math.random();
var damageThisRound = Math.floor(Math.random() * 5 + 1);
totalDamage = 0;

while(slaying) {
    if (youHit) {
        document.getElementById('Hit').innerHTML="You hit the dragon!";
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            document.getElementById('Result').innerHTML="You defeated the dragon.";
            document.getElementById('image').setAttribute("src","images/bilbo.gif");
            slaying = false;
        }
        else {
            document.getElementById('Result').innerHTML="The dragon defeated you.";
            document.getElementById('image').setAttribute("src","images/dragonsGold.gif");
            slaying = false;
        }
    }
    
    slaying = false;
}
};