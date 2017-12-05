//Query listMenu , set checked class on click
var listMenu = document.querySelector('ul');
listMenu.addEventListener("click", function(clickEachList){
	if(clickEachList.target.tagName === 'LI') {
		clickEachList.target.classList.toggle("checked");
	}
});

// Create a "close" button and append it to each list item
var allList = document.getElementsByTagName("li");
var i;
for(i=0;i<allList.length;i++) {
	var span = document.createElement("span");
	var x = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(x);
	allList[i].appendChild(span); 
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i=0;i<close.length;i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	};
}

// close.addEventListener("click",function(c){
// 	if(c.target.className === 'CLOSE') {
// 		var div = c.parentElement;
// 		div.style.display = "none";
// 	}
// });

//Add list
function addList() {
	var li = document.createElement("li");
	var inputContext = document.getElementById("inputContext").value;
	var nodeContext = document.createTextNode(inputContext);
	li.appendChild(nodeContext);

	if(inputContext === '') {
		alert("Input context please") 
	} else {
		document.getElementById("ulList").appendChild(li);
	}

	var span = document.createElement("span");
	span.className = "close";
	var x = document.createTextNode("\u00D7");
	span.appendChild(x);
	li.appendChild(span);

	for(i=0;i<close.length;i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}




















// function addList() {
// 	var li = document.createElement("li");
// 	var inputContext = document.getElementById("inputContext").value;
// 	var node = document.createTextNode(inputContext);
// 	li.appendChild(node);

// 	if(inputContext === '') {
// 		alert("Just writing something!!");
// 	} else {
// 		document.getElementById("ulList").appendChild(li);
// 	}
// 	document.getElementById("inputContext").Value = "";

// 	var span = document.createElement("span");
// 	span.className = "close" ;
// 	var x = document.createTextNode("\u00D7");
// 	span.appendChild(x);
// 	li.appendChild(span);

// 	for(i=0;i<close.length;i++) {
// 		close[i].onclick = function() {
// 			var div = this.parentElement;
// 			div.style.display = "none";
// 		}
// 	}

// }