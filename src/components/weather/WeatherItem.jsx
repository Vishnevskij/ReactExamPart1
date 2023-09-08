import React from "react";
import { useMemo } from "react";
import {useFetchData} from "../../hooks/useFetchData";
import { useState } from "react";
import { useEffect } from "react";


export const WeatherItem = ({data}) => {
  const {location, current, forecast} = data;
  
  console.log(data, "DATA!!!!");

  return (
<div>
<h2>DIV</h2>
    <h3>Hello : <h1>{location.name}</h1></h3>
</div>
    
  )
}
