import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const App = () => {
  const [companyPrices, setCompanyPrices] = useState([]);
  const [incomeStatements, setIncomeStatements] = useState({});
  const [symbols, setSymbols] = useState('AAPL,MSFT');  // Default companies
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPrices = async () => {
      setLoading(true);
      try {
        // Fetch prices for multiple companies
        const prices = await fetchCompanyPrices(symbols);
        setCompanyPrices(prices);

        // Fetch income statements for each company
        for (const company of prices) {
          const income = await fetchIncomeStatement(company.symbol);
          setIncomeStatements((prevStatements) => ({
            ...prevStatements,
            [company.symbol]: income,
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getPrices();
  }, [symbols]);

  const fetchCompanyPrices = async (symbols) => {
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=3gZHtIKUwck0H7bh0dCkkwxI0S2ccJ2O`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching company prices:', error);
      return [];
    }
  };

  const fetchIncomeStatement = async (symbol) => {
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?period=annual&apikey=3gZHtIKUwck0H7bh0dCkkwxI0S2ccJ2O`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching income statement for ${symbol}:`, error);
      return [];
    }
  };

  const handleSymbolChange = (text) => {
    setSymbols(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company Financial Data</Text>

      <TextInput
        style={styles.input}
        value={symbols}
        onChangeText={handleSymbolChange}
        placeholder="Enter company symbols (comma separated)"
      />

      <TouchableOpacity style={styles.button} onPress={() => setSymbols(symbols)}>
        <Text style={styles.buttonText}>Fetch Data</Text>
      </TouchableOpacity>

      {loading && <Text>Loading...</Text>}

      {/* Prices Table */}
      <FlatList
        data={companyPrices}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.subtitle}>{item.symbol} - Income Statement</Text>
            <FlatList
              data={incomeStatements[item.symbol]}
              keyExtractor={(entry) => entry.date}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.text}>Date: {item.date}</Text>
                  <Text style={styles.text}>Revenue: ${item.revenue}</Text>
                  <Text style={styles.text}>Net Income: ${item.netIncome}</Text>
                  <Text style={styles.text}>EPS: {item.eps}</Text>
                  <Text style={styles.text}>Operating Income: ${item.operatingIncome}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default App;
