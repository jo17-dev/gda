import { Typography, Stack } from "@mui/material";
import Logo from "../containers/Logo";

const PrivacyPolicy = ()=>{
    return (
      <Stack spacing={1} >
        <Logo className="h-60" />
        <Typography fontWeight={"bold"}>
          Politique de confidentialité:
        </Typography>
        <Typography>
          Les lignes que vous lisez actuellement illustrent la façons dont GDA traite les données
          que vous entrez.
        </Typography>
        <Typography>
            Vous êtes autorisé à entrer des information érronés dans le(s) formulaire(s).
        </Typography>
      </Stack>
    )
}

export default PrivacyPolicy;