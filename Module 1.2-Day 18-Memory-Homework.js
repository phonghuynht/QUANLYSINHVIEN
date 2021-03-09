/***
 * Viết phần mềm quản lý sinh viên. Thông tin SV gồm MSV, tên, địa chỉ, điểm toán văn, điểm trung bình. 
    Cho phép nhập N sinh viên, xuất ra sinh viên có điểm toán cao nhất, điểm trung bình thấp nhất. 
    Sắp xếp các SV tăng dần theo điểm văn.

 */

function average(math, literature) {
    return ((math + literature) / 2 );
}

function input(){
    let st = {};
    st.id = prompt ("Please input student ID.");
    st.name = prompt ("Please input student name.");
    st.scoreMath = Number(prompt ("Please input student math score."));
    st.scoreLiterature = Number(prompt ("Please input student literature score."));
    st.scoreAverage = average (st.scoreMath, st.scoreLiterature);
    
    return(st);
}

function allinput(){
	let allst = [];
	do
    {
        newInput = confirm("Do you want to enter new student?");
        if (newInput != true) {break;}
        allst.push(input());
    } while (newInput);

    return(allst);
}

function maxScore(subject) {
		let max=0, name = "";
    for (let i = 0; i < allst.length; i++){
    	if (allst[i][subject] > max){
        name = allst[i].name;
    		max = allst[i][subject];     
    	}
    }
   	console.log("Student " + name + " got the max Math score : " + max);
}

function minScore(subject) {
		let min=10, name = "";
    for (let i = 0; i < allst.length; i++){
    	if (allst[i][subject] < min){
        name = allst[i].name;
    		min = allst[i][subject];     
    	}
    }
   	console.log("Student " + name + " got the min Average score: " + min);
}

function sortScore(subject) {
		let sort = {}, name = "", score = 0, scoreStr = "";
    for (let i = 0; i < allst.length; i++){
				name = allst[i].name;
                score = allst[i][subject];
        switch (score){
        	case 10:
          		scoreStr=String(score);
              break;
          default:
          		scoreStr='0' + String(score);
        }
        sort[scoreStr] = name;
 		}
    console.log(subject.slice(5,subject.length) + " scores in ascending order: ");
    console.log(sort);  
}

let allst = (allinput());
console.log(allst);
maxScore('scoreMath');
minScore('scoreAverage');
sortScore('scoreLiterature');

