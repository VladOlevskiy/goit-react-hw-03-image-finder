import React, { Component } from 'react';
import {
  ImageGalleryLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem-styled';

export class ImageGalleryItem extends Component {
  handleClick = evt => {
    const idCurrent = evt.currentTarget.getAttribute('data-key');
    this.props.onClick(idCurrent);
  };

  render() {
    return (
      <>
        {this.props.images.map(image => {
          return (
            <ImageGalleryLi
              data-key={image.id}
              key={image.id}
              onClick={this.handleClick}
            >
              <ImageGalleryItemImage src={image.webformatURL} alt="" />
            </ImageGalleryLi>
          );
        })}
      </>
    );
  }
}

// export const ImageGalleryItem = ({ images, aa }) => {
//   const bb = evt => {
//     aa();
//     const idCurrent = evt.currentTarget.getAttribute('data-key');
//     this.props.setState({ idForModal: idCurrent });
//   };

//   return (
//     <>
//       {images.map(image => {
//         return (
//           <ImageGalleryLi data-key={image.id} key={image.id} onClick={bb}>
//             <ImageGalleryItemImage src={image.webformatURL} alt="" />
//           </ImageGalleryLi>
//         );
//       })}
//     </>
//   );
// };
