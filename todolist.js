
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement	;
    div.style.display = "none";
  }
}


function addList() {
	var li = document.createElement("li");
	var inputContext = document.getElementById("inputContext").value;
	var node = document.createTextNode(inputContext);

	li.appendChild(node);
	if(inputContext === '') {
		alert("Just writing something!!");
	} else {
		document.getElementById("ulList").appendChild(li);
	}
	document.getElementById("inputContext").Value = "";

	var button = document.createElement("BUTTON");
	var txt = document.createTextNode("\u00d7");
	button.className = "close" ;
	button.appendChild(txt);
	li.appendChild(button);

	for(i=0;i<close.length;i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}

}
