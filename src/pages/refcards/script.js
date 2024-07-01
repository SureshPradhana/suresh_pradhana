
import { icons } from 'feather-icons';
document.addEventListener('DOMContentLoaded', () => {
	const codeBlocks = document.querySelectorAll('pre');

	codeBlocks.forEach(element => {
		const expandButton = document.createElement('button');
		expandButton.innerHTML = icons.maximize.toSvg({
			class: 'feather', width: '18px', height:
				'18px'
		});
		expandButton.classList.add('expand-button');
		const copyButton = document.createElement('button');
		copyButton.innerHTML = icons.copy.toSvg({
			class: 'feather', width: '18px', height:
				'18px'
		});
		copyButton.classList.add('copy-button');
		element.appendChild(expandButton);
		element.appendChild(copyButton);

		copyButton.addEventListener('click', () => {
			navigator.clipboard.writeText(element.querySelector('code').innerText);
		});

		expandButton.addEventListener('click', () => {
			element.classList.toggle('code-fullscreen');
			document.body.classList.toggle('body-no-scroll', element.classList.contains('code-fullscreen'));
		});
	});
});

