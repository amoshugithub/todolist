//hoisting
var abc = function createX() {
	var span = document.createElement("span");
	span.className = "close";
	var x = document.createTextNode("\u00d7");
	span.appendChild(x);
	return span;
}

//Query listMenu , set checked class on click
var allList = document.getElementById("items");
allList.addEventListener("click",function(e){
	if(e.target.tagName === 'LI') {
		e.target.classList.toggle("checked");
	}
});

// Create a "close" button and append it to each list a

var list = [...document.getElementsByTagName("li")];

//with arrow function
// list.forEach((item) => {
// 	var span = document.createElement("span");
// 	span.className = "close";
// 	var x = document.createTextNode("\u00d7");
// 	span.appendChild(x);
// 	item.appendChild(span);	
// });

// normal forEach
list.forEach(function(item){
	// var span = document.createElement("span");
	// span.className = "close";
	// var x = document.createTextNode("\u00d7");
	// span.appendChild(x);
	// item.appendChild(span);
	var span = abc();
	item.appendChild(span);
});

// var i = 0;
// for(i=0;i<list.length;i++){
// 	var span = document.createElement("span");
// 	span.className = "close";
// 	var x = document.createTextNode("\u00d7");
// 	span.appendChild(x);
// 	list[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// var close = [...document.getElementsByClassName("close")];

// close.forEach((item)=>{
// 		item.onclick = function(){
// 		var div = this.parentElement;
// 		div.style.display = "none";
// 	}
// });
closeX();

//Add list
function addItem() {
	var li = document.createElement("li");
	var inputContext = document.getElementById("inputContext").value;
	var nodeContext = document.createTextNode(inputContext);
	li.appendChild(nodeContext);

	if(inputContext === '') {
		alert("Input text please");
	} else {
		document.getElementById("items").appendChild(li);
	}

	// var span = document.createElement("span");
	// span.className = "close";
	// var x = document.createTextNode("\u00d7");
	// span.appendChild(x);
	
	// var span = createX();
	// li.appendChild(span);

	// for(i=0; i<close.length;i++) {
	// 	close[i].onclick = function(){
	// 		var div = this.parentElement;
	// 		div.style.display = "none";
	// 	};	
	// }

	closeX();
}

//function for closeX()
function closeX(){
	var close = [...document.getElementsByClassName("close")];

	close.forEach((item)=>{

		item.addEventListener('click',displayNone)
			// var div = this.parentElement;
			// div.style.display = "none";		
		
		// item.onclick = function(){
		// var div = this.parentElement;
		// div.style.display = "none";
		// }
	});
}


//create X after li
// var abc = function createX() {
// 	var span = document.createElement("span");
// 	span.className = "close";
// 	var x = document.createTextNode("\u00d7");
// 	span.appendChild(x);
// 	return span;
// }

// close function on X
function displayNone() {
	var div = this.parentElement;
	div.style.display = "none";
}

