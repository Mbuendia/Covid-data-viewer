export const generalStates = {
  tabValue: 0,
  themeMode: 'dark',
  countries: [],
  isConfirmedCases: false,
  selectedCountry: 'OWID_WRL',
  lineChartData: [],
  casesCount: new Map(),
  deathCount: new Map(),
  barChartData: [],
  isTotalCases: false,
  totalCases: new Map(),
  totalDeaths: new Map(),
  worldData: [],
  loading: false
}

export const generalReducer = (state, action) => {
  switch (action.type) {
    case "CHANGETAB":
      return {
        ...state,
        tabValue: action.data
      };
    case "CHANGETHEME":
      return {
        ...state,
        themeMode: action.data
      };
    case "SETCOUNTRIES":
      return {
        ...state,
        countries: action.convertedCountries
      };
    case "SETCOUNTRY":
      return {
        ...state,
        selectedCountry: action?.data?.code ?? 'OWID_WRL',
        lineChartData: state[state.isConfirmedCases ? 'casesCount' : 'deathCount'].get(action?.data?.code ?? 'OWID_WRL'),
        barChartData: state[state.isTotalCases ? 'totalCases' : 'totalDeaths'].get(action?.data?.code ?? 'OWID_WRL'),
      };
    case "HANDLELINECHARTCONTROL":
      return {
        ...state,
        isConfirmedCases: action.data,
        lineChartData: state[action.data ? 'casesCount' : 'deathCount'].get(state.selectedCountry),
      };
    case "SETCOUNTDEATHS":
      return {
        ...state,
        deathCount: action.deathCount
      };
    case "SETCOUNTCASES":
      return {
        ...state,
        casesCount: action.casesCount
      };
    case "SETTOTALDEATHS":
      return {
        ...state,
        totalDeaths: action.totalDeaths
      };

    case "SETTOTALCASES":
      return {
        ...state,
        totalCases: action.totalCases
      };
    case "SETLINECHARTDATA":
      return {
        ...state,
        lineChartData: action.data.get(state.selectedCountry)
      };
    case "HANDLEBARCHARTCONTROL":
      return {
        ...state,
        isTotalCases: action.data,
        barChartData: state[action.data ? 'totalCases' : 'totalDeaths'].get(state.selectedCountry),
      };
    case "SETBARCHARTDATA":
      return {
        ...state,
        barChartData: action.data.get(state.selectedCountry)
      };
    case "SETWORLDDATA":
      return {
        ...state,
        worldData: action.retrievedData
      };
    case "SETLOADING":
      return {
        ...state,
        loading: action.isLoaded
      };
    default:
      throw new Error("Unexpected action");
  }
};
