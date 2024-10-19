import { api } from '.';

export const getCompanies = async () => {
  try {
    const response = await api.get('/companies/');
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

export const getSubscribedCompanies = async () => {
  try {
    const response = await api.get('/subscriptions/companies/');
    return response.data;
  } catch (error) {
    console.error('Error fetching subscribed companies:', error);
    throw error;
  }
};

export const updateCompanySubscriptions = async (companyIds) => {
  try {
    const response = await api.post('/subscriptions/companies/', {
      company_ids: companyIds,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating company subscriptions:', error);
    throw error;
  }
};
