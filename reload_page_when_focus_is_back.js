<script>
<!-- Reload page if it lost focus to make sure the session is still vaild -->
<!-- if the focus of the window is gone for longer than focusAwayTime (ms) the page will reload -->
<!-- for me it made sense when a user just leaves the page somewhere where a html form is opened. Meanwhile before the user comes back the session gets invalid but the user is still thinking of hitting the submit buttton. With this tiny script, if the session is invalid and the page is reloaded after some not-on-focud-time the user gets somewhere to a not via login protected site for example. -->
var blurredTimeStart = 0;
var blurredTimeEnd = 0;
<!-- var blurred = false; -->
const = focusAwayTime = 60000;

window.onblur = function() { 
	blurredTimeStart = new Date().getTime(); 
	<!-- blurred = true; -->
}
window.onfocus = function() { 
	blurredTimeEnd = new Date().getTime(); 
	if (
		<!--(blurred == true) && -->
		((blurredTimeEnd - blurredTimeStart) > focusAwayTime)
		) {
		location.reload();
	}
}
</script>
