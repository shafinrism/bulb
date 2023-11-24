



const lightSwitch=document.querySelector(`.lightSwitch`);

lightSwitch.addEventListener(`click`,()=>{

	const lightBox=document.querySelector(`.lightBox`);
	lightBox.classList.toggle(`bgImage`);

});