import axios from 'axios';
// import React from 'react';

// const key = '29773664-bbac3ad1105fd49531e6a6409';
// const baseUrl = `https://pixabay.com/api/?key=29773664-bbac3ad1105fd49531e6a6409`;
// const options = `&image_type=photo&orientation=horizontal&safesearch=true`;

// axios.defaults.baseURL = `https://pixabay.com/api/?key=29773664-bbac3ad1105fd49531e6a6409`;

export const GetImg = async (searchQuery, page = 1) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=29773664-bbac3ad1105fd49531e6a6409&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

//   async function fetchImages(text) {
//   return await axios.get(
//     `${baseUrl}&q=${text}${options}&page=${page}&per_page=${limit}`
//   );
// };

//  if (prevState.searchQuery !== this.state.searchQuery) {
//    console.log('1');
//    const images = await GetImg(this.state.searchQuery, this.state.page);
//    this.setState({
//      page: 1,
//      images: images,
//    });
//  }

//  if (
//    prevState.searchQuery === this.state.searchQuery &&
//    prevState.page !== this.state.page
//  ) {
//    console.log('2');
//    const images = await GetImg(this.state.searchQuery, this.state.page);
//    if (prevState.images !== this.state.images) {
//      return;
//    }
//    this.setState(prevState => ({
//      images: prevState.images.concat(images),
//    }));
//  }
