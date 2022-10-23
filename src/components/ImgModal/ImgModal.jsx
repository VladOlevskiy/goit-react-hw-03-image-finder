import React, { Component } from 'react';

export class ImgModal extends Component {
  render() {
    const xx = this.props.images.idForModal;
    const yy = this.props.images.images;
    let aa;
    yy.forEach(image => {
      if (image.id === Number(xx)) {
        return (aa = `${image.largeImageURL}`);
      }
    });

    return <img src={aa} width="800px" alt=""></img>;
  }
}
