import { useState } from "react";
import { View, Text} from 'react-native';
import Slider from "@react-native-community/slider";

export default function MeuSlider() {
    const [valor, setValor] = useState(0);

    return (
        <View>
            <Text>
                Volume : {Math.round(valor * 100)}%
            </Text>
            <Slider
            value={valor}
            onValueChange={setValor}
            minimumValue={0}
            maximumValue={1}
            step={0.01}
            minimumTrackTintColor="lightblue"
            maximumTrackTintColor="lightgreen"
            thumbTintColor="red"
            />
        </View>
    )
}