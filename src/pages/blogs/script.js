
import { icons } from 'feather-icons';

document.addEventListener('DOMContentLoaded', () => {
	const codeBlocks = document.querySelectorAll('pre');
	
	codeBlocks.forEach(element => {
		// Create expand button
		const expandButton = document.createElement('button');
		expandButton.innerHTML = icons.maximize.toSvg({
			class: 'feather',
			width: '18px',
			height: '18px'
		});
		expandButton.classList.add('expand-button');
		
		// Create copy button
		const copyButton = document.createElement('button');
		copyButton.innerHTML = icons.copy.toSvg({
			class: 'feather',
			width: '18px',
			height: '18px'
		});
		copyButton.classList.add('copy-button');
		
		element.appendChild(expandButton);
		element.appendChild(copyButton);
		
		// Copy button with visual feedback
		copyButton.addEventListener('click', () => {
			const codeText = element.querySelector('code').innerText;
			navigator.clipboard.writeText(codeText);
			
			// Change icon to checkmark
			copyButton.innerHTML = icons.check.toSvg({
				class: 'feather',
				width: '18px',
				height: '18px'
			});
			copyButton.classList.add('copied');
			
			// Reset after 2 seconds
			setTimeout(() => {
				copyButton.innerHTML = icons.copy.toSvg({
					class: 'feather',
					width: '18px',
					height: '18px'
				});
				copyButton.classList.remove('copied');
			}, 2000);
		});
		
		// Expand button with proper fullscreen
		expandButton.addEventListener('click', () => {
			const isFullscreen = element.classList.contains('code-fullscreen');
			
			if (isFullscreen) {
				// Exit fullscreen
				element.classList.remove('code-fullscreen');
				document.body.classList.remove('body-no-scroll');
				expandButton.innerHTML = icons.maximize.toSvg({
					class: 'feather',
					width: '18px',
					height: '18px'
				});
			} else {
				// Enter fullscreen
				element.classList.add('code-fullscreen');
				document.body.classList.add('body-no-scroll');
				expandButton.innerHTML = icons.minimize.toSvg({
					class: 'feather',
					width: '18px',
					height: '18px'
				});
			}
		});
	});
	
	// Close fullscreen on Escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			const fullscreenBlock = document.querySelector('pre.code-fullscreen');
			if (fullscreenBlock) {
				fullscreenBlock.classList.remove('code-fullscreen');
				document.body.classList.remove('body-no-scroll');
				const expandButton = fullscreenBlock.querySelector('.expand-button');
				if (expandButton) {
					expandButton.innerHTML = icons.maximize.toSvg({
						class: 'feather',
						width: '18px',
						height: '18px'
					});
				}
			}
		}
	});
});
