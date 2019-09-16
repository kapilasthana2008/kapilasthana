//importing module exports input function declared in utility.js file
const input = require("./utility");

//input stakes amount to play.
console.log("enter stake into game to play");
var stake = input.one();

//input goal amount to achive.
console.log("enter goal amount to achive.");
var goal = input.one();

//input no. of trials
console.log("enter no of trials to play");
var trials = input.one();

var wins = 0;
var bets = 0;

play(stake,goal,trials);
//for loop upto no of trials

//function for play gambling...with (argument stake,goal,no of trials)
function play(stake,goal,trials)
{
    //iterates upto no of trials
    for(var i = 1;i <= trials;i++)
    {
        // no of bets.
        bets = bets+1;
        var temp = stake;
        //iterate until stake = 0 or stake = goal.
        while (temp > 0 && temp < goal) {
              
            // if math.random provide greater stake will increase
            if (Math.random()> 0.5) {
                temp++;
            }
            else{
            // if math.random provide less stake will decrease
                temp--;
            }
            // if stake is equal to goal then win+1;
            if(temp == goal)
            {
                wins += 1;
            }
        }
    }
    // printing no of wins.
    console.log("number of wins"+wins);
    // printting percentage of wins.
    console.log("percentage of wins "+(wins/trials)*100);
    //printing percentage of loss.
    console.log("percentage of loss"+((trials-wins)/trials)*100);
}
