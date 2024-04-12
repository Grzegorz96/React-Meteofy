import React from "react";
import {
    PolandMapSVG,
    MapItemsLayer,
    MapContainer,
    MapItem,
    WeaterIcon,
    Temp,
    DataWrapper,
    Text,
} from "./PolandMap.styles";
import { polishCitiesData } from "../../utils/constants/polishCitiesData";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { map } from "../../assets/images/poland";

export default function PolandMap({ fetchedCitiesData }) {
    return (
        <MapContainer>
            <MapItemsLayer>
                {fetchedCitiesData.list.map((city, index) => (
                    <MapItem
                        key={city.id}
                        $left={polishCitiesData[index].left}
                        $top={polishCitiesData[index].top}
                    >
                        <ToastContainer />
                        <DataWrapper>
                            <Temp>{Math.round(city.main.temp)}°C</Temp>
                            <WeaterIcon $icon={city.weather[0].icon} />
                        </DataWrapper>
                        <Text>{polishCitiesData[index].name}</Text>
                    </MapItem>
                ))}
            </MapItemsLayer>
            <PolandMapSVG />
            {/* {map} */}
        </MapContainer>
    );
}
