import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

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

// Import npm
import passwordValidator from 'password-validator';
import emailValidator from 'email-validator';

// == import utils
import { handdleVerifEmptyValue } from 'src/utils/checkSpaces';


// == import composants local
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

// == import actions local
import {
  actionSetStep,
  actionSetMissingField,
  actionSignup,
  actionPasswordValidation,
  actionEmailValidation,
} from '../../actions/signup';

// == import styles
import './styles.scss';


// -------------------------- Composant Step Icon & PropType ----------------------------
function ColorlibStepIcon(props) {
  const { active, completed } = props;
  const icons = {
    1: <PersonIcon />,
    2: <SettingsIcon />,
    3: <CheckIcon />,
  };

  let classesStepIcon = 'div-signup--stepper-icon';
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
      return (<Step3 />);
    default:
      return 'Unknown step';
  }
}

// Create a schema
const schema = new passwordValidator();

// Add properties to it
schema
  .is().min(8) // Minimum length 8
  .is().max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .has()
  .symbols(); // Must have special caractère


// -------------------------- Export --------------------------

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const steps = getSteps();
  const {
    user, isPasswordCorrect, errorListSignup, activeStep,
  } = useSelector((state) => state.signup);
  const isEmpty = handdleVerifEmptyValue(user.first_name)
    || handdleVerifEmptyValue(user.last_name)
    || handdleVerifEmptyValue(user.email)
    || handdleVerifEmptyValue(user.login);

  // -------------------------- Fonctions State & Dispatch --------------------------

  const handleNext = () => {
    // TODO : CHECK IF LOGIN IS NOT ALREADY TAKEN IN DATABASE
    console.log(user, 'user', isPasswordCorrect, 'is correct pass', !isEmpty, 'is empty', schema.validate(user.password), 'password ok', emailValidator.validate(user.email));
    // First checkup : check if user has complete first step (if inputs are not empty)
    // if passwords are matching
    // and if user did not filled up inputs with just spaces
    if (user.first_name
      && user.last_name
      && user.login
      && user.email
      && user.password
      && user.confirmPassword
      && isPasswordCorrect
      && !isEmpty
    ) {
      // check if password is strong enough (if it contains at least 8 character, 1 uppercase,
      // 1 lowercase, 1 number and 1 special character)
      if (schema.validate(user.password)) {
        dispatch(actionPasswordValidation(true));
        // check if user's email exists
        if (emailValidator.validate(user.email)) {
          // If all ok, go to next step
          dispatch(actionEmailValidation(true));
          dispatch(actionSetStep(activeStep + 1));
        }
        else {
          dispatch(actionEmailValidation(false));
        }
      }
      else {
        // Display an error message below pasword input
        dispatch(actionPasswordValidation(false));
      }
    }
    else {
      // send error and set inputs border into red
      dispatch(actionSetMissingField());
    }
    if (activeStep === steps.length - 1) {
      // If final step send axios request in actionSignup
      dispatch(actionSignup(history));
      if (errorListSignup) {
        dispatch(actionSetStep(0));
      }
    }
  };

  const handleBack = () => {
    dispatch(actionSetStep(activeStep - 1));
  };

  const handleReset = () => {
    dispatch(actionSetStep(0));
  };

  // -------------------------- Return --------------------------

  return (
    <div className="div-signup">
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
            <Typography>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>
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
