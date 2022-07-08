import { Box, Container } from '@mui/system';
import React from 'react'
import Project from '../Project/Project';
import Resume from '../resume/Resume';
import Aboutme from './Aboutme';
import Navtab from './Navtab';

const Home = () => {
    return (
        <div>
            <Navtab />
            <Container sx={{ height: 100 }}></Container>
            <Aboutme />
            <Container sx={{ height: 100 }}></Container>
            <Resume />
            <Container sx={{ height: 100 }}></Container>
            <Project />
        </div>

    )
}

export default Home;