document.getElementsByTagName('designers').onclick = designersActive;  
document.getElementsByTagName('developers').onclick = developersActive;  
document.getElementsByTagName('howItWorks').onclick = howActive;  
document.getElementsByTagName('ourTeam').onclick = ourActive;  
document.getElementsByTagName('blog').onclick = blogActive;  

function designersActive () {
	document.nav.style.background = rgba(255,255,255,.85); 
	document.body.style.color = #000; 
	document.getElementsByTagName('designers').className = "active";
	document.getElementsByTagName('developers').className = "";  
	document.getElementsByTagName('howItWorks').className = "";  
	document.getElementsByTagName('ourTeam').className = ""; 
	document.getElementsByTagName('blog').className = "";   
}

function developersActive () {
	document.getElementsByTagName('designers').style.background = #fff; 
	document.getElementsByTagName('designers').style.color = #000; 
	document.getElementsByTagName('designers').className = "";
	document.getElementsByTagName('developers').className = "active";  
	document.getElementsByTagName('howItWorks').className = "";  
	document.getElementsByTagName('ourTeam').className = ""; 
	document.getElementsByTagName('blog').className = "";   
}

function howActive () {
	document.getElementsByTagName('designers').style.background = rgba(255,255,255,.85); 
	document.getElementsByTagName('designers').style.color = #000; 
	document.getElementsByTagName('designers').className = "";
	document.getElementsByTagName('developers').className = "";  
	document.getElementsByTagName('howItWorks').className = "active";  
	document.getElementsByTagName('ourTeam').className = ""; 
	document.getElementsByTagName('blog').className = "";   
}

function ourActive () {
	document.getElementsByTagName('designers').style.background = rgba(255,255,255,.85); 
	document.getElementsByTagName('designers').style.color = #000; 
	document.getElementsByTagName('designers').className = "";
	document.getElementsByTagName('developers').className = "";  
	document.getElementsByTagName('howItWorks').className = "";  
	document.getElementsByTagName('ourTeam').className = "active"; 
	document.getElementsByTagName('blog').className = "";   
}

function blogActive () {
	document.getElementsByTagName('designers').style.background = rgba(255,255,255,.85); 
	document.getElementsByTagName('designers').style.color = #000; 
	document.getElementsByTagName('designers').className = "";
	document.getElementsByTagName('developers').className = "";  
	document.getElementsByTagName('howItWorks').className = "";  
	document.getElementsByTagName('ourTeam').className = ""; 
	document.getElementsByTagName('blog').className = "active";   
}



