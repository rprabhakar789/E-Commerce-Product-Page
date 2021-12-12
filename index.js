$.noConflict();
$(function() {
	
	
	// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img00");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var mainImg = document.getElementById('myImg');
var img1 = document.getElementById('img-1');
img1.onclick = function(){
    mainImg.src = this.src;
}
var img2 = document.getElementById('img-2');
img2.onclick = function(){
    mainImg.src = this.src;
}
var img3 = document.getElementById('img-3');
img3.onclick = function(){
    mainImg.src = this.src;
}
var img4 = document.getElementById('img-4');
img4.onclick = function(){
    mainImg.src = this.src;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
    $( "#dialog" ).dialog({
      autoOpen: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });
 
 function Hello() {
            alert("Hello, World");
			
      $( "#dialog" ).dialog( "open" );
         }
  
var srcList = ["img-1","img-2","img-3","img-4"]

function nextClicked(){
	var mainImg = document.getElementById('img00');
	var img = document.getElementById('img00');
	console.log(img)
	console.log(srcList[0])
	var ind=0;
	var i=0;
	console.log(i+" "+srcList.length)
	for(i=0;i<srcList.length;i++)
	{
		console.log(mainImg.src+" "+srcList[i]);
		var srcImg = document.getElementById(srcList[i]);
		var src = srcImg.src;
		if(mainImg.src === src){
			ind = i;
			break;
		}
		
	}
	if(ind==srcList.length-1)ind=0;
	else ind = ind+1;
	var refImg = document.getElementById(srcList[ind]);
	mainImg.src=refImg.src
	img.src=refImg.src
}


function preClicked(){
	var mainImg = document.getElementById('img00');
	var img = document.getElementById('img00');
	console.log(img)
	console.log(srcList[0])
	var ind=0;
	var i=0;
	console.log(i+" "+srcList.length)
	for(i=0;i<srcList.length;i++)
	{
		console.log(mainImg.src+" "+srcList[i]);
		var srcImg = document.getElementById(srcList[i]);
		var src = srcImg.src;
		if(mainImg.src === src){
			ind = i;
			break;
		}
		
	}
	if(ind==0)ind=srcList.length-1;
	else ind = ind-1;
	var refImg = document.getElementById(srcList[ind]);
	mainImg.src=refImg.src
	img.src=refImg.src
}

function changeMainImg(id){
	console.log(id)
	console.log(this);
	var srcImg = document.getElementById(id);
	var img = document.getElementById('img00');
	var mainImg = document.getElementById('myImg');
	mainImg.src = srcImg.src;
	img.src = srcImg.src;
}
