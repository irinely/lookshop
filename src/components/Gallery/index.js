import React from 'react';
import './index.scss';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActiveImage: 0
		}
	}

	onClickImage = (index) => {
		this.setState({
			isActiveImage: index
		})
	};

	render() {
		const {images} = this.props;

		return (
			<div className="gallery">
				<div className="gallery__big-image">
					<img src={process.env.PUBLIC_URL + images[this.state.isActiveImage]} alt=""/>
				</div>
				<div className="gallery__previews">
					{images.map((image, index) =>
						<div key={image} className="gallery__preview">
							<img src={process.env.PUBLIC_URL + image} onClick={() => this.onClickImage(index)} alt=""/>
						</div>
					)}
				</div>
			</div>
		);
	}
}
