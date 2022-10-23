import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GetImg } from '../services/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { AppWrap } from './App-styled';
import { Modal } from './Modal/Modal';
import { ImgModal } from './ImgModal/ImgModal';
import { Button } from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isModalOpen: false,
    idForModal: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('перший пошук');
      const images = await GetImg(this.state.searchQuery);
      this.setState({
        page: 1,
        images: images,
      });
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      console.log('другий пошук');
      const images = await GetImg(this.state.searchQuery, this.state.page);
      this.setState(prevState => ({
        images: prevState.images.concat(images),
      }));
    }
  }

  onClick = values => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      idForModal: values,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = values => {
    if (values.searchQuery === '') {
      Notify.failure('Enter something');
      console.log('aaa');
      return;
    }
    this.setState({
      searchQuery: values.searchQuery,
    });
  };

  render() {
    return (
      <AppWrap>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery
            item={
              <ImageGalleryItem
                images={this.state.images}
                onClick={this.onClick}
              />
            }
          />
        )}
        {this.state.isModalOpen && (
          <Modal onClose={this.onClick}>
            {<ImgModal images={this.state} />}
          </Modal>
        )}
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
      </AppWrap>
    );
  }
}
