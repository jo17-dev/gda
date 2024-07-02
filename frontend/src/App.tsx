import { Link, Typography, Box, TableHead, Table ,TableCell, TableBody, TableRow } from "@mui/material";
import { useState } from "react";
import Logo from "./containers/Logo";
import Title from "./containers/Title";
import { FaGithub } from "react-icons/fa6";
import "./app.css";
import EndpoinDisplayer from "./containers/EndpointDisplayer";
import LiveDemo from "./components/LiveDemo";
import Form from "./components/Form";
import PrivacyPolicy from "./containers/PrivacyPolicy";

function App(props:any) {
  const [theme, setTheme] = useState(props.theme);
  return (
    <>
    <Box bgcolor={theme.colors.background} textAlign="center">
      {/* the top text */}
      <Typography fontSize="18px" bgcolor={theme.colors.body2} padding={2} fontWeight="bold" paddingY="4px" >Great Digit Api: A free and OpenSource Project !</Typography>

      {/* The logo line */}
      <Box display="flex" flexDirection="row" marginTop={8} justifyContent="space-around">
        <Typography alignContent="center" width="fit-content" color={theme.colors.text} >
          Made by <Link href="https://github.com/jo17-dev" color={theme.colors.text}>@jo17-dev</Link>
        </Typography>
        <Logo className="h-20" />
        <Typography alignContent="center" width="fit-content" display="inline-block" >
          <Link href="https://github.com/jo17-dev/gda">
            <FaGithub display="inline-block" fill={theme.colors.text} style={{width: "30px", height: "30px"}}  />
          </Link>
        </Typography>
      </Box>
      
      {/* Caption title */}
      <Typography variant="h3" color={theme.colors.text}  marginTop={4} fontWeight={"bold"}>Make complex Operations Easier !</Typography>
      {/* waves */}
      <Box className="waves-container">
      </Box>
    </Box>
    {/* Functionnalities section */}
    <Box textAlign="center" paddingTop={4} bgcolor={theme.colors.background}>
      <Title content="What does GDA offer ?" hyphenSize={4} contentColor={theme.colors.text} hyphenColor={theme.colors.body} />
      <Box display="flex" flexDirection="column" paddingInline={4} justifyContent="space-around" marginTop={8}>
        {/* Conversions section */}
        <Box width="45%" border={"1px solid "+theme.colors.body}  borderRadius="4px" className="text-red-400" >
          <Typography variant='h6' color={theme.colors.text} >Convertion of integers and Fractionnals numbers</Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box width="fit-content" paddingLeft={8} height="150px" display="flex" textAlign="right" flexDirection="column" justifyContent="space-around">
              <Typography color={theme.colors.text}>Integer numbers</Typography>
              <Typography color={theme.colors.text}>Fractionnal numbers</Typography>
            </Box>
            <Logo className="h-14" />
            <Box width="fit-content" paddingRight={8} height="150px" display="flex" textAlign="left" flexDirection="column" justifyContent="space-around">
              <Typography color={theme.colors.text}>Binary</Typography>
              <Typography color={theme.colors.text}>Octal</Typography>
              <Typography color={theme.colors.text}>Decimal</Typography>
              <Typography color={theme.colors.text}>Hexa-Decimal</Typography>
            </Box>
          </Box>
        </Box>
        {/* Operations section */}
        <Box width="45%" marginLeft="auto" border={"1px solid "+theme.colors.body} borderRadius="4px">
          <Typography variant='h6'color={theme.colors.text} >Operations on any range of numbers</Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box width="fit-content" paddingLeft={8} height="150px" display="flex" textAlign="right" flexDirection="column" justifyContent="space-around">
              <Typography color={theme.colors.text}>Integer numbers</Typography>
              <Typography color={theme.colors.text}>Fractionnal numbers</Typography>
            </Box>
            <Logo className="h-14" />
            <Box width="fit-content" paddingRight={8} height="150px" display="flex" textAlign="left" flexDirection="column" justifyContent="space-around">
              <Typography color={theme.colors.text}>Addition</Typography>
              <Typography color={theme.colors.text}>Substraction</Typography>
              <Typography color={theme.colors.text}>Multiplication</Typography>
              <Typography color={theme.colors.text}>Division</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {/* how does GDA works  */}
    <Box paddingLeft={6} paddingTop={5} bgcolor={theme.colors.background}>
      <Title content="How does GDA work ?" contentColor={theme.colors.text} hyphenSize="4" hyphenColor={theme.colors.body} marginTop={6} />
      <Typography variant='h6'>Numbers conversion & Operations:</Typography>
      <Typography marginTop={2}>
        When you want to use the API to convert a sequence of numbers,
        You have to specify the following parameters:
      </Typography>
      <ul style={{marginLeft: "10px"}}>
        <li>
          <Typography>Operation number</Typography>
        </li>
        <li>
          <Typography>Starting base</Typography>
        </li>
        <li>
          <Typography>EndingBase</Typography>
        </li>
        <li>
          <Typography>Datas</Typography>
        </li>
      </ul>
      <Typography fontWeight="bolder"  >
        Notice that all this parameters above are not facultives !
      </Typography>
      {/* endpoints part */}
      <Typography variant='h6' marginTop={4}>GDA's endpoints:</Typography>
      <Typography>
        Worried about the simplicity of the API, your <a href="https://github.com/jo17-dev">GDA's developer</a> has 
        set <u>only one endpoint:</u>
      </Typography>
      <EndpoinDisplayer baseColor={theme.colors.body} urlBgcolor={theme.colors.skybody} />
      {/* parameters part */}
      <Typography variant="h6" marginTop={4} >Parameters</Typography>
      <Typography fontWeight="bolder"  >
        Notice that there is no facultive parameters !
      </Typography>
      <Box width="98%"  marginLeft="auto" marginRight="auto">
        <Table>
          <TableHead >
            <TableRow>
              <TableCell>Paramater's Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>operation</TableCell>
              <TableCell> {"{String || number}"} (1, 2, 3, 4, 5) </TableCell>
              <TableCell>Denote the type of the operation: (1=addition, 2=substraction, 3=Multiplication, 4=division, 5=conversion )</TableCell>
          </TableRow>
            <TableRow>
              <TableCell>startBase</TableCell>
              <TableCell> {"{String || number}"} (2, 8, 10, 16 ) </TableCell>
              <TableCell>Denote the data in which your starting datas(numbers) are</TableCell>
          </TableRow>
            <TableRow>
              <TableCell>endBase</TableCell>
              <TableCell> {"{String || number}"} (2, 8, 10, 16 ) </TableCell>
              <TableCell>Denote the final base in which your datas(numbers) will end </TableCell>
          </TableRow>
            <TableRow>
              <TableCell>datas</TableCell>
              <TableCell> {"String"} </TableCell>
              <TableCell>Denotes your datas. the fractionnal one should have "." instead "," and each number should be separate by a ";"</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Typography variant="h6" marginTop={4} >Returns Object(JSON):</Typography>
      <Typography marginTop={1} >GDA returns an JSON containing those entries: <strong> {"{result: [data1, data2], statut: 200}"} </strong></Typography>
      {/* Live testing */}
      <Typography variant="h6" marginTop={4} >Live Demo:</Typography>
      <LiveDemo baseColor={theme.colors.body} theme={theme} />
    </Box>
    {/* contact part  */}
    <Box>
      <Title content="You want me to tell you something ?" hypenWidth="33%"  hyphenColor={theme.colors.body} hyphenSize={4} marginTop={4} />
      <Box display={"flex"} flexDirection={"row"} justifyContent={"space-around"} marginTop={4} >
        <Form width="40%"/>
        <Box width="40%" >
          <PrivacyPolicy />
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default App;