import * as React from 'react';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';
import { useContext, useEffect } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { NavContext } from '../../_context/NavProvider';

const useStyles = makeStyles({
    root: {
        background: "white"
    },
    textField: {
        border: "1px solid white",
        borderRadius: "10px",
        height: "4vh",
        padding: "14px",
        paddingLeft: "10px",
    },
    disabledTextField: {
        border: "1px solid white",
        opacity: "0.2",
        borderRadius: "10px",
        height: "4vh",
        padding: "14px",
        paddingLeft: "10px",
    },
    input: {
        background: "white",
        color: "white"
    },
    planButton: {
        left: "20px",
        top: "50px"
    },
    gridContainer: {
        position: 'relative'
    },
    circle: {
        height: "30px",
        width: "30px",
        backgroundColor: "#A788FF",
        borderRadius: "50%",
        color: 'white',
        position: 'absolute',
        left: "-25px",
        top: "35px",

    },
    checkIcon: {
        position: 'absolute',
        left: "3px",
        top: "3px",
        color: 'white',
    },
    numberLabel: {
        position: 'absolute',
        left: "10px",
        top: "5px",
        color: 'white',
    },
    disabledCircle: {
        opacity: "0.2",
        height: "30px",
        width: "30px",
        backgroundColor: "#A788FF",
        borderRadius: "50%",
        color: 'white',
        position: 'absolute',
        left: "-25px",
        top: "35px",
    },

    disabledNumberLabel: {
        opacity: "0.2",
        position: 'absolute',
        left: "10px",
        top: "5px",
        color: 'white',
    }
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#A788FF",
    borderRadius: "20px",
    width: "300px",
    margin: "0px auto",
    '&:hover': {
        color: "#e3e3e3",
        backgroundColor: "#7f64c8",
    },
}));

const PanelForm = ({ qState, setQState }) => {
    const {
        startX, setStartX,
        startY, setStartY,
        endX, setEndX,
        endY, setEndY,
        startBattery, setStartBattery,
    } = useContext(NavContext)

    const classes = useStyles()

    const CheckInt = (e) => {
        if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) {
            return true
        }
        return false
    }

    useEffect(() => {
        if (startX && startY && endX && endY && startBattery) {
            setQState(["start", "goal", "battery", "plan"])
        } else if (startX && startY && endX && endY) {
            setQState(["start", "goal", "battery"])
        } else if (startX && startY) {
            setQState(["start", "goal"])
        } else {
            setQState(["start"])
        }

    }, [startX, startY, endX, endY, startBattery, setQState]);



    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.gridContainer}>
                {qState.includes("start") ?
                    <Box className={classes.circle}>
                        {(startX && startY) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >1</span>}
                    </Box> :
                    <Box className={classes.disabledCircle}>
                        <span className={classes.disabledNumberLabel}>1</span>
                    </Box>
                }
                <h3 className={qState.includes("start") ? "panel-sub-title" : "disabled-panel-sub-title"}>
                    Choose starting point
                </h3>
                <h4 className={qState.includes("start") ? "panel-description" : "disabled-panel-description"}>
                    Select a vaild cell on the map or input the coordinates here.
                </h4>
            </Grid>
            <Grid item xs={4} className="grid-container">
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Longitude"
                    disabled={qState.includes("start") ? false : true}
                    className={qState.includes("start") ? classes.textField : classes.disabledTextField}
                    value={startX}
                    onChange={(e) => CheckInt(e) && setStartX(e.target.value)}
                    inputProps={{
                        style: { color: "white" }
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Latitude"
                    value={startY}
                    disabled={qState.includes("start") ? false : true}
                    className={qState.includes("start") ? classes.textField : classes.disabledTextField}
                    onChange={(e) => CheckInt(e) && setStartY(e.target.value)}

                    inputProps={{
                        style: { color: "white" }
                    }}
                />
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
                {qState.includes("goal") ?
                    <Box className={classes.circle}>
                        {(startX && startY && endX && endY) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >2</span>}
                    </Box> :
                    <Box className={classes.disabledCircle}>
                        {(startX && startY && endX && endY) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >2</span>}
                    </Box>
                }
                <h3 className={qState.includes("goal") ? "panel-sub-title" : "disabled-panel-sub-title"}>
                    Choose destination
                </h3>
                <h4 className={qState.includes("goal") ? "panel-description" : "disabled-panel-description"}>
                    Select a vaild cell on the map or input the coordinates here.
                </h4>
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Longitude"
                    value={endX}
                    disabled={qState.includes("goal") ? false : true}
                    className={qState.includes("goal") ? classes.textField : classes.disabledTextField}
                    onChange={(e) => CheckInt(e) && setEndX(e.target.value)}

                    inputProps={{
                        style: { color: "white" }
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Latitude"
                    value={endY}
                    disabled={qState.includes("goal") ? false : true}
                    className={qState.includes("goal") ? classes.textField : classes.disabledTextField}
                    onChange={(e) => CheckInt(e) && setEndY(e.target.value)}

                    inputProps={{
                        style: { color: "white" }
                    }}
                />
            </Grid>
            <Grid item xs={12} className="grid-container">
                {qState.includes("battery") ?
                    <Box className={classes.circle}>
                        {(startX && startY && endX && endY && startBattery) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >3</span>}
                    </Box> :
                    <Box className={classes.disabledCircle}>
                        {<span className={classes.disabledNumberLabel} >3</span>}
                    </Box>
                }
                <h3 className={qState.includes("battery") ? "panel-sub-title" : "disabled-panel-sub-title"}>
                    Choose battery charge
                </h3>
                <h4 className={qState.includes("battery") ? "panel-description" : "disabled-panel-description"}>
                    Select a vaild cell on the map or input the coordinates here.
                </h4>
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="%"
                    value={startBattery}
                    disabled={qState.includes("battery") ? false : true}
                    className={qState.includes("battery") ? classes.textField : classes.disabledTextField}
                    onChange={(e) => CheckInt(e) && setStartBattery(e.target.value)}
                    inputProps={{
                        style: { color: "white" }
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <ColorButton disabled={qState.includes("plan") ? false : true} className={classes.planButton} variant="contained">Plan Trip</ColorButton>
            </Grid>
        </Grid>
    );
}

export default PanelForm;