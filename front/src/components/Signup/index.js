import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckIcon from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// == import composants local

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

// == import styles
import './styles.scss'

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {

    },
})(() => null);


const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <PersonIcon />,
        2: <SettingsIcon />,
        3: <CheckIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '45rem',
        margin: '5rem auto',
        color: 'black',
        borderRadius: '5px',
        padding: '3rem',
        maxWidth: '100vw',

    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    stepper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}));

function getSteps() {
    return ['Inscription', 'Information Complémentaire (facultatif)', 'Validation'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (<Step1 />);
        case 1:
            return (<Step2 />);
        case 2:
            return (<Step3/>);
        default:
            return 'Unknown step';
    }
}

export default function Signup() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const user = useSelector((state) => state.user);
    const isPasswordCorrect = useSelector((state) => state.isPasswordCorrect);
    console.log(isPasswordCorrect);

    const handleNext = () => {
        if(user.firstName && user.lastName && user.username && user.email  && isPasswordCorrect ) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            dispatch({type: 'MISSING_FIELD'});
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <GlobalCss/>
            <div className={classes.stepper}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                        <div className="form-inscription">
                            {getStepContent(activeStep)}
                            <div className="form-inscription--button--prev-next">
                                <Button
                                    color="secondary"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Précédent
                                </Button>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={handleNext}
                                >
                                    {activeStep === steps.length - 1 ? 'Valider' : 'Suivant'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}