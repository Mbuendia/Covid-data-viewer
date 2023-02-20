/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
import { useContext, useEffect } from 'react';
import { StoreContext } from "../../context/store/storeContext";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { LineChart, LineSeries, ChartZoomPan } from 'reaviz';

export const ReportedCases = ({ ...props }) => {
  const { state, actions } = useContext(StoreContext);


  const _isConfirmedCases = state.generalStates.isConfirmedCases;

  const pathToRetrieve = _isConfirmedCases ? 'casesCount' : 'deathCount';
  const handleChange = (event, isConfirmedCases) => {
    const _pathToRetrieve = isConfirmedCases ? 'casesCount' : 'deathCount';
    actions.generalActions.setLineChartData(state.generalStates[_pathToRetrieve]);
    actions.generalActions.handleLineChartControl(isConfirmedCases);
  };

  useEffect(() => {
    actions.generalActions.setLineChartData(state.generalStates[pathToRetrieve]);
  }, [state.generalStates.worldData])

  return (
    <>
      <LineChart
        width={props.width}
        height={props.height}
        data={state.generalStates.lineChartData}
        series={<LineSeries colorScheme={props.colorScheme} />}
        zoomPan={<ChartZoomPan />}
      />
      <ToggleButtonGroup
        color="primary"
        value={_isConfirmedCases}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value={false}>Death Dases</ToggleButton>
        <ToggleButton value={true}>Cumulative</ToggleButton>
      </ToggleButtonGroup>
    </>

  );
};
