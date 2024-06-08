import { Box, Typography } from "@mui/material";
import { VscTerminalCmd } from "react-icons/vsc";
import "./ConsoleView.css";
const ConsoleView =(props: any)=>{
    const serverUrl = props.serverurl || "http://localhost:500/";
    const method = props.method || "GET";
    return (
        <Box width="90%" height={"auto"} margin={"15px"} marginInline={"auto"} className="main-container"  >
            <Box width="80%" height={"auto"} border={"1px solid grey"} margin={"10px"} marginInline={"auto"}>
                {/* Header of the console */}
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} paddingLeft={"10px"} bgcolor={"black"}>
                    <VscTerminalCmd width={70} height={50} fill="whitesmoke" />
                    <Typography marginLeft={"10px"} color="whitesmoke" >{props.title || "Curl"}</Typography>
                </Box>
                {/* body of the terminale */}
                <Box display={"flex"} flexDirection={"column"} height={"100%"} paddingLeft={"10px"} paddingInlineStart={"10px"} className="consoleBody" fontFamily={"--font-ibm-plex-mono"}>
                    <Typography >
                        C:\Users\forYou {'>'} cd Tests
                    </Typography>
                    <Typography>
                        C:\Users\forYou\Tests {'>'} cd Not
                    </Typography>
                    <Typography>
                        C:\Users\forYou\Tests\Not {'>'} cd Carried
                    </Typography>
                    <Typography >
                        C:\Users\forYou\Tests\Not\Carried {'>'} cd Out
                    </Typography>
                    <Typography>
                    C:\Users\forYou\Tests\Not\Carried\Out {'>'}
                    </Typography>
                    <Typography display={"flex"} flexDirection={"row"}>
                        <Typography color={"white"} >
                            C:\Users\forYou\Tests\Not\Carried\Out{'>'}
                        </Typography>
                        <Typography color={props.theme.colors.text} >
                            curl -X {method} -d "datas=11&startBase=10&endBase=16&operation=5" {serverUrl}
                        </Typography>
                    </Typography>
                    <Typography>
                        C:\Users\forYou\Tests\Not\Carried\Out {'>'} {"{ \"result\":" + '[' + "\"B\"" + '], \"status\":200 }' }
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ConsoleView;