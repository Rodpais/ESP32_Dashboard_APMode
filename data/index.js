getData('info');

setInterval(function() {
	getData('info');
}, 5000);

function onoff(el) {
	var request = new XMLHttpRequest();

	request.open('POST', 'onoff', false);
	request.send(el.checked);
	if (request.response) alert(request.response);
	else alert('UnSuccess!!');
}

function getData(uri) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var jj = JSON.parse(this.responseText);
			for (var i = 0; i < jj.length; i++) {
				j = jj[i];
				if (document.getElementById(j.name)) {
					j.name === 'led'
						? (document.getElementById(j.name).checked = j.val)
						: (document.getElementById(j.name).innerHTML = j.val);
				}
				if (document.getElementById('label_' + j.name)) {
					document.getElementById('label_' + j.name).innerHTML = j.name;
				}
			}
		}
	};
	xhttp.open('GET', uri, true);
	xhttp.send();
}
