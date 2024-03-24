import React from 'react';
import { Card } from 'react-bootstrap';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = ({ data }) => {

    let uniqueSectors = [];
    //using forEach because it doesn't return any array
    data.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })

    let uniqueTopics = [];
    data.forEach((i) => {
        if (!uniqueTopics.includes(i.topic) && i.topic !== "") {
            uniqueTopics.push(i.topic);
        }
    })

    let uniqueRegion = [];
    data.forEach((i) => {
        if (!uniqueRegion.includes(i.region) && i.region !== "") {
            uniqueRegion.push(i.region);
        }
    })

    let uniqueCountry = [];
    data.forEach((i) => {
        if (!uniqueCountry.includes(i.country) && i.country !== "") {
            uniqueCountry.push(i.country);
        }
    })

    let uniqueSource = [];
    data.forEach((i) => {
        if (!uniqueSource.includes(i.source) && i.source !== "") {
            uniqueSource.push(i.source);
        }
    })

    let uniquePestle = [];
    data.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    })

    const label = ["Country", "Region", "Source", "Topic", "Sector", "Pestle"];

    return (
        <Card style={{ width: '45vw' }}>
            <Card.Body>
                <Card.Title>Polar Area Chart</Card.Title>
                <div style={{ height: '50vh' }}>
                    <PolarArea
                        data={{
                            labels: label,
                            datasets: [
                                {
                                    label: "Total: ",
                                    data: [uniqueCountry.length, uniqueRegion.length, uniqueSource.length, uniqueTopics.length, uniqueSectors.length, uniquePestle.length],
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
                                    text: "Total Numbers",
                                }
                            }
                        }}
                    />
                </div>
            </Card.Body>
        </Card>
    )
}

export default PolarChart;
