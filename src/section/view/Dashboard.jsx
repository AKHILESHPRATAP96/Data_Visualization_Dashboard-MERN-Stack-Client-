import React, { useEffect, useState } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import BarChart from '../../components/BarChart';
import DoughnutChart from '../../components/DoughnutChart';
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import PolarChart from '../../components/PolarChart';
import RadarChart from '../../components/RadarChart';
import NavBar from '../../components/Navbar/Navbar';


function Dashboard() {

  // State to save data received from the server
  const [mainData, setMainData] = useState([]);

  // Asynchronous function to fetch data from server and update the state
  const getDataFromDB = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/all");
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  // Calling the above function on first render
  useEffect(() => {
    getDataFromDB();
  }, []);

  return (
    <div className='round-1 '>
      <NavBar setMainData={setMainData} getDataFromDB={getDataFromDB} />
      <Container fluid >
        <Row className='pt-3'>
          <Col xs={6}><DoughnutChart data={mainData} /></Col>
          <Col xs={6}><LineChart data={mainData} /></Col>
        </Row>
        <Row className='pt-3'>
          <Col xs={6}><BarChart data={mainData} /></Col>
          <Col xs={6}><RadarChart data={mainData} /></Col>
        </Row>
        <Row className='pt-3'>
          <Col xs={6}><PolarChart data={mainData} /></Col>
          <Col xs={6}><PieChart data={mainData} /></Col>
        </Row>


      </Container>
    </div>
  );
}

export default Dashboard;
