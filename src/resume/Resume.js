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

    return <div id='resume'>

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
                    <Tab label="Certificates"{...a11yProps(6)} />
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
                                src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
                            />
                            <Link underline="hover" sx={{ color: 'black' }} href='https://www.linkedin.com/in/thanawan-panapongpaisan-5052ab213/'>linkedin.com/in/thanawan-panapongpaisan-5052ab213</Link>
                            <br></br><br></br>
                            <Box

                                component="img"
                                sx={{ width: 20, paddingRight: 1 }}
                                alt="Github"
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
                            />
                            <Link underline="hover" sx={{ color: 'black' }} href='https://github.com/suisuiss'>github.com/suisuiss</Link>

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
                            GPAX 3.56 
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
                            - Computer Science Integrated Project II
                            <br />
                            - Artificial Intelligence
                            <br />
                            -Introduction to Distributed Systems
                            <br />
                            -Linear Algebra for computer science
                            <br />
                            <br />
                            <Typography sx={{ display: { fontWeight: 550 } }}>Language and Etc.</Typography>

                            - Acadenmic English in International Contexts
                            <br />
                            - Academic Listening and Speaking in International Contexts
                            <br />
                            - Learning and Problem Solving Skills
                            <br />
                            - Miracle of Thinking
                            <br />
                            - Man and Ethics of Living
                            <br />
                            - Learning How To Learn
                            <br />
                            - Beauty of Life
                            <br />
                            - Physical Education
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
                            <br />
                            - Content-based Language Learning
                            <br />
                            - Mathematics I (calculus)
                            <br />
                            - Selected Natural Science Topic (physics)


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
                        - GIT
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
                        - Leadership
                        <br />
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
                        <br/>
                        - Communication

                    </Box>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                        - Being a Head of Public Relation Team for CS First Date 2021
                        <br />
                        - Being a mentor and technical support for JS Google Maps API training 2022
                        <br />
                        - Being a Team Leader for e-commerce website Integrated Project I
                        <br />
                        - Being a Team Manager for plastic recorder mobile application project
                        <br />
                        - Being a Team Manager for job search mobile application project
                        <br/>
                        - Being a committee of Google Developer Student Club KMUTT
                        <br/>
                        - Being partnership and document organizer for  Golang Authentication API development workshop event
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Box sx={{ textAlign: "left", display: "flex", width: 220 }}>
                        - Thai(Native)
                        <br />
                        - English(Upper-Intermediate)
                        <br />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Box sx={{ textAlign: "left", display: "flex", width: 220, display: {} }}>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="Meta"
                            src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
                        />
                        <Link underline="hover" sx={{color:'black'}} href='https://www.coursera.org/account/accomplishments/certificate/7VM2C93RY2UD'>HTML and CSS in depth</Link>
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="Meta"
                            src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
                        />
                        <Link underline="hover" sx={{ color: 'black' }} href='https://www.coursera.org/account/accomplishments/certificate/68UBX4ND8PXF'>Version Control</Link>
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="Meta"
                            src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
                        />
                        <Link underline="hover" sx={{ color: 'black' }} href='https://www.coursera.org/account/accomplishments/certificate/96ZGB36G6C4N'>Programming with JavaScript</Link>
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="Meta"
                            src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
                        />
                        <Link underline="hover" sx={{ color: 'black' }} href='https://www.coursera.org/account/accomplishments/certificate/4342QDQRRN8G'>Introduction to Front-End Developmen</Link>
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="London App Brewery"
                            src="https://blogs.surrey.ac.uk/business-school/wp-content/uploads/sites/44/2018/12/resized-logo.png"
                        />
                        <Link underline="hover" sx={{ color: 'black' }} href='https://www.udemy.com/certificate/UC-cca2bb89-46fd-4bf3-b702-655570da4ed3/'>The Complete App Design Course - UX, UI and Design Thinking </Link>
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="The Johns Hopkins University"
                            src="https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university.shield.small_.blue_.png"
                        />
                        <Link underline="hover" sx={{ color: 'black' }} href='https://www.coursera.org/account/accomplishments/certificate/JYDVSE4CM82X'>HTML, CSS, and Javascript for Web Developers</Link>
                        <br></br><br></br>
                        <Box

                            component="img"
                            sx={{ width: 20, paddingRight: 1 }}
                            alt="McMaster University"
                            src="https://leapassets.s3.ap-south-1.amazonaws.com/png_transparent_mcmaster_university_medical_centre_mcmaster_faculty_of_science_mcmaster_faculty_of_social_sciences_student_2ddebf33e1.png"
                        />
                        <Link underline="hover" sx={{ color: 'black' }} href='https://www.coursera.org/account/accomplishments/certificate/7VM2C93RY2UD'>Learning How to Learn: Powerful mental tools to help you master tough subjects</Link>
                        <br></br><br></br>
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    </div>
}
export default Resume;