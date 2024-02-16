import { h, createElement, render } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

render(createElement(() => {
	const sufix = [
		'localhost',
		'zuntini.ibm.com'
	].includes(document.location.hostname)
		? '/'
		: '/kaltura-player-and-csp-headers/';
	return html`
		<cds-header aria-label="IBM Platform Name">
			<cds-header-name href="${sufix}" prefix="IBM">
				Player Test
			</cds-header-name>
			<cds-header-nav menu-bar-label="IBM [Platform]">
				<cds-header-nav-item href="${sufix}">
					Kaltura NO CSP
				</cds-header-nav-item>
			</cds-header-nav>
			<cds-header-nav menu-bar-label="IBM [Platform]">
				<cds-header-nav-item href="${sufix}kaltura-with-safe-csp.html">
					Kaltura With Safe CSP
				</cds-header-nav-item>
			</cds-header-nav>
			<cds-header-nav menu-bar-label="IBM [Platform]">
				<cds-header-nav-item href="${sufix}kaltura-with-unsafe-csp.html">
					Kaltura With UnSafe CSP
				</cds-header-nav-item>
			</cds-header-nav>
			<cds-header-nav menu-bar-label="IBM [Platform]">
				<cds-header-nav-item href="${sufix}youtube-with-csp.html">
					YouTube With CSP
				</cds-header-nav-item>
			</cds-header-nav>
		</cds-header>
	`;
}), document.getElementById('header'));
