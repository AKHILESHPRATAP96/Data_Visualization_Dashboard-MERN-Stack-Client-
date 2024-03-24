import React from 'react';
import { Card } from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({ data }) => {

    let uniquePestle = [];

    data.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    })

    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: data.filter((i) => i.pestle === item).length
        }
    })

    return (
        <Card style={{ width: '45vw' }}>
            <Card.Body>
                <Card.Title>Radar Chart</Card.Title>
                <div style={{ height: '50vh' }}>
                    <Radar
                        data={{
                            labels: uniquePestle,
                            datasets: [
                                {
                                    label: "Projects ",
                                    data: pestleCount.map(i => i.count),
                                    borderWidth: 1,
                                },
                            ]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    type: 'linear',
                                    beginAtZero: true
                                },
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Number of projects as per pestle",
                                }
                            }
                        }}
                    />
                </div>
            </Card.Body>
        </Card>
    )
}

export default RadarChart;
