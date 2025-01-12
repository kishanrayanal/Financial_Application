import axios from 'axios';

// Function to fetch company prices
const fetchCompanyPrices = async (symbols) => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=3gZHtIKUwck0H7bh0dCkkwxI0S2ccJ2O`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching company prices:', error.response?.data || error.message);
    throw error;
  }
};

// Function to fetch income statement data
const fetchIncomeStatement = async (symbol) => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?period=annual&apikey=3gZHtIKUwck0H7bh0dCkkwxI0S2ccJ2O`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching income statement for ${symbol}:`, error.response?.data || error.message);
    throw error;
  }
};

export { fetchCompanyPrices, fetchIncomeStatement };
