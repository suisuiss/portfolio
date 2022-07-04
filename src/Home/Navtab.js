import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import { fontFamily } from '@mui/system';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} fontWeight='light'>
                    Thanawan Panapongpaisan
                </Typography>
                <Tabs value={value} onChange={handleChange}  textColor='pink' fontWeight='light'>
                <LinkTab label="About Me" href="/drafts" />
                <LinkTab label="Resume" href="/trash" />
                <LinkTab label="Projects" href="/spam" />
            </Tabs>
            </StyledToolbar>
        </Box>
    );
}
