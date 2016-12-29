
(function() {

	const gridBtn = document.querySelector('.grid-btn');
	const body = document.querySelector('body');

	function toggleGrid(e) {
		e.preventDefault();

		body.classList.toggle('grid-line');

		if (body.classList.contains('grid-line')) {
			gridBtn.textContent = 'Grid Off'
		} else {
			gridBtn.textContent = 'Grid On';
		}
	}

	gridBtn.addEventListener('click', toggleGrid);



	// colors
	const colorSwatches = document.querySelectorAll('.colors-list__swatch');

	colorSwatches.forEach(swatch => {
		const color = swatch.dataset.color;
		swatch.style.backgroundColor = color;
	});

}());