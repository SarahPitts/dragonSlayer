function PlayGame() {
var slaying = true;
var youHit = Math.random();
var damageThisRound = Math.floor(Math.random() * 5 + 1);
totalDamage = 0;

while(slaying) {
    if (youHit) {
        document.getElementById('Hit').innerHTML="you hit the dragon!";
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            document.getElementById('Result').innerHTML="You defeated the dragon";
            slaying = false;
        }
        else {
            document.getElementById('Result').innerHTML="The dragon defeated you";
            slaying = false;
        }
    }
    
    slaying = false;
}
};