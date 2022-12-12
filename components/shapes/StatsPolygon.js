import { View, Text } from 'react-native'
import React from 'react'
import {  VictoryChart, VictoryTheme,
    VictoryArea,VictoryLabel,VictoryPolarAxis,
    VictoryGroup
  } from "victory-native";
  

const StatsPolygon = ({cData=null}) => {
 const characterData = cData;

 const getMaxima =(data)=> {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  const processData= (data)=> {
    const maxByGroup = getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

 
  const maxima = getMaxima(characterData);
  const data = processData(characterData);


  return (
    <View style={{transform: [{ rotate: "-30deg" }]}}>
        <VictoryChart polar
          
          theme={VictoryTheme.material}
          domain={{ y: [ 0, 1 ] }}
          style={{}}
        >
          <VictoryGroup colorScale={["#1C3C60", "#553EB8", ]}
            style={{ data: { fillOpacity: 0.3, strokeWidth: 1 }  }}
            
          >
            {data.map((data, i) => {
              return <VictoryArea key={i} data={data}/>;
            })}
          </VictoryGroup>
        {
          Object.keys(maxima).map((key, i) => {
            return (
              <VictoryPolarAxis key={i} dependentAxis
                style={{
                  axisLabel: { padding: 10 },
                  axis: { stroke: "none" },
                  grid: { stroke: "grey", strokeWidth: 0, opacity: 0 },
                  tickLabels: {fontSize: 0, padding: 15}
                }}
                tickLabelComponent={
                  <VictoryLabel labelPlacement="vertical"/>
                }
                labelPlacement="perpendicular"
                axisValue={i + 1} label={key}
                tickFormat={(t) => Math.ceil(t * maxima[key])}
                tickValues={[0.25, 0.5, 0.75]}
                
              />
            );
          })
        }
          <VictoryPolarAxis
            labelPlacement="parallel"
            tickFormat={() => ""}
            style={{
              axis: { stroke: "none" },
              grid: { stroke: "grey", opacity: 0 }
            }}
          />

        </VictoryChart>
      </View>
  )
}

export default StatsPolygon