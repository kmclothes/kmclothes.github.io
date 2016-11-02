function resize_container() {
	var padding = 0.15;
	var container_height = window.innerHeight;
	var container_h_withPadding = window.innerHeight * (1 - padding);
	var container_paddingTop = window.innerHeight * padding;

	var        txt_container_height = container_height.toString()   + "px";
	var txt_container_h_withPadding = container_h_withPadding.toString()     + "px";
	var    txt_container_paddingTop = container_paddingTop.toString() + "px";

	if (document.getElementById('pricing_main') !== null) {
		document.getElementById("pricing_main").style.minHeight = txt_container_height;
	}
	if (document.getElementById('note_out') !== null) {
		document.getElementById("note_out").style.minHeight = txt_container_h_withPadding;
	}
	if (document.getElementById('note_kid') !== null) {
		document.getElementById("note_kid").style.minHeight = txt_container_h_withPadding;
	}
	if (document.getElementById('note_mix') !== null) {
		document.getElementById("note_mix").style.minHeight = txt_container_h_withPadding;
	}
	if (document.getElementById('note_out') !== null) {
		document.getElementById("note_out").style.paddingTop = txt_container_paddingTop;
	}
	if (document.getElementById('note_kid') !== null) {
		document.getElementById("note_kid").style.paddingTop = txt_container_paddingTop;
	}
	if (document.getElementById('note_mix') !== null) {
		document.getElementById("note_mix").style.paddingTop = txt_container_paddingTop;
	}

}
resize_container();
