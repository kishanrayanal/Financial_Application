import React from "react";
import { View, Text, ScrollView } from "react-native";

// Define Table component
const Table = ({ data }) => {
  return (
    <ScrollView horizontal className="overflow-x-auto">
      <View className="w-full">
        {/* Table Header */}
        <View className="flex flex-row bg-gray-200 p-2">
          <View className="flex-1 p-1">
            <Text className="font-semibold text-center">Date</Text>
          </View>
          <View className="flex-1 p-1">
            <Text className="font-semibold text-center">Revenue</Text>
          </View>
          <View className="flex-1 p-1">
            <Text className="font-semibold text-center">Net Income</Text>
          </View>
          <View className="flex-1 p-1">
            <Text className="font-semibold text-center">Gross Profit</Text>
          </View>
          <View className="flex-1 p-1">
            <Text className="font-semibold text-center">EPS</Text>
          </View>
          <View className="flex-1 p-1">
            <Text className="font-semibold text-center">Operating Income</Text>
          </View>
        </View>

        {/* Table Rows */}
        {data.map((item, index) => (
          <View key={index} className="flex flex-row border-b">
            <View className="flex-1 p-2">
              <Text className="text-center">{item.date}</Text>
            </View>
            <View className="flex-1 p-2">
              <Text className="text-center">{item.revenue}</Text>
            </View>
            <View className="flex-1 p-2">
              <Text className="text-center">{item.netIncome}</Text>
            </View>
            <View className="flex-1 p-2">
              <Text className="text-center">{item.grossProfit}</Text>
            </View>
            <View className="flex-1 p-2">
              <Text className="text-center">{item.eps}</Text>
            </View>
            <View className="flex-1 p-2">
              <Text className="text-center">{item.operatingIncome}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Table;
