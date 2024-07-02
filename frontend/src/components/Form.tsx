import { TextField, Box, Button } from "@mui/material";
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
                <TextField required={true} label="Pseudo" variant="outlined" className="border border-slate-400" value={pseudo} onChange={handlePseudoChange} fullWidth margin="normal" />
                {/* <textarea 
                    required={true}
                    className={"border border-gray-400 w-full h-20 rounded  focus:outline-blue-600"} 
                    placeholder="Ask me a question" value={message} onChange={handleMessageChange} >
                </textarea> */}
                <TextareaAutosize
                    required={true}
                    placeholder="Here you go !"
                    minRows={3}
                    className="border border-slate-400 w-full rounded"
                    value={message}
                    onChange={handleMessageChange}
                >
                </TextareaAutosize>
                <div className="ml-auto w-fit">
                    <Button variant="contained" endIcon={<LuSendHorizonal stroke={"white"} />} sx={{textTransform: 'none'}} >Send </Button>
                </div>
            </form>
        </Box>
    )
}

export default Form;