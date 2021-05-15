import ClipboardJS from 'clipboard';

function set_button_success(button) {
	button.classList.add('is-success')
	button.querySelector('[data-role="text"]').innerText = 'Copied!'
}

function reset_button(button) {
	button.classList.remove('is-success')
	button.querySelector('[data-role="text"]').innerText = button.dataset.originalText
}

export function listen_copy_on_selector(selector) {
	const clipboard = new ClipboardJS(selector)

	clipboard.on('success', function(event) {
		event.clearSelection()
		let button = event.trigger
		button.disabled = true
		set_button_success(button)
		setTimeout(function () {
			reset_button(button)
			button.disabled = false
		}, 1500)
	})
}
