import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// == import Material UI
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

// == import actions local
import { actionSetMissingField, actionSignup  } from '../../actions/user'

// == import styles
import './styles.scss'

//! IMPOSSIBLE À SUPPRIMER !?!
// FIXME: trouver une solution
const GlobalCss = withStyles({
    '@global': {
    },
})(() => null);


// -------------------------- Composant Step Icon & PropType ----------------------------
function ColorlibStepIcon(props) {
    const { active, completed } = props;

    const icons = {
        1: <PersonIcon />,
        2: <SettingsIcon />,
        3: <CheckIcon />,
    };

    let classesStepIcon = "div-signup--stepper-icon";
    classesStepIcon += active ? ' active' : '';
    classesStepIcon += completed ? ' completed' : '';

    return (
        <div
            className={classesStepIcon}
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

// -------------------------- Fonction Steps --------------------------

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


// -------------------------- Export --------------------------

export default function Signup() {

    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const { user, isPasswordCorrect, missingField } = useSelector((state) => state.user);


// -------------------------- Fonctions State & Dispatch --------------------------

    const handleNext = () => {
        if(user.firstName && user.lastName && user.username && user.email && user.password  && user.confirmPassword  && isPasswordCorrect) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            dispatch(actionSetMissingField());
        }
        if(activeStep === steps.length-1){
            dispatch(actionSignup());
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

// -------------------------- Return --------------------------

    return (
        <div className="div-signup">
            <GlobalCss/>
            <div className="div-signup--stepper">
            <Stepper alternativeLabel activeStep={activeStep} connector={<StepConnector className="div-signup--stepper-connector" />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
                {activeStep === steps.length ? (
                    <div className="form-inscription">
                        <Typography >
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} >
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
