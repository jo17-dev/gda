import { Typography, Box } from "@mui/material";

/**
 * 
 * @param props.content
 * @param {string} props.hyphenSize
 * @param {string} props.hyphenColor
 * @param {string || int} props.marginTop
 * @param {string} props.contentColor
 * @returns {}
 */
const Title = (props:any)=>{
    return(
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" paddingLeft={5} paddingRight={5} marginTop={props.marginTop || "0"}>
            <Typography height={props.hyphenSize+"px" || "4px"} width={props.hypenWidth || "38%"} bgcolor={props.hyphenColor || "black"} ></Typography>
            <Typography variant={props.contentVariant || "h5"} fontWeight="bolder" textAlign={"center"} color={props.contentColor || undefined } > {props.content} </Typography>
            <Typography height={props.hyphenSize+"px" || "4px"} width={props.hypenWidth || "38%"} bgcolor={props.hyphenColor || "black"} ></Typography>
        </Box>
    )
}

export default Title;