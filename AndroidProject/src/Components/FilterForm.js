// FilterForm.js (or wherever you're using <label> and <div>)

import React from "react";
import { Text, View, TextInput } from "react-native";

// Updated FilterForm component using React Native components
const FilterForm = ({ filters, onFilterChange }) => {
  return (
    <View className="mb-8">
      <View className="mb-4">
        {/* Use Text for the label */}
        <Text className="text-lg text-gray-800">Date Range</Text>
        <TextInput
          className="border-2 border-gray-300 rounded p-2"
          placeholder="Enter start year"
          value={filters.dateRange[0].toString()}
          onChangeText={(text) =>
            onFilterChange({ dateRange: [parseInt(text), filters.dateRange[1]] })
          }
        />
        <TextInput
          className="border-2 border-gray-300 rounded p-2 mt-2"
          placeholder="Enter end year"
          value={filters.dateRange[1].toString()}
          onChangeText={(text) =>
            onFilterChange({ dateRange: [filters.dateRange[0], parseInt(text)] })
          }
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg text-gray-800">Revenue Range</Text>
        <TextInput
          className="border-2 border-gray-300 rounded p-2"
          placeholder="Min Revenue"
          value={filters.minRevenue.toString()}
          onChangeText={(text) =>
            onFilterChange({ minRevenue: parseInt(text) })
          }
        />
        <TextInput
          className="border-2 border-gray-300 rounded p-2 mt-2"
          placeholder="Max Revenue"
          value={filters.maxRevenue.toString()}
          onChangeText={(text) =>
            onFilterChange({ maxRevenue: parseInt(text) })
          }
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg text-gray-800">Net Income Range</Text>
        <TextInput
          className="border-2 border-gray-300 rounded p-2"
          placeholder="Min Net Income"
          value={filters.minNetIncome.toString()}
          onChangeText={(text) =>
            onFilterChange({ minNetIncome: parseInt(text) })
          }
        />
        <TextInput
          className="border-2 border-gray-300 rounded p-2 mt-2"
          placeholder="Max Net Income"
          value={filters.maxNetIncome.toString()}
          onChangeText={(text) =>
            onFilterChange({ maxNetIncome: parseInt(text) })
          }
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg text-gray-800">Sort By</Text>
        {/* Add sorting options here */}
      </View>
    </View>
  );
};

export default FilterForm;
