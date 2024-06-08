import { Box } from "@mui/material";
import { useState } from "react";
import ConsoleView from "./ConsoleView";

const LiveDemo = (props:any)=>{
    // const [startBase, setStartBase] = useState(2);
    // const [endBase, setEndBase] = useState(10);
    // const [operation, setOperation] = useState(6);
    // const [datas, setDatas] = useState(6);

    // const handleChange = (e:any)=>{
    //     switch (e.target.id){
    //         case "operation":
    //             setOperation(e.target.value);
    //             break;
    //         case "startBase":
    //             setStartBase(e.target.value);
    //             break;
    //         case "endBase":
    //             setEndBase(e.target.value);
    //             break;
    //         case "datas":
    //             setDatas(e.target.value);
    //             break;
    //         default:
    //             console.log("Handle change exception");
    //             break;
    //     }
    // }

    return (
        <>
        <Box>
            <ConsoleView title="cmd.exe - curl" theme={props.theme} />
        </Box>
        {/* <Box display={"flex"} flexDirection={"row"} justifyContent="space-around">
            <TextField type="number" id="operation" label="operation" variant="outlined" value={operation} onChange={handleChange} />
            <TextField type="number" id="startBase" label="startBase" variant="outlined" value={startBase} onChange={handleChange}/>
            <TextField type="number" id="endBase" label="endBase" variant="outlined" value={endBase} onChange={handleChange}/>
            <TextField type="text" id="datas" label="datas" variant="outlined" value={datas} onChange={handleChange}/>
            <Button variant="contained" sx={{textDecoration: 'none', paddingInline: 4}} >Test</Button>
            <Typography variant="h6" border={"1px solid"+(props.baseColor || "black")} width="150px" marginTop="auto" marginBottom={"auto"} padding={1} borderRadius={1} ><strong>result:</strong> </Typography>
        </Box> */}
        </>
    )
}

export default LiveDemo;