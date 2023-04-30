// mouseover tooltips for various UI elements
titles = {
    '🔄': 'Refresh',
    '\u2934': 'Send dimensions to stable diffusion',
    '💥': 'Run preprocessor',
    '📝': 'Open new canvas',
    '📷': 'Enable webcam',
    '⇄': 'Mirror webcam',
};

onUiUpdate(function(){
	gradioApp().querySelectorAll('.cnet-toolbutton').forEach(function(button){
		tooltip = titles[button.textContent];
		if(tooltip){
			button.title = tooltip;
		}
	})
});