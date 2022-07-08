import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import { display, width } from '@mui/system';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function Resume() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return  <div id='resume'>
   
    <Box sx={{
        backgroundColor: '#FFE5E5', paddingTop: 5, paddingBottom: 10
    }} >
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none", fontWeight: "bold" } }}>RESUME</Typography>
        <Box
            sx={{ display: { xs: "flex", sm: "flex", fontWeight: "bold" }, justifyContent: 'space-around' }}
        ><Typography variant="h6" sx={{ display: { xs: "none", sm: "block", fontWeight: "bold" } }}>RESUME</Typography>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', }}
            >
                <Tab label="Personal Info" {...a11yProps(0)} />
                <Tab label="Education" {...a11yProps(1)} />
                <Tab label="Hard Skills" {...a11yProps(2)} />
                <Tab label="Soft Skills" {...a11yProps(3)} />
                <Tab label="Experiences" {...a11yProps(4)} />
                <Tab label="Languages" {...a11yProps(5)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                    <Typography>
                        Thanawan
                        Panapongpaisan
                        <br></br><br></br>
                        suithanawan@gmail.com
                        <br></br><br></br>
                        (+66)992815388
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="LinkedIn"
                            src="http://assets.stickpng.com/images/58e91afdeb97430e81906504.png"
                        />
                        <Link underline="hover" href='https://www.linkedin.com/in/thanawan-panapongpaisan-5052ab213/'>linkedin.com/in/thanawan-panapongpaisan-5052ab213</Link>
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="Github"
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
                        />
                        <Link underline="hover" href='https://github.com/suisuiss'>github.com/suisuiss</Link>

                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                    <Typography>King Mongkut's University Technology Thonburi
                        <br /><br />
                        Computer Science (English Program), Information Technology Faculty
                        <br /><br />
                        August 2020 to present
                        <br /><br />
                        GPA 3.48 (Year1 Semester2)
                        <br /><br />
                        <Typography sx={{ display: { fontWeight: 550 } }}>Main Subject</Typography>

                        - Computing Inventions and Innovations
                        <br />
                        - Discrete Mathematics
                        <br />
                        - Web Developer(JAVA servlet and ReactJS)
                        <br />
                        - Computer Achitecture and Organization
                        <br />
                        - Data Structures
                        <br />
                        - Programming Paradigm
                        <br />
                        - Introduction Programming(JAVA)
                        <br />
                        - Analysis and Design Of Algorithms
                        <br />
                        - System Analysis and Design
                        <br />
                        - Database Systems
                        <br />
                        - Computer Networks
                        <br />
                        - Computer Science Integrated Project I
                        <br />
                        - Operating Systems
                        <br />
                        - Agile Software Engineering
                        <br />
                        - User-Centered Mobile Application Development
                        <br />
                        -Computer Science Integrated Project II
                        <br /><br />
                        <Typography sx={{ display: { fontWeight: 550 } }}>Language and Etc.</Typography>

                        -Acadenmic English in International Contexts
                        <br />
                        -Academic Listening and Speaking in International Contexts
                        <br />
                        -Learning and Problem Solving Skills
                        <br />
                        -Miracle of Thinking
                        <br />
                        -Man and Ethics of Living
                        <br />
                        -Learning How To Learn
                        <br />
                        -Beauty of Life
                        <br />
                        -Physical Education
                        <br />
                        - Technology and Innovation For Sustainable Development
                        <br />
                        - Effective Listening
                        <br />
                        - Statistics For Scientists
                        <br />
                        - Modern Managemnet and Leadership
                        <br />
                        - Academic Writing I


                    </Typography> </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                    - HTML
                    <br />
                    - CSS
                    <br />
                    - JavaScript
                    <br />
                    - ReactJS
                    <br />
                    - MUI
                    <br />
                    - UX/UI Design
                    <br />
                    - NodeJS
                    <br />
                    - DART
                    <br />
                    - Flutter
                    <br />
                    - ExpressJS
                    <br />
                    - MongoDB
                    <br />
                    - MySQL
                    <br />
                    - JAVA

                </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                    - Teamwork
                    <br />
                    - Enthusiasm
                    <br />
                    - Time and Project Management
                    <br />
                    - Adaptability
                    <br />
                    - Interpersonal
                    <br />
                    - Problem solving
                </Box>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                    - Being a Head of Public Relation Team for CS First Date 2021
                    <br />
                    - Being a mentor for Google Maps API traning
                    <br />
                    - Being a Team Leader for e-commerce website Integrated Project I
                    <br />
                    - Being a Team Manager for plastic recorder mobile application project
                    <br />
                    - Being a Team Manager for job search mobile application project
                </Box>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                    - Thai
                    <br />
                    - English
                    <br />
                </Box>
            </TabPanel>
        </Box>
    </Box>
    </div>
}
export default Resume;