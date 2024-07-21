import {createTheme } from "@mui/material";

export const light_theme = createTheme({
    palette: {
        primary:{
            // couleur blue foncée
            main: '#0092de'
        },
        secondary: {
            // vert clair
            main: '#60c0b3'
        },
        warning: {
            main: '#0090de5d' // sky blue
        },
        background: {
            default: '#ffffff' // Couleur blanche
        },
        text: {
            primary: '#131416' // Couleur noir
        },
        common: {
            white: '#fff',
            black: '#131416'
        }
    }
});

export const dark_theme = createTheme({
    palette: {
        primary:{
            main: '#0092de' // couleur blue foncée
        },
        secondary: {
            main: '#60c0b3' // vert clair
        },
        warning: {
            main: '#0090de5d' // sky blue
        },
        background: {
            default: '#18191b' // couleur noir 
        },
        text: {
            primary: '#fff' // blanche
        },
        common: {
            white: '#f2f2f2',
            black: '#131416'
        }
    }
});