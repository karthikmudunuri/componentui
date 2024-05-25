// /src/utils/fetchGist.ts

import axios from 'axios';

export const fetchGist = async (gistId: string) => {
  try {
    const response = await axios.get(`https://api.github.com/gists/${gistId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Gist:', error);
    return null;
  }
};
