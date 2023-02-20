
export const generalActions = (props) => {
  return {
    changeTheme: (data) => {
      props.dispatch({ type: "CHANGETHEME", data });
    },
    changeTab: (data) => {
      props.dispatch({ type: "CHANGETAB", data });
    },
    setLineChartData: (data) => {
      props.dispatch({ type: "SETLINECHARTDATA", data });
    },
    setCountries: (data) => {
      props.dispatch({ type: "SETCOUNTRIES", data });
    },
    setCountry: (data) => {
      props.dispatch({ type: "SETCOUNTRY", data });
    },
    handleLineChartControl: (data) => {
      props.dispatch({ type: "HANDLELINECHARTCONTROL", data });
    },
    setBarChartData: (data) => {
      props.dispatch({ type: "SETBARCHARTDATA", data });
    },

    handleBarChartControl: (data) => {
      props.dispatch({ type: "HANDLEBARCHARTCONTROL", data });
    },
    setWorldData: (data) => {

      extractCountryData(props, data);
    },
    setLoading: (isLoaded) => {
      props.dispatch({ type: "SETLOADING", isLoaded });
    }

  }
}


function extractCountryData(props, retrievedData) {

  // i tried but doesn't work with alpha 3 iso codes on this
  // const regionNames = new Intl.DisplayNames(
  //   ['en'], { type: 'region' }
  // );
  const countriesOptions = new Set()
  const deathCount = new Map();
  const casesCount = new Map();
  const totalDeaths = new Map();
  const totalCases = new Map();
  const worldData = new Map(Object.entries(retrievedData));
  for (const [key, value] of worldData) {
    countriesOptions.add({ code: key, label: key })

    const count_deaths_per_country = value.data.map((e) => ({ key: new Date(e.date), data: e.new_deaths || 0 }));
    deathCount.set(key, count_deaths_per_country)


    const new_cases_per_country = value.data.map((e) => ({ key: new Date(e.date), data: e.new_cases || 0 }));
    casesCount.set(key, new_cases_per_country)


    const total_deaths_per_country = value.data.map((e) => ({ key: new Date(e.date), data: e.total_deaths || 0 }));
    totalDeaths.set(key, total_deaths_per_country)


    const total_cases_per_country = value.data.map((e) => ({ key: new Date(e.date), data: e.total_cases || 0 }));
    totalCases.set(key, total_cases_per_country)

  }
  const isLoaded = true;
  const convertedCountries = Array.from(countriesOptions);
  //const myObj = Object.fromEntries(worldData)
  props.dispatch({ type: "SETLOADING", isLoaded });
  props.dispatch({ type: "SETCOUNTRIES", convertedCountries });
  props.dispatch({ type: "SETCOUNTDEATHS", deathCount });
  props.dispatch({ type: "SETCOUNTCASES", casesCount });
  props.dispatch({ type: "SETTOTALDEATHS", totalDeaths });
  props.dispatch({ type: "SETTOTALCASES", totalCases });
  props.dispatch({ type: "SETWORLDDATA", retrievedData });
}
