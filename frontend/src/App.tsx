import { Typography, Box } from "@mui/material";
import { useState } from "react";
import Logo from "./components/Logo";
import Title from "./components/Title";
import { FaGithub } from "react-icons/fa6";
import "./app.css";

function App(props:any) {
  const [theme, setTheme] = useState(props.theme);
  return (
    <>
    <Box bgcolor={theme.colors.background} textAlign="center">
      {/* the top text */}
      <Typography fontSize="18px" bgcolor={theme.colors.body2} padding={2} fontWeight="bold" paddingY="4px" >Great Digit Api: A free and OpenSource Project !</Typography>

      {/* The logo line */}
      <Box display="flex" flexDirection="row" marginTop={8} justifyContent="space-around">
        <Typography alignContent="center" width="fit-content" >
          Made by <a href="https://github.com/jo17-dev">@jo17-dev</a>
        </Typography>
        <Logo with="90" height="90" />
        <Typography alignContent="center" width="fit-content" display="inline-block" >
          <a href="https://github.com/jo17-dev/gda"> 
            <FaGithub display="inline-block" color={theme.colors.body} style={{width: "30px", height: "30px"}}  />
          </a>
          </Typography>
      </Box>
      
      {/* Caption title */}
      <Typography variant="h3" bgcolor="rgba(255, 255, 255, 0)"  marginTop={4} fontWeight={"bold"}>Make complex Operations Easier !</Typography>
      {/* waves */}
      <Box className="waves-container">
      </Box>
    </Box>
    {/* Functionnalities section */}
    <Box textAlign="center" marginTop={4}>
      <Title content="What does GDA offer ?" hyphenSize={4} hyphenColor={theme.colors.body} />
      <Box display="flex" flexDirection="column" paddingInline={4} justifyContent="space-around" marginTop={8}>
        {/* Conversions section */}
        <Box width="45%" height="200px" border={"1px solid "+theme.colors.body}  borderRadius="4px">
          <Typography variant='h6' >Convertion of integers and Fractionnals numbers</Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box width="fit-content" paddingLeft={8} height="150px" display="flex" textAlign="right" flexDirection="column" justifyContent="space-around">
              <Typography>Integer numbers</Typography>
              <Typography>Fractionnal numbers</Typography>
            </Box>
            <Logo width="80px" height="50px" />
            <Box width="fit-content" paddingRight={8} height="150px" display="flex" textAlign="left" flexDirection="column" justifyContent="space-around">
              <Typography>Binary</Typography>
              <Typography>Octal</Typography>
              <Typography>Decimal</Typography>
              <Typography>Hexa-Decimal</Typography>
            </Box>
          </Box>
        </Box>
        {/* Operations section */}
        <Box width="45%" height="200px" marginLeft="auto" border={"1px solid "+theme.colors.body} borderRadius="4px">
          <Typography variant='h6' >Operations on any range of numbers</Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box width="fit-content" paddingLeft={8} height="150px" display="flex" textAlign="right" flexDirection="column" justifyContent="space-around">
              <Typography>Integer numbers</Typography>
              <Typography>Fractionnal numbers</Typography>
            </Box>
            <Logo width="80px" height="50px" />
            <Box width="fit-content" paddingRight={8} height="150px" display="flex" textAlign="left" flexDirection="column" justifyContent="space-around">
              <Typography>Addition</Typography>
              <Typography>Substraction</Typography>
              <Typography>Multiplication</Typography>
              <Typography>Division</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {/* how does GDA works  */}
    <Title content="How does GDA work ?" colocontentColor="red" hyphenSize="4" hyphenColor={theme.colors.body} marginTop={6} />

    </>
  )
}

export default App;