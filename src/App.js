import * as React from 'react';
import CssBaseline from '@mui/material/ScopedCssBaseline';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { StoreContext } from "./context/store/storeContext";
import { Container, Fade, Grid, LinearProgress, Tab, Tabs } from '@mui/material';
import { TabPanel } from './elements/tabPanel';
import { CountrySelect } from './elements/features/searchBar'
import { ReportedCases } from './elements/features/reportedCases';
import { RankedCharts } from './elements/features/rankedCharts';
import { Api } from './elements/api/api';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const App = () => {
  const { state, actions } = useContext(StoreContext);
  const tabvalue = state.generalStates.tabValue;
  const themeMode = state.generalStates.themeMode;
  const countriesOptions = state.generalStates.countries;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode
        },
      }),
    [themeMode],
  );

  const colorMode = () => actions.generalActions.changeTheme(themeMode === 'dark' ? 'light' : 'dark');

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <Fade in={!state.generalStates.loading} sx={{ widht: '100vh' }}>
          <LinearProgress />
        </Fade>
        <Container sx={{ 'height': '100vh' }}>
          <Fade in={state.generalStates.loading}>
            <Grid container columns={1} sx={{ widht: '100vh' }} >
              {"OUTVIO Covid data viewer"}
              <Grid item xs={2} sx={{ 'justify-content': 'flex-end', 'display': 'grid' }}>
                <IconButton onClick={(colorMode)} color="inherit">
                  {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <CountrySelect countries={countriesOptions} />
              </Grid>
              <Grid item xs={2}>
                <Tabs variant="fullWidth" value={tabvalue} onChange={(e) => { actions.generalActions.changeTab(e.target.tabIndex); }} aria-label="Covid Charts">
                  <Tab label="Reported Cases" tabIndex={0} />
                  <Tab label="Ranked Charts" tabIndex={1} />
                </Tabs>
              </Grid>
              <Grid item xs={2} sx={{ 'maxWidth': '100%' }}>
                <TabPanel value={tabvalue} index={0} theme={themeMode}>
                  <ReportedCases height={'70vh'} colorScheme={"orange"} />
                </TabPanel>
                <TabPanel value={tabvalue} index={1} theme={themeMode}>
                  <RankedCharts height={'70vh'} colorScheme={"orange"} />
                </TabPanel>
              </Grid>
            </Grid>
          </Fade>
          <Api />
        </Container>
      </CssBaseline>
    </ThemeProvider >
  );
};

export default App;
