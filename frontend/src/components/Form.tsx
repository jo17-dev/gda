import { TextField, Box, Button } from "@mui/material";
import { IoSend } from "react-icons/io5";
import { useState } from "react";

/**
 * 
 * @param props.content
 * @param props.width
 * @param props.marginTop
 * @returns 
 */

const EndIcon = ()=>{
    return <IoSend color="red"/>;
}

const Form = (props:any)=>{
    const [pseudo, setPseudo] = useState("");
    const [message, setMessage] = useState("");
    const handlePseudoChange = (e:any)=>{
        setPseudo(e.target.value);
    }
    const handleMessageChange = (e:any)=>{
        setMessage(e.target.value);
        /* 
        parce que ça ne foncionne pas toujours comme ça dans la vrai vie de merde moncoco
        il faut bosooer comme un chien, ne rien montrer de trop significatif dans le futur aux autres.
        Le vrai problème viens de cette signature mon coco. Il va falloir qu'on se demerde comme des malades
        Pourquois tu veux toujours prouver que tu est alors que tu 'est meme pas ? en plus au moment ou j'écris ces lignes tu es toujours 
        entrain d'ésaayer de le faire.. pourquoi ? qu'es ce que tu est entrain de faier ?! c'est quoi le but de tout ce cirque de merde ? 
        Tu n'est pas en paix avec toi memem. tu ne te suffit pas.. ce qui est bien... mais là tu es juste entrain de rediriger la colère en 
        demonstration,.. et c'est une fin inutilie qui te bouffe toujours plus de ton temps de merde !
        Le mieux a toujours été de la canaliser vers un bon shoot de dopamine comme la dernière fois. apres ce n'est pas toujours le mieux
        */
    }
    return(
        <Box width={props?.width} marginTop={props?.marginTop} >
            <IoSend color="blue" />
            <form method="post" >
                <TextField required={true} label="Pseudo" variant="outlined" value={pseudo} onChange={handlePseudoChange} fullWidth margin="normal" />
                {/* <TextField required={true} label="Your message" variant="outlined" value={message} onChange={handleMessageChange} fullWidth margin="dense" /> */}
                <textarea required={true} className={"border border-gray-400 w-full h-20  focus:outline-blue-600"}  placeholder="Ask me a question" value={message} onChange={handleMessageChange} ></textarea>
                <div className="ml-auto w-fit">
                    <Button variant="contained" endIcon={<EndIcon /> } >Send</Button>
                </div>
            </form>
        </Box>
    )
}

export default Form;