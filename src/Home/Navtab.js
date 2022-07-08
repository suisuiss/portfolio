import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
    styled,
    Toolbar,
    Typography
} from "@mui/material";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});



export default function NavTab() {

    return (

        <Box sx={{ width: '100%', position: "fixed", backgroundColor: 'white' }} >
            <StyledToolbar>
                <Typography variant="h8" sx={{ display: { xs: "none", sm: "block" } }} >
                    Thanawan Panapongpaisan
                </Typography>
                
                <Typography variant="h8" sx={{ display: { xs: "block", sm: "none" } }} >
                    Thanawan
                </Typography>
                <Typography variant="h7"  >
                    PORTFOLIO
                </Typography>
            </StyledToolbar>
        </Box>
    );
}
