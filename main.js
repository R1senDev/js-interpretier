let inp = document.getElementById('inp');
let out = document.getElementById('out');
let btn = document.getElementById('btn');

function setOut(str) {
	out.value = `=> ${str}`;
}

function compile() {
	let fun = new Function(inp.value);
	try {
		setOut(fun());
	} catch (SyntaxError) {
		setOut('Something went wrong. Find out more in the Developer console (F12 key, Console tab).');
		fun();
	}
}

function onRichTextResize() {
	btn.offsetHeight = inp.offsetHeight;
}