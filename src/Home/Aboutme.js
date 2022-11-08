import React from 'react'
import {
    styled,
    Toolbar,
    Typography, Box
} from "@mui/material";
// const StyledToolbar = styled(Toolbar)({
//     display: "flex",
//     justifyContent: "space-around",
// });
const Aboutme = () => {
    return (
        <div id='aboutme'>

            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ backgroundColor: '#FFE5E5', width: 400, height: 280 }}>
                    <Box

                        component="img"
                        sx={{ width: 300, justifyContent: "space-around", paddingTop: 5 }}
                        alt="Thanawan."
                        src="https://res.cloudinary.com/da2zmuql2/image/upload/v1656941647/xauh9klzgbuajrxlb0qk.jpg"
                    />
                </Box>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block", fontWeight: "bold" } }}>
                    ABOUT ME
                    <Box sx={{ width: 500 }}>
                        <Typography sx={{ fontSize: 14, display: { xs: "none", sm: "block", fontWeight: "light", paddingTop: 5 } }} >
                            My name is Thanawan Panapongpaisan. I am a 3rd year computer science (English Program) 
                            student at King Mongkut’s University of Technology Thonburi who loves challenging.
                            I'm interested in frontend web development, software development, software project management, IT business, etc.
                            According to my strong passion and enthusiasm, I am ready to expand experiences, learn new things, work with other people as an intern.
                        </Typography></Box>
                </Typography>
            </Box>

            <Typography variant="h6" sx={{ paddingTop: 5, display: { xs: "block", sm: "none", fontWeight: "bold", justifyContent: "space-around" } }}>
                ABOUT ME
                <Box sx={{}}>
                    <Typography sx={{ fontSize: 14, display: { xs: "block", sm: "block", fontWeight: "light", paddingTop: 5, justifyContent: "space-around" } }} >
                        My name is Thanawan Panapongpaisan. I am a 3rd year computer science (English Program)
                        student at King Mongkut’s University of Technology Thonburi who loves challenging.
                        I'm interested in frontend web development, software development, software project management, IT business, etc.
                        According to my strong passion and enthusiasm, I am ready to expand experiences, learn new things, work with other people as an intern.


                    </Typography></Box>
            </Typography>
        </div>

    )
}

export default Aboutme