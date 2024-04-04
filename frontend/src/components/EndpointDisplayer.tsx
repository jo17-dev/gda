import { Box, Typography } from "@mui/material"

const EndpoinDisplayer =(props:any)=>{
    const color:string = props.baseColor || "black"
    return (
        <Box 
        width="96%" 
        display="flex" 
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start" 
        border={"1px solid "+color} padding={"2px"}
        borderRadius={1}
         >
            <Typography border={"1px solid "+color} borderRadius={1} bgcolor={props.urlBgcolor} paddingInline={1}>METHOD: <strong>POST</strong></Typography>
            <Typography marginLeft={4} fontSize="1.3rem" marginTop="auto" marginBottom="auto" fontWeight="bolder" color={props.baseColor} >URI: https:127.0.0.1:500/  </Typography>
        </Box>
    )
}

export default EndpoinDisplayer;