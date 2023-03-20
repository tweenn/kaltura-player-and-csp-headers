import { h, createElement, render } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

render(createElement(() => {
	const sufix = document.location.hostname === 'localhost' ? '/' : '/kaltura-player-and-csp-headers/';
	return html`
		<bx-header aria-label="IBM Platform Name">
			<bx-header-name href="${sufix}" prefix="IBM">
				Player Test
			</bx-header-name>
			<bx-header-nav menu-bar-label="IBM [Platform]">
				<bx-header-nav-item href="${sufix}">
					Kaltura NO CSP
				</bx-header-nav-item>
			</bx-header-nav>
			<bx-header-nav menu-bar-label="IBM [Platform]">
				<bx-header-nav-item href="${sufix}kaltura-with-csp.html">
					Kaltura With CSP
				</bx-header-nav-item>
			</bx-header-nav>
			<bx-header-nav menu-bar-label="IBM [Platform]">
				<bx-header-nav-item href="${sufix}youtube-with-csp.html">
					YouTube With CSP
				</bx-header-nav-item>
			</bx-header-nav>
		</bx-header>
	`;
}), document.getElementById('header'));
