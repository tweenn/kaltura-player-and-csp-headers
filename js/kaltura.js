let playerAdded = false;

const addPlayer = () => {
	if (!playerAdded) {
		playerAdded = true;

		kWidget.embed({
			'targetId': 'myEmbedTarget',
			'wid': '_811441',
			'uiconf_id' : '40430081',
			'entry_id' : '1_p59fv7ur', 
			'flashvars':{
				'autoPlay': false,
			},
		});
	}
}

if (document.readyState === 'complete') {
	addPlayer();
} else {
	window.addEventListener('load', addPlayer);
}
