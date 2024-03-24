import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function BarChart({ data }) {

    let uniqueSectors = [];

    //using forEach because it doesn't return any array and we are adding unique sector names to an array
    data.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })

    // counting the total number of projects in each sector uniquely
    const sectorCount = uniqueSectors.map((item) => {
        return {
            sector: item,
            count: data.filter((i) => i.sector === item).length
        }
    })

    // testing 
    // let unique = []
    // data.forEach((i) => {
    //     if (!unique.includes(i.source) && i.source !== "") {
    //         unique.push(i.source);
    //     }
    //     console.log('this is  unique', unique)
    // })

    //end 
    return (
        <Card style={{ width: '45vw' }}>
            <Card.Body>
                <Card.Title>Bar Chart</Card.Title>
                <div style={{ height: '50vh' }}>
                    <Bar
                        data={{
                            labels: uniqueSectors.map(e => e),
                            datasets: [
                                {
                                    label: "Total Projects",
                                    data: sectorCount.map(e => e.count)
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Number of projects in each sector",
                                }
                            }
                        }}
                    />
                </div>
            </Card.Body>
        </Card>
    )
}

export default BarChart;
