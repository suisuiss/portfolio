import { Box, Container } from '@mui/system';
import React from 'react'
import Aboutme from './Aboutme';
import Navtab from './Navtab';

export const Home = () => {
    return (
        <div>
            <Navtab />
            <Container sx={{ height: 50 }}></Container>

            <Aboutme />

        </div>

    )
}
