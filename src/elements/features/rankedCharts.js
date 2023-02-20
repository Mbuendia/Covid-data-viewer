
import * as React from 'react';
import { useContext, useEffect } from 'react';
import { StoreContext } from "../../context/store/storeContext";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { ChartZoomPan, ScatterPlot, ScatterSeries } from 'reaviz';

export const RankedCharts = ({ ...props }) => {
  const { state, actions } = useContext(StoreContext);
  // Dropdown to select how many countries should be listed in the bar chart. Default should be 10.

  const _isTotalCases = state.generalStates.isTotalCases;
  const pathToRetrieve = _isTotalCases ? 'totalCases' : 'totalDeaths';
  const handleChange = (event, isTotalCases) => {
    const _pathToRetrieve = isTotalCases ? 'totalCases' : 'totalDeaths';
    actions.generalActions.setBarChartData(state.generalStates[_pathToRetrieve]);
    actions.generalActions.handleBarChartControl(isTotalCases);
  };

  useEffect(() => {
    actions.generalActions.setBarChartData(state.generalStates[pathToRetrieve]);
  }, [state.generalStates.worldData]);


  return (<>
    <ScatterPlot
      width={props.width}
      height={props.height}
      data={state.generalStates.barChartData}
      series={<ScatterSeries animated={false} colorScheme={props.colorScheme} />}
      zoomPan={<ChartZoomPan />}
    />
    <ToggleButtonGroup
      color="primary"
      value={_isTotalCases}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value={false}>Total Cases</ToggleButton>
      <ToggleButton value={true}>Total Deaths</ToggleButton>
    </ToggleButtonGroup>
  </>

  );
};
