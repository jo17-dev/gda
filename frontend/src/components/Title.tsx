import { Typography, Box } from "@mui/material";

/**
 * 
 * @param props.content
 * @param {string} props.hyphenSize
 * @param {string} props.hyphenColor 
 * @returns Title
 */
const Title = (props:any)=>{
    return(
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-evenly" paddingLeft={5}>
            <Typography variant="h5" fontWeight="bolder" color={props.contentColor || undefined } > {props.content} </Typography>
            <Typography height={props.hyphenSize+"px" || "4px"} width="80%" bgcolor={props.hyphenColor || "black"} ></Typography>
        </Box>
    )
}

export default Title;