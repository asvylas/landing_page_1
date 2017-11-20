const  dataText = document.querySelectorAll("div[data-text]")
const iconContainer = document.getElementById("icon-container");
const contentContainer = document.getElementById("content-container");

const navIcons = document.querySelectorAll("div.flexitem")

 for(var i=0; i< navIcons.length; i++) {
	   navIcons[i].addEventListener("click", bindClick(i));
 }

 function bindClick(i) {
	return function(){
	
	
			 for (let a = 0; a < dataText.length ; a++){
				dataText[a].className = "hidden"
				navIcons[a].className="flexitem"
			 };
			 
			 dataText[i].className = "show"
			 navIcons[i].className="flexitemclicked"
		   };
 }