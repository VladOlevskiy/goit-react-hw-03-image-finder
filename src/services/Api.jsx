import axios from 'axios';

export const GetImg = async (searchQuery, page = 1) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=29773664-bbac3ad1105fd49531e6a6409&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
