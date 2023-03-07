import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-2.0, -12.0, 0],
                center: [-5, -3],
                scale: 1600
            }}
            style={{width:"100%", height:"100%"}}
        >
            <Geographies
                geography="/features.json"
                fill="#bfbfbf"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[3.45, 6.22977]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 0,
                    strokeLinecap: "round"
                }}
            >
                <text fontSize={22} fontWeight={500} x="-5" textAnchor="end" alignmentBaseline="middle" fill="black">
                    {"Ghana"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;