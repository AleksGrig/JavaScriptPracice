const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

window.addEventListener('keyup', function(e){
	const currentTop = extractPos(avatar.style.top);
	const currentLeft = extractPos(avatar.style.left);
	if(e.key === 'ArrowDown' || e.key === 'Down') avatar.style.top = `${currentTop + 50}px`;
	if(e.key === 'ArrowUp' || e.key === 'Up') avatar.style.top = `${currentTop - 50}px`;
	if(e.key === 'ArrowRight' || e.key === 'Right') {
		avatar.style.left = `${currentLeft + 50}px`;
		avatar.style.transform = 'scale(1, 1)';
	}
	if(e.key === 'ArrowLeft' || e.key === 'Left') {
		avatar.style.left = `${currentLeft - 50}px`;
		avatar.style.transform = 'scale(-1, 1)';
	}
	if(isTouching(avatar, coin)) moveCoin();
})

const extractPos = (pos) => { 
	if(!pos) return 100;
	return parseInt(pos.slice(0, -2)); 
}

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight);
	const x = Math.floor(Math.random() * window.innerWidth);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
}

moveCoin();
