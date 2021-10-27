var current = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');

for (var i=0; i < slike.length; i++) {
	slike[i].addEventListener('click',display);
}

//for (var i = slike.length - 1; i >= 0; i--) {
//	slike[i].addEventListener('click',display)
//}

function display() {
	var sl = this.getAttribute('src');
	current.setAttribute('src',sl);
}


//Video u idejnom rješenju
var btn = document.getElementById('btn');
var vd = document.getElementById('vd');
var ad = document.getElementById('ad');
var btn2 = document.getElementById('btn2')

btn.addEventListener('click', function() {
	ad.play();
	vd.play();
})

btn2.addEventListener('click',function(){
	vd.pause();
})