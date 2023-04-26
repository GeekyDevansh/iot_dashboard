import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function Body() {

const [data,setData]=useState([]);

const getData= async ()=>{
    await axios.get('https://iot-dashboard.onrender.com/getdata').then((res)=>{setData(res.data)}).catch((err)=>{console.log(err)});
}

useEffect(() => {
    getData();
}, [])

console.log(data);
const newone =[];
var serie = data[data.length -1];
const final = serie?.value;
console.log(final);
const ffinal = Math.abs(((final*100 + 85400000) / 68400000) * 100);
console.log(ffinal)
newone.push(Math.round(ffinal))

  const [options,setOptions]=useState({
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
         hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#FF0000'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Tank Level (in %)'],
  })

  return (
    <>
      <div className="bg-gray-100 flex justify-center h-screen ">
        <div className="bg-white w-1/3 h-1/2 mt-20 rounded-2xl shadow-lg flex justify-center items-center ">
        <ReactApexChart options={options} series={newone} type="radialBar" height={350} />
        </div>
      </div>
    </>
  );
}
