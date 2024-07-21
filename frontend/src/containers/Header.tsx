import {Box, Typography, Stack } from '@mui/material'
import Logo from './Logo';
import { FaGithub } from 'react-icons/fa6';

const Header = ()=>{
    return (
        <Box textAlign="center">
            {/* the top text */}
            <Typography fontSize="18px" bgcolor={'secondary.main'} color={'black'} padding={2} fontWeight="bold" paddingY="4px" >Great Digit Api: A free and OpenSource Project !</Typography>
    
            {/* The logo line */}
            <Box display="flex" flexDirection="row" marginTop={8} justifyContent="space-around" alignItems={'center'}>
                <Box display={'flex'} flexDirection={'row'} alignContent="center" width="fit-content">
                    <Typography>Made by</Typography>
                    <a href="https://github.com/jo17-dev"> @jo17-dev</a>
                </Box>
                <Logo className="h-20" />
                <Typography alignContent="center" width="fit-content" display="inline-block" >
                    <a href="https://github.com/jo17-dev/gda">
                    <FaGithub display="inline-block" style={{width: "30px", height: "30px"}}  />
                    </a>
                </Typography>
            </Box>
            {/* Caption title */}
            <Typography variant="h3" marginTop={4} fontWeight={"bold"}>Make complex Operations Easier </Typography>
            {/* waves */}
            <Box className="waves-container"></Box>
      </Box>
    )
}

export default Header;