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
        <div>

            <Box sx={{display:"flex", justifyContent:"space-around"}}>
                <Box sx={{ backgroundColor: 'pink', width: 400, height: 280 }}>
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
                            My name is Thanawan Panapongpaisan. I am a 4th year computer science (English Program) student at King Mongkut’s University of Technology Thonburi, with intern experience website and application development at ABC company. My background in website and application development informs me mindful, creative but competitive approach. I am fueled by my passion for understanding the nuances of website and application development. I consider myself a ‘forever student,’ eager to learn new techniques and stay in tune with the latest website and application development strategies through continued coursework.
                            My hunger for knowledge and determination to turn information into action has contributed to my most recent success at ABC company, where I work as intern by implementing strategic project management developing website methods and ensuring a work-life balance for my department.
                            I am about to graduate and I am always interested in a challenge. Reach out to suithanawan@gmail.com to connect!
                        </Typography></Box>
                </Typography>
            </Box>

            <Typography variant="h6" sx={{ paddingTop: 5, display: { xs: "block", sm: "none", fontWeight: "bold", justifyContent: "space-around" } }}>
                ABOUT ME
                <Box sx={{}}>
                    <Typography sx={{ fontSize: 14, display: { xs: "block", sm: "block", fontWeight: "light", paddingTop: 5, justifyContent: "space-around" } }} >
                        My name is Thanawan Panapongpaisan. I am a 4th year computer science (English Program) student at King Mongkut’s University of Technology Thonburi, with intern experience website and application development at ABC company. My background in website and application development informs me mindful, creative but competitive approach. I am fueled by my passion for understanding the nuances of website and application development. I consider myself a ‘forever student,’ eager to learn new techniques and stay in tune with the latest website and application development strategies through continued coursework.
                        My hunger for knowledge and determination to turn information into action has contributed to my most recent success at ABC company, where I work as intern by implementing strategic project management developing website methods and ensuring a work-life balance for my department.
                        I am about to graduate and I am always interested in a challenge. Reach out to suithanawan@gmail.com to connect!

                    </Typography></Box>
            </Typography>
        </div>

    )
}

export default Aboutme