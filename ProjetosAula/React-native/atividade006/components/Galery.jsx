import { View, ScrollView, Image } from "react-native";

export default function Galerry() {

    return (
        <ScrollView horizontal style={{ flex: 1}}>
            <View
                style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "#E1BEE7",
                }}
            >
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1358435131476692994/KtQ-uRE3_400x400.jpg",
                    }}
                    style={{ width: 250, height: 250 }}
                />
            </View>

            <View
                style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "#E1BEE7",
                }}
            >
                <Image
                    source={{
                        uri: "https://th.bing.com/th/id/OIP.awslnxzJWZk3wOczA2YJxgAAAA?w=416&h=449&rs=1&pid=ImgDetMain",
                    }}
                    style={{ width: 250, height: 250 }}
                />
            </View>

            <View
                style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "#E1BEE7",
                }}
            >
                <Image
                    source={{
                        uri: "https://i.pinimg.com/originals/03/ac/9a/03ac9a1488c544cce3ac4e61d586cae3.jpg",
                    }}
                    style={{ width: 250, height: 250 }}
                />
            </View>

            <View
                style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "#E1BEE7",
                }}
            >
                <Image
                    source={{
                        uri: "https://th.bing.com/th/id/OIP.Z6W_1xNB56ufvFiKeZMb8wAAAA?w=250&h=246&rs=1&pid=ImgDetMain",
                    }}
                    style={{ width: 250, height: 250 }}
                />
            </View>

                        <View
                style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "#E1BEE7",
                }}
            >
                <Image
                    source={{
                        uri: "https://i.imgur.com/TkxaHoD.jpg",
                    }}
                    style={{ width: 250, height: 250 }}
                />
            </View>

                                    <View
                style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "#E1BEE7",
                }}
            >
                <Image
                    source={{
                        uri: "https://th.bing.com/th/id/OIP.7u7e2VhtHayAkmIpVaEEawHaG1?rs=1&pid=ImgDetMain",
                    }}
                    style={{ width: 250, height: 250 }}
                />
            </View>
        </ScrollView>
    )
}