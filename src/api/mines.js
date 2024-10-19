import { api } from '.';

export const getMines = async () => {
  try {
    const response = await api.get('/mines/');
    return response.data;
  } catch (error) {
    console.error('Error fetching mines:', error);
    throw error;
  }
};

export const getSubscribedMines = async () => {
  try {
    const response = await api.get('/subscriptions/mines/');
    return response.data;
  } catch (error) {
    console.error('Error fetching subscribed mines:', error);
    throw error;
  }
};

export const updateMineSubscriptions = async (mineIds) => {
  try {
    const response = await api.post('/subscriptions/mines/', {
      mine_ids: mineIds,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating mine subscriptions:', error);
    throw error;
  }
};
