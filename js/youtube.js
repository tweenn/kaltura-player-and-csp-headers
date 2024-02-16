
let playerAdded = false;

const addPlayer = () => {
	let tag = document.createElement('script');

	tag.src = 'https://www.youtube.com/iframe_api';
	let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

let player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player(
		'myEmbedTarget',
		{
			height: '390',
			width: '640',
			videoId: 'CNRavTdSN5E',
			playerVars: {
				playsinline: 1
			}
		}
	);
}

if (document.readyState === 'complete') {
	addPlayer();
} else {
	window.addEventListener('load', addPlayer);
}
