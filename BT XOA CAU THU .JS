let soccerPlayer = ["Ronaldo", "Messi", "Neymar"];
let numberofsoccerPlayer = soccerPlayer.length;
alert(soccerPlayer);
let answer = prompt("Do you want to erase any soccer players? Answer yes(Y) or no(N): ");

if (answer == "Y")
{
	do
  {
  	let list = " ";
    for(let i = 0; i < soccerPlayer.length; i++)
    {
    	list += `${i}.${soccerPlayer[i]}`;
    }
    alert(list)
  	var answer1 = Number(prompt(`Who do you want to erase? ${list}.Input the number: `));
  	soccerPlayer.splice(answer1,1);
 		var answer2 = prompt("Do you want to erase more? Answer Y(yes) or N(no): ");
  } while (answer2 == "Y")
  console.log(soccerPlayer);
  if (answer2 == "N")
  {
  	console.log("Good bye");
  }
}

else if(answer == "N")
{
	console.log("Good bye");
}