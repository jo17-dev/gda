import { TextField, Box, Button, useThemeProps } from "@mui/material";
import { LuSendHorizonal } from "react-icons/lu";
import { useState } from "react";

/**
 * 
 * @param props.content
 * @param props.width
 * @param props.marginTop
 * @returns 
 */

// const EndIcon = ()=>{
//     return <LuSendHorizonal  className="text-white" />;
// }

const Form = (props:any)=>{
    const [pseudo, setPseudo] = useState("");
    const [message, setMessage] = useState("");
    const handlePseudoChange = (e:any)=>{
        setPseudo(e.target.value);
    }
    const handleMessageChange = (e:any)=>{
        setMessage(e.target.value);
    }
    return(
        <Box width={props?.width} marginTop={props?.marginTop} >
            <form method="post" >
                <TextField required={true} label="Pseudo" variant="outlined" value={pseudo} onChange={handlePseudoChange} fullWidth margin="normal" />
                <textarea required={true} className={"border border-gray-400 w-full h-20  focus:outline-blue-600"}  placeholder="Ask me a question" value={message} onChange={handleMessageChange} ></textarea>
                <div className="ml-auto w-fit">
                    <Button variant="contained" sx={{textTransform: 'none'}} >Send </Button>
                </div>
            </form>
        </Box>
    )
}

export default Form;