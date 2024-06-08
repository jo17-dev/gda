import { Typography } from "@mui/material";
import Logo from "../components/Logo";

const PrivacyPolicy = (props: any)=>{
    return (
        <Typography variant="h1" >
        <Logo className="h-60" />
        <Typography fontWeight={"bold"}>
          Politique de confidentialité:
        </Typography>
        <Typography>
          Les lignes que vous lisez actuellement illustrent la façons dont GDA traite les données
          que vous entrez.
          <Typography>
            Vous êtes autorisé à entrer des information érronés dans les différents formulaires.
          </Typography>
        <Typography>
        </Typography>
        </Typography>
      </Typography>
    )
}

export default PrivacyPolicy;