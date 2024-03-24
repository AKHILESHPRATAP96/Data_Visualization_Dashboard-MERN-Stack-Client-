import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "../Navbar/Nav.css"

const Sector =
    [
        "Energy",
        "Environment",
        "Government",
        "Aerospace & defence",
        "Manufacturing",
        "Retail",
        "Financial services",
        "Support services",
        "Information Technology",
        "Healthcare",
        "Food & agriculture",
        "Automotive",
        "Construction",
        "Tourism & hospitality"
    ]

let region = ['Northern America', 'Central America', 'World', 'Western Africa', 'Western Asia', 'Eastern Europe', 'Central Africa', 'Northern Africa', 'Southern Africa', 'Southern Asia', 'Central Asia', 'Eastern Asia', 'South America', 'South-Eastern Asia', 'Eastern Africa', 'Europe', 'Western Europe', 'Northern Europe', 'Southern Europe', 'Oceania', 'Africa', 'Asia']

const topic = ['gas', 'oil', 'consumption', 'market', 'gdp', 'war', 'production', 'export', 'battery', 'biofuel', 'policy', 'economy', 'strategy', 'robot', 'growth', 'economic', 'energy', 'food', 'administration', 'unemployment', 'trade', 'demand', 'economic growth', 'industry', 'capital', 'worker', 'tension', 'terrorism', 'transport', 'peak oil', 'vehicle', 'tourist', 'artificial intelligence', 'climate', 'power', 'crisis', 'ice', 'population', 'politics', 'business', 'work', 'coal', 'gamification', 'finance', 'interest rate', 'risk', 'inflation', 'asylum', 'resource', 'plastic', 'electricity', 'bank', 'gasoline', 'car', 'money', 'technology', 'aquaculture']

const pestle = ['Industries', 'Environmental', 'Economic', 'Political', 'Technological', 'Organization', 'Healthcare', 'Social', 'Lifestyles']
function NavBar({ setMainData, getDataFromDB }) {

    const handleYearData = async (year) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/year/${year}`);
            setMainData(response.data.data);
        } catch (err) {
            console.log('cannot fetch');
        }
    };

    const handleSector = async (sector) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/sector/${sector}`);
            setMainData(response.data.data);
        } catch (err) {
            console.log('cannot fetch');
        }
    };

    const handleTopic = async (topic) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/topic/${topic}`);
            setMainData(response.data.data);
        } catch (err) {
            console.log('cannot fetch');
        }
    };
    const handleRegion = async (region) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/region/${region}`);
            setMainData(response.data.data);
        } catch (err) {
            console.log('cannot fetch');
        }
    };

    const handlePestle = async (region) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/pestle/${region}`);
            setMainData(response.data.data);
        } catch (err) {
            console.log('cannot fetch');
        }
    };


    function handleReset() {

        getDataFromDB()
    }

    return (
        <Navbar expand="lg" bg="secondary" variant="dark" className='pb-2 rounded-1  ' >
            <Container className='px-2'>
                <Navbar.Brand className='fs-3 text-center fw-bold' >Data Virtualization Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                            </svg>
                        </div>
                        {/* year filter */}
                        <NavDropdown title="year" id="basic-nav-dropdown" >
                            <NavDropdown.Item onClick={() => handleYearData(2016)}>2016</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleYearData(2017)}>2017</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleYearData(2018)}>2018</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleYearData(2019)}>2019</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleYearData(2020)}>2020</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleYearData(2021)}>2021</NavDropdown.Item>

                        </NavDropdown>
                        {/* sector filter */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-building-fill" viewBox="0 0 16 16">
                                <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                            </svg>
                        </div>
                        <NavDropdown title="Sector" id="basic-nav-dropdown"  >
                            {Sector.map(x => (
                                <NavDropdown.Item key={x} onClick={() => handleSector(x)}>{x}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        {/* topic filter */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-substack" viewBox="0 0 16 16">
                                <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z" />
                            </svg>
                        </div>
                        <NavDropdown title="Topic" id="basic-nav-dropdown"  >
                            {topic.map(x => (
                                <NavDropdown.Item key={x} onClick={() => handleTopic(x)}>{x}</NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        {/* region filter */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                            </svg>
                        </div>
                        <NavDropdown title="Region" id="basic-nav-dropdown"  >
                            {region.map(x => (
                                <NavDropdown.Item key={x} onClick={() => handleRegion(x)}>{x}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        {/* pestle filter */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                            </svg>
                        </div>
                        <NavDropdown title="pestle" id="basic-nav-dropdown"  >
                            {pestle.map(x => (
                                <NavDropdown.Item key={x} onClick={() => handlePestle(x)}>{x}</NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <div style={{ paddingTop: 5 }}> <Button className="rounded-pill" variant="danger" size="sm" onClick={() => { handleReset() }}>Reset</Button></div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
