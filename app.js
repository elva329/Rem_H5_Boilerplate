require('./index.scss');

//get the width of viewpoint
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

//get the html DOM
let htmlDOM = document.getElementsByTagName('html')[0];

//set font size of html
htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', (e) => {
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

})