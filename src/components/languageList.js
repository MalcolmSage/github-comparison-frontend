import * as React from 'react';
import "../styles/App.css"
import { Grid, Typography } from '@material-ui/core';
import numeral from 'numeral'
import { makeStyles} from '@material-ui/core/styles';

const color = ["blueL", "blue", "greenL", "green", "redL", "red", "orangeL", "orange", "purpleL", "purple", "brownL", "brown"]

const useStyles = makeStyles({
    blueL: {
        color: "#a6cee3"
    },
    blue: {
        color: "#1f78b4"
    },
    greenL: {
        color: "#b2df8a"
    },
    green: {
        color: "#33a02c"
    },
    redL: {
        color: "#fb9a99"
    },
    red: {
        color: "#e31a1c"
    },
    orangeL: {
        color: "#fdbf6f"
    },
    orange: {
        color: "#ff7f00"
    },
    purpleL: {
        color: "#cab2d6"
    },
    purple:{
        color:"#6a3d9a"
    },
    brownL:{
        color:"ffff99"
    },
    brown:{
        color:"b15928"
    }
})

export default function LanguagesList(props) {
    const classes = useStyles()
    const { languages } = props
    const keyList = Object.keys(languages)
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
    keyList.forEach(item => console.log(color[keyList.indexOf(item)]))
    function languagePercent() {
        return keyList.map((item) => (
            <Grid item xs={6} md={4}>
                <Typography variant="subtitle2" className={classes[color[keyList.indexOf(item)]]}>
                    {`${item}: ${numeral(languages[item] / sumValues(languages) * 100).format('0a.0')}%`}
                </Typography>
            </Grid>
        ))
    }

    return (
        <Grid container>
            {languagePercent()}
        </Grid>

    );
}
