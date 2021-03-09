let soccerPlayer = ["Ronaldo","Messi","Neymar"];
console.log(soccerPlayer);
let answer = prompt("Do you want to add another soccer player? Answer Y(yes) or N(no): ");

if(answer == "Y")
{
	do
  {
  	let addAnswer = prompt("Add the name: ");
  	soccerPlayer.push(addAnswer);
    var answer2 = prompt("Do you want to add more?. Answer Y(yes) or N(no): ");
	} while (answer2 == "Y")
  console.log(soccerPlayer);
  if(answer2 == "N")
  {
  	console.log("Good bye");
  }
}

else if(answer == "N")
{
	console.log("Good bye");
}