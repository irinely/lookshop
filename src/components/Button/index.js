import React from 'react';
import {ReactComponent as Plus} from '../../images/plus.svg';
import './index.scss';

export default class Button extends React.Component {
	render() {
		const {tagName: TagName = 'button', text, type, href, large, small, plus} = this.props;

		return (
			<TagName
				className={'button' + (large ? ' large' : '') + (plus ? ' plus' : '') + (small ? ' small' : '')}
				type={type}
				href={href}
			>
				{text && (
					<span>
						{text}
					</span>
				)}
				{plus && <Plus/>}
			</TagName>
		);
	}
}
