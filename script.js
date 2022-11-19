slider = document.querySelector("#bob");

console.log(slider.value);

let num = slider.value;
let rerollCheck = false;

numDice = document.querySelector("#numDice");

numDice.textContent = `${num}`;

slider.oninput = function(){
    num = slider.value;
    numDice.textContent = `${num}`;
}

up1 = document.querySelector("#up1");
up2 = document.querySelector("#up2");
up3 = document.querySelector("#up3");
up4 = document.querySelector("#up4");
up5 = document.querySelector("#up5");
up6 = document.querySelector("#up6");

roll1 = document.querySelector("#s1");
roll2 = document.querySelector("#s2");
roll3 = document.querySelector("#s3");
roll4 = document.querySelector("#s4");
roll5 = document.querySelector("#s5");
roll6 = document.querySelector("#s6");

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('bigButt');
}

reroll = document.querySelector("#reroll");

reroll.addEventListener("click", (e) => {

    if(rerollCheck == false){
        rerollCheck = true;
        e.target.style.textDecoration = "none";
    }
    else{
        rerollCheck = false;
        e.target.style.textDecoration = "line-through";
    }

    e.target.classList.add("bigButt")
}
)
reroll.addEventListener("transitionend", removeTransition);

let cumuRolls = {ones:0, twos:0, threes:0, fours:0, fives:0, sixes:0};
let Rolls = {ones:0, twos:0, threes:0, fours:0, fives:0, sixes:0};

roll = document.querySelector("#roll");

roll.addEventListener("click", (e) => {

e.target.classList.add("bigButt")
let temp;


for(let i = 0; i < num; i++){

temp = Math.floor(Math.random() * 6 + 1);

if(rerollCheck == true && temp == 1){
    temp = Math.floor(Math.random() * 6 + 1);
}

switch(temp){
    case 1:
        cumuRolls.ones += 1;
        Rolls.ones += 1;
        break;
    case 2:
        cumuRolls.ones += 1;
        cumuRolls.twos += 1;
        Rolls.twos += 1;
        break;

    case 3:
        cumuRolls.ones += 1;
        cumuRolls.twos += 1;
        cumuRolls.threes += 1;
        Rolls.threes += 1;
        break;

    case 4:
        cumuRolls.ones += 1;
        cumuRolls.twos += 1;
        cumuRolls.threes += 1;
        cumuRolls.fours += 1;
        Rolls.fours += 1;
        break;

    case 5:
        cumuRolls.ones += 1;
        cumuRolls.twos += 1;
        cumuRolls.threes += 1;
        cumuRolls.fours += 1;
        cumuRolls.fives += 1;
        Rolls.fives += 1;
        break;

    case 6:
        cumuRolls.ones += 1;
        cumuRolls.twos += 1;
        cumuRolls.threes += 1;
        cumuRolls.fours += 1;
        cumuRolls.fives += 1;
        cumuRolls.sixes += 1;
        Rolls.sixes += 1;
        break;  
}
}


up1.textContent = cumuRolls.ones;
up2.textContent = cumuRolls.twos;
up3.textContent = cumuRolls.threes;
up4.textContent = cumuRolls.fours;
up5.textContent = cumuRolls.fives;
up6.textContent = cumuRolls.sixes;

cumuRolls.ones = 0;
cumuRolls.twos = 0;
cumuRolls.threes = 0;
cumuRolls.fours = 0;
cumuRolls.fives = 0;
cumuRolls.sixes = 0;

roll1.textContent = Rolls.ones;
roll2.textContent = Rolls.twos;
roll3.textContent = Rolls.threes;
roll4.textContent = Rolls.fours;
roll5.textContent = Rolls.fives;
roll6.textContent = Rolls.sixes;


Rolls.ones = 0;
Rolls.twos = 0;
Rolls.threes = 0;
Rolls.fours = 0;
Rolls.fives = 0;
Rolls.sixes = 0;
}

);
roll.addEventListener("transitionend", removeTransition);




