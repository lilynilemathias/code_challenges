/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-pen' : '&#x45;',
			'icon-thumbs-up' : '&#x44;',
			'icon-thumbs-up-2' : '&#x43;',
			'icon-heart' : '&#x42;',
			'icon-heart-2' : '&#x41;',
			'icon-user' : '&#x40;',
			'icon-location' : '&#x3f;',
			'icon-location-2' : '&#x3e;',
			'icon-coin' : '&#x3d;',
			'icon-notification' : '&#x3c;',
			'icon-question' : '&#x3b;',
			'icon-info' : '&#x3a;',
			'icon-info-2' : '&#x39;',
			'icon-blocked' : '&#x38;',
			'icon-cancel-circle' : '&#x37;',
			'icon-checkmark-circle' : '&#x36;',
			'icon-close' : '&#x35;',
			'icon-checkmark' : '&#x34;',
			'icon-mail' : '&#x33;',
			'icon-left-quote' : '&#x32;',
			'icon-youtube' : '&#x31;',
			'icon-omega' : '&#x30;',
			'icon-sigma' : '&#x2f;',
			'icon-quotes-left' : '&#x2e;',
			'icon-bubbles' : '&#x2d;',
			'icon-bubbles-2' : '&#x2c;',
			'icon-play' : '&#x2b;',
			'icon-tags' : '&#x2a;',
			'icon-tag' : '&#x29;',
			'icon-search' : '&#x28;',
			'icon-twitter' : '&#x27;',
			'icon-facebook' : '&#x26;',
			'icon-linkedin' : '&#x25;',
			'icon-pencil' : '&#x24;',
			'icon-bubble' : '&#x23;',
			'icon-locked' : '&#x22;',
			'icon-lock' : '&#x21;',
			'icon-busy' : '&#x46;',
			'icon-clock' : '&#x47;',
			'icon-pie' : '&#x48;',
			'icon-stats' : '&#x49;',
			'icon-bars' : '&#x4a;',
			'icon-bars-2' : '&#x4b;',
			'icon-target' : '&#x4c;',
			'icon-target-2' : '&#x4d;',
			'icon-bars-3' : '&#x4e;',
			'icon-calendar' : '&#x4f;',
			'icon-arrow-up-left' : '&#x50;',
			'icon-arrow-up' : '&#x51;',
			'icon-arrow-up-right' : '&#x52;',
			'icon-arrow-right' : '&#x53;',
			'icon-arrow-down-right' : '&#x54;',
			'icon-arrow-down' : '&#x55;',
			'icon-arrow-down-left' : '&#x56;',
			'icon-arrow-left' : '&#x57;',
			'icon-fire' : '&#x67;',
			'icon-lightbulb' : '&#x69;',
			'icon-untitled' : '&#x6a;',
			'icon-untitled-2' : '&#x6b;',
			'icon-untitled-3' : '&#x6e;',
			'icon-untitled-4' : '&#x70;',
			'icon-untitled-5' : '&#x6f;',
			'icon-untitled-6' : '&#x6c;',
			'icon-untitled-7' : '&#x6d;',
			'icon-untitled-8' : '&#x71;',
			'icon-untitled-9' : '&#x72;',
			'icon-untitled-10' : '&#x73;',
			'icon-untitled-11' : '&#x74;',
			'icon-untitled-12' : '&#x75;',
			'icon-untitled-13' : '&#x76;',
			'icon-untitled-14' : '&#x77;',
			'icon-untitled-15' : '&#x78;',
			'icon-untitled-16' : '&#x79;',
			'icon-untitled-17' : '&#x7a;',
			'icon-untitled-18' : '&#x7b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};