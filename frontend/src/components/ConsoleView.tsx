import { Box, Typography } from "@mui/material";
import { VscTerminalCmd } from "react-icons/vsc";
import "./ConsoleView.css";
const ConsoleView =(props: any)=>{
    return (
        <Box width="90%" height={"auto"} margin={"15px"} marginInline={"auto"} className="main-container"  >
            <Box width="80%" height={"auto"} border={"1px solid grey"} margin={"10px"} marginInline={"auto"}>
                {/* Header of the console */}
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} paddingLeft={"10px"} bgcolor={"black"}>
                    <VscTerminalCmd width={70} height={50} color="" />
                    <Typography marginLeft={"10px"} color="whitesmoke" >{props.title || "Curl"}</Typography>
                </Box>
                {/* body of the terminale */}
                <Box display={"flex"} flexDirection={"column"} height={"100%"} paddingLeft={"10px"} paddingInlineStart={"10px"} className="consoleBody">
                    <Typography >
                        let xhr = new XMLHttpRequest();
                    </Typography>
                    <Typography>
                        let url = 'http://localhost:500';
                    </Typography>
                    <Typography>
                        let params = JSON.stringify({"operation: 5, startBase: 10"});
                    </Typography>
                    <Typography >
                        xhr.open("POST", url, true);
                    </Typography>
                    <Typography>
                        xhr.setRequestHeader("Content-Type", "application/json");
                    </Typography>
                    <Typography>
                        xhr.onreadystatechange = function () {"{"}
                    </Typography>
                    <Typography>
                        (xhr.readyState === 4 && xhr.status === 200) ? console.log(xhr.responseText)
                    </Typography>
                    <Typography>
                        xhr.send(params);
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ConsoleView;