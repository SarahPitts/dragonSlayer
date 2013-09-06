var slaying = true;
var youHit = Math.random();
var damageThisRound = Math.floor(Math.random() * 5 + 1);
totalDamage = 0;

while(slaying) {
    if (youHit) {
        console.log ("congrats");
        totalDamage += damageThisRound;
        
        if (totalDamage >= 4) {
            console.log ("player slew the dragon")
            slaying = false;
        }
    }
    else {
        console.log ("the dragon defeated you");
    }
    slaying = false;
}
