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
        paddingLeft={.8}
        borderRadius={1}
         >
            <Typography border={"1px solid "+color} borderRadius={1} bgcolor={props.urlBgcolor} paddingInline={1}>METHOD: <strong>PATCH</strong></Typography>
            <Typography marginLeft={4} fontSize="1.3rem" marginTop="auto" marginBottom="auto" fontWeight="bolder" color={props.baseColor} >URI: https://gda-api.onrender.com  </Typography>
        </Box>
    )
}

export default EndpoinDisplayer;