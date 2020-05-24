import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

function SnackBar() {
  const { enqueueSnackbar } = useSnackbar();
  const { stateSnakbar, messageSnackbar }= useSelector((state) => state.toggle)


  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(messageSnackbar, { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant(stateSnakbar)} id="snack"></Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackBar />
    </SnackbarProvider>
  );
}
