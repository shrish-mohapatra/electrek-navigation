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
        background: "var(--panel-text)"
    },
    textField: {
        border: "1px solid var(--panel-text)",
        borderRadius: "10px",
        height: "4vh",
        padding: "14px",
        paddingLeft: "10px",
        
    },
    disabledTextField: {
        border: "1px solid var(--panel-text)",
        opacity: "0.2",
        borderRadius: "10px",
        height: "4vh",
        padding: "14px",
        paddingLeft: "10px",
    },
    input: {
        background: "var(--panel-text)",
        color: "var(--panel-text)",
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
        backgroundColor: "var(--active)",
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
        backgroundColor: "var(--active)",
        borderRadius: "50%",
        color: 'var(--panel-text)',
        position: 'absolute',
        left: "-25px",
        top: "35px",
    },

    disabledNumberLabel: {
        opacity: "0.2",
        position: 'absolute',
        left: "10px",
        top: "5px",
        color: 'var(--panel-text)',
    }
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "var(--active)",
    borderRadius: "20px",
    width: "300px",
    margin: "0px auto",
    '&:hover': {
        color: "#e3e3e3",
        backgroundColor: "#7f64c8",
    },
}));

const PanelForm = () => {
    const {
        startX, setStartX,
        startY, setStartY,
        endX, setEndX,
        endY, setEndY,
        startBattery, setStartBattery,
        simulateTrip
    } = useContext(NavContext)

    const classes = useStyles()

    const CheckInt = (e) => {
        if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) {
            return true
        }
        return false
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.gridContainer}>
                    <Box className={classes.circle}>
                        {(startX && startY) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >1</span>}
                    </Box> 
                <h3 className={"panel-sub-title"}>
                    Choose starting point
                </h3>
                <h4 className={"panel-description"}>
                    Select a vaild cell on the map or input the coordinates here.
                </h4>
            </Grid>
            <Grid item xs={4} className="grid-container">
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Longitude"
                    disabled={false}
                    className={classes.textField}
                    value={startX}
                    onChange={(e) => CheckInt(e) && setStartX(e.target.value)}
                    inputProps={{
                        style: { color: "var(--panel-text)" }
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Latitude"
                    value={startY}
                    disabled={false}
                    className={classes.textField}
                    onChange={(e) => CheckInt(e) && setStartY(e.target.value)}

                    inputProps={{
                        style: { color: "var(--panel-text)" }
                    }}
                />
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
                {startX && startY ?
                    <Box className={classes.circle}>
                        {(startX && startY && endX && endY) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >2</span>}
                    </Box> :
                    <Box className={classes.disabledCircle}>
                        {(startX && startY && endX && endY) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >2</span>}
                    </Box>
                }
                <h3 className={startX && startY ? "panel-sub-title" : "disabled-panel-sub-title"}>
                    Choose destination
                </h3>
                <h4 className={startX && startY ? "panel-description" : "disabled-panel-description"}>
                    Select a vaild cell on the map or input the coordinates here.
                </h4>
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Longitude"
                    value={endX}
                    disabled={startX && startY ? false : true}
                    className={startX && startY ? classes.textField : classes.disabledTextField}
                    onChange={(e) => CheckInt(e) && setEndX(e.target.value)}

                    inputProps={{
                        style: { color: "var(--panel-text)" }
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Latitude"
                    value={endY}
                    disabled={startX && startY ? false : true}
                    className={startX && startY ? classes.textField : classes.disabledTextField}
                    onChange={(e) => CheckInt(e) && setEndY(e.target.value)}
                    inputProps={{
                        style: { color: "var(--panel-text)" }
                    }}
                />
            </Grid>
            <Grid item xs={12} className="grid-container">
                {startX && startY && endX && endY ?
                    <Box className={classes.circle}>
                        {(startX && startY && endX && endY && startBattery) ? <CheckIcon className={classes.checkIcon} /> : <span className={classes.numberLabel} >3</span>}
                    </Box> :
                    <Box className={classes.disabledCircle}>
                        {<span className={classes.disabledNumberLabel} >3</span>}
                    </Box>
                }
                <h3 className={startX && startY && endX && endY ? "panel-sub-title" : "disabled-panel-sub-title"}>
                    Choose battery charge
                </h3>
                <h4 className={startX && startY && endX && endY ? "panel-description" : "disabled-panel-description"}>
                    Select a vaild cell on the map or input the coordinates here.
                </h4>
            </Grid>
            <Grid item xs={4}>
                <InputBase
                    required
                    id="outlined-required"
                    placeholder="Charge"
                    value={startBattery}
                    disabled={startX && startY && endX && endY ? false : true}
                    className={startX && startY && endX && endY ? classes.textField : classes.disabledTextField}
                    onChange={(e) => CheckInt(e) && setStartBattery(e.target.value)}
                    inputProps={{
                        style: { color: "var(--panel-text)" }
                    }}
                    renderSuffix={() => <p style={{color: "var(--panel-text)"}}>%</p>}
                />
            </Grid>
            <Grid item xs={12}>
                <ColorButton
                    disabled={startX && startY && endX && endY && startBattery ? false : true}
                    className={classes.planButton}
                    variant="contained"
                    onClick={simulateTrip}
                >
                    Plan Trip
                </ColorButton>
            </Grid>
        </Grid>
    );
}

export default PanelForm;