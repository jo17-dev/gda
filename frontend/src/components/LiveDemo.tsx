import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import ConsoleView from "../containers/ConsoleView";

const LiveDemo = (props:any)=>{
    const [startBase, setStartBase] = useState(10);
    const [endBase, setEndBase] = useState(2);
    const [operation, setOperation] = useState(5);
    const [datas, setDatas] = useState(6);
    const [result, setResult] = useState("Result: ");
    const serverUrl = "http://localhost:500/";

    const handleChange = (e:any)=>{
        switch (e.target.id){
            case "operation":
                setOperation(e.target.value);
                break;
            case "startBase":
                setStartBase(e.target.value);
                break;
            case "endBase":
                setEndBase(e.target.value);
                break;
            case "datas":
                setDatas(e.target.value);
                break;
            default:
                console.log("Handle change exception");
                break;
        }
    }

    const handleApi = async ()=>{
        setResult("Performing...");
        await fetch(
                serverUrl,
                {
                    "method": "PATCH",
                    "headers": new Headers({
                        "Content-Type": "application/json",
                    }),
                    "body": JSON.stringify({
                        "operation": operation.toString(),
                        "startBase": startBase.toString(),
                        "endBase": endBase.toString(),
                        "datas": datas.toString()
                    }),
                }
            ).then(
                (resp: Response)=>{
                    resp.json().then(
                        (value: any)=>{
                            setResult(JSON.stringify(value));
                        }
                    )
                }
            ).catch(
                (reason: any)=>{
                    setResult("Can't reach GDA api: "+reason);
                    setTimeout(()=>{
                        setResult("Result: ");
                    }, 3000);
                }
            );
    }

    return (
        <>
        <Box>
            <ConsoleView title="cmd.exe - curl" method="PATCH" serverurl={serverUrl} theme={props.theme} />
        </Box>
        <Box display={"flex"} flexDirection={"row"} justifyContent="space-around" flexWrap={"wrap"} >
            <TextField type="number" id="operation" label="operation" variant="outlined" value={operation} onChange={handleChange} />
            <TextField type="number" id="startBase" label="startBase" variant="outlined" value={startBase} onChange={handleChange}/>
            <TextField type="number" id="endBase" label="endBase" variant="outlined" value={endBase} onChange={handleChange}/>
            <TextField type="text" id="datas" label="datas" variant="outlined" value={datas} onChange={handleChange}/>
            <Button variant="contained" onClick={handleApi} sx={{textDecoration: 'none', paddingInline: 4, paddingY: 0}} >Test</Button>
            <Typography variant="h6" border={"1px solid"+(props.baseColor || "black")} width="auto" marginTop="auto" marginBottom={"auto"} padding={1} borderRadius={1} > {result} </Typography>
        </Box>
        </>
    )
}

export default LiveDemo;