import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function Resume() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', justifyContent:'space-around'}}
        ><Typography>Resume</Typography>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' ,}}
            >
                <Tab label="Personal Info" {...a11yProps(0)} />
                <Tab label="Education" {...a11yProps(1)} />
                <Tab label="Hard Skills" {...a11yProps(2)} />
                <Tab label="Soft Skills" {...a11yProps(3)} />
                <Tab label="Experiences" {...a11yProps(4)} />
                <Tab label="Languages" {...a11yProps(5)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box sx={{ textAlign: "left", display:"flex" }}>
                <Typography>
                    Thanawan
                    Panapongpaisan
                    <br></br><br></br>
                    suithanawan@gmail.com
                    <br></br><br></br>
                    (+66)992815388
                    <br></br><br></br>
               
                        <a href='https://www.linkedin.com/in/thanawan-panapongpaisan-5052ab213/'>linkedin.com/in/thanawan-panapongpaisan-5052ab213</a>
                    <br></br><br></br>
                    https://github.com/suisuiss
                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
        </Box>
    );
}
