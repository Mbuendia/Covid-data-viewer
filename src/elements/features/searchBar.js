import * as React from 'react';
import { useContext } from 'react';
import { StoreContext } from "../../context/store/storeContext";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export function CountrySelect(props) {
  const { state, actions } = useContext(StoreContext);
  return (
    <>
      <Autocomplete
        id="country-select"
        sx={{ width: 'auto' }}
        options={state.generalStates.countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        onChange={(event, newValue) => {
          actions.generalActions.setCountry(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps
            }}
          />
        )}
      />
    </>

  );
}
