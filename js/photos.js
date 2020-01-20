function openPhoto(evt) {  

  	var modal = document.getElementById("myModal");
  	var modalImg = document.getElementById("currentImage");
  	var captionText = document.getElementById("caption");

 	modal.style.display = "block"; 
 	modalImg.src = evt.src;
 	captionText.innerHTML = evt.alt;

	// Click close button
	var span = document.getElementsByClassName("close")[0];
  	span.onclick = function() { 
		modal.style.display = "none";
	}
}



