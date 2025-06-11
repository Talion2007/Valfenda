import { SafeAreaView, View, Text, ScrollView } from "react-native";
export default function ExemploScrollView() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontsize: 20, fontWeight: "bold", marginBottom: 16 }}>
          {" "}
          Minha Super Lista Rolável
        </Text>
        {[...Array(20).keys()].map((n) => (
          <View
            key={n}
            style={{
              backgroundColor: n % 2 === 0 ? "#D1C4E9" : "#B2DFDB",
              padding: 20,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <Text style={{ fontsize: 16 }}> Item {n + 1} </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
