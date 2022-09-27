import './credit.css'

import { Button } from '@wordpress/components';

const Credit = () => (
	<details>
	<summary><strong>{ credit.links }</strong></summary>
		<span className="span1Style">
			<div>
				{ credit.plugin_version } | 
				<a className="aStyle" href={ credit.faq } target="_blank" rel="noopener noreferrer">FAQ</a> | <a className="aStyle" href={ credit.support } target="_blank" rel="noopener noreferrer">Support Forums</a> | <a className="aStyle" href={ credit.review } target="_blank" rel="noopener noreferrer">Reviews</a>
			</div>
			<div>
				<a className="aStyle" href={ credit.translate } target="_blank" rel="noopener noreferrer">
				{ credit.translate_text }
				</a> | <a className="aStyle" href={ credit.facebook } target="_blank" rel="noopener noreferrer"><span class="dashicons dashicons-facebook"></span></a> | <a className="aStyle" href={ credit.twitter } target="_blank" rel="noopener noreferrer"><span class="dashicons dashicons-twitter"></span></a> | <a className="aStyle" href={ credit.youtube } target="_blank" rel="noopener noreferrer"><span class="dashicons dashicons-video-alt3"></span></a>
			</div>
			<div className="boxStyle">
				<h3>{ credit.donate_text }</h3>
				<div className="divStyle">
					<span className="span2Style">Plugin Author</span> <span className="span1Style">Katsushi Kawamori</span>
				</div>
				<Button
					className="button button-large"
					href={ credit.donate }
					target="_blank"
				>
				{ credit.donate_button }
				</Button>
			</div>
		</span>
	</details>
);

export default Credit;
