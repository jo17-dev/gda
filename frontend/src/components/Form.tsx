import { TextField, Box, Button, InputLabel } from "@mui/material";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { LuSendHorizonal } from "react-icons/lu";
import { useState } from "react";

/**
 * Contact form ( bottom )
 * @param props.content
 * @param props.width
 * @param props.marginTop
 * @returns 
 */

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
                <InputLabel required={true} label="Pseudo" variant="outlined" value={pseudo} onChange={handlePseudoChange} fullWidth margin="normal" />
                <TextareaAutosize
                    style={{backgroundColor: 'transparent', outline: '1px solid '+ '#e6e6e6' }}
                    required={true}
                    placeholder="Here you go !"
                    minRows={3}
                    className="w-full rounded"
                    value={message}
                    onChange={handleMessageChange}
                >
                </TextareaAutosize>
                <div className="ml-auto w-fit">
                    <Button variant="contained" endIcon={<LuSendHorizonal stroke={'white'} />} sx={{textTransform: 'none'}} >Send </Button>
                </div>
            </form>
        </Box>
    )
}

export default Form;