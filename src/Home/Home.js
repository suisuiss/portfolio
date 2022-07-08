import { Box, Container } from '@mui/system';
import React from 'react'
import Resume from '../resume/Resume';
import Aboutme from './Aboutme';
import Navtab from './Navtab';

export const Home = () => {
    return (
        <div>
            <Navtab />
            <Container sx={{ height: 100 }}></Container>
            <Aboutme />
            <Container sx={{ height: 100 }}></Container>
            <Resume/>

        </div>

    )
}
