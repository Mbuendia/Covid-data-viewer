import * as React from 'react';
import { useContext, useEffect } from 'react';
import { StoreContext } from "../../context/store/storeContext";
import axios from 'axios';

export const Api = () => {

  const { state, actions } = useContext(StoreContext);
  useEffect(() => {
    actions.generalActions.setLoading(false);
    const fetchData = async () => {
      const result = await axios(
        'https://covid.ourworldindata.org/data/owid-covid-data.json',
      );

      actions.generalActions.setWorldData(result.data);
    };

    fetchData();
  }, []);
}
