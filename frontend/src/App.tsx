import {Typography, Box, Stack, TableHead, Table ,TableCell, TableBody, TableRow } from "@mui/material";
import Logo from "./containers/Logo";
import Title from "./containers/Title";
import Header from "./containers/Header";
import "./app.css";
import EndpoinDisplayer from "./containers/EndpointDisplayer";
import LiveDemo from "./components/LiveDemo";
import Form from "./components/Form";
import PrivacyPolicy from "./containers/PrivacyPolicy";

function App(props:any) {
  return (
    <>
    <Header />
    {/* Functionnalities section */}
    <Box textAlign="center" paddingTop={4}>
      <Title content="What does GDA offer ?" hyphenSize={4} hyphenColor={'primary.main'} />
      <Box display="flex" flexDirection="column" paddingInline={4} justifyContent="space-around" marginTop={8}>
        {/* Conversions section */}
        <Box width="45%" border={'1px solid white'} borderColor={'primary.main'}  borderRadius="4px">
          <Typography variant='h6'  >Convertion of integers and Fractionnals numbers</Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box width="fit-content" paddingLeft={8} height="150px" display="flex" textAlign="right" flexDirection="column" justifyContent="space-around">
              <Typography >Integer numbers</Typography>
              <Typography >Fractionnal numbers</Typography>
            </Box>
            <Logo className="h-14" />
            <Box width="fit-content" paddingRight={8} height="150px" display="flex" textAlign="left" flexDirection="column" justifyContent="space-around">
              <Typography >Binary</Typography>
              <Typography >Octal</Typography>
              <Typography >Decimal</Typography>
              <Typography >Hexa-Decimal</Typography>
            </Box>
          </Box>
        </Box>
        {/* Operations section */}
        <Box width="45%" marginLeft="auto" border={'1px solid white'} borderColor={'primary.main'} borderRadius="4px">
          <Typography variant='h6' >Operations on any range of numbers</Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box width="fit-content" paddingLeft={8} height="150px" display="flex" textAlign="right" flexDirection="column" justifyContent="space-around">
              <Typography >Integer numbers</Typography>
              <Typography >Fractionnal numbers</Typography>
            </Box>
            <Logo className="h-14" />
            <Box width="fit-content" paddingRight={8} height="150px" display="flex" textAlign="left" flexDirection="column" justifyContent="space-around">
              <Typography >Addition</Typography>
              <Typography >Substraction</Typography>
              <Typography >Multiplication</Typography>
              <Typography >Division</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {/* how does GDA works  */}
    <Box paddingLeft={6} paddingTop={5}>
      <Title content="How does GDA work ?"  hyphenSize="4" hyphenColor={'primary.main'} marginTop={6} />
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
      <EndpoinDisplayer baseColor="primary" urlBgcolor="warning" />
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
      <LiveDemo baseColor='primary'  />
    </Box>
    {/* contact part  */}
    <Box>
      <Title content="You want me to tell you something ?" hypenWidth="33%"  hyphenColor={'primary.main'} hyphenSize={4} marginTop={4} />
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