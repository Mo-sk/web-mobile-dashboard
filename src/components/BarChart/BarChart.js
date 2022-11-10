import React from "react";
import {Bar} from 'react-chartjs-2'
// eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart() {
    const data = {
        labels: ['Red', 'Blue', 'Green', 'Yellow'],
        datasets: [
            {
                label: "Couleur préférées en France",
                data: ['25', '21', '24', '13'],
                backgroundColor: ["red"]
            }
        ]
    }

    return (
        <Bar data={data}/>
    );
}

export default BarChart;