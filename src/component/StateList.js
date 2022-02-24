import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import CityList from "./CityList";
import { Loader } from "@progress/kendo-react-indicators";

const StateList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://api.npoint.io/2c71ded6354de7428006');
        setData(Object.values(response));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const expandChange = (event) => {
    let newData = data.map((item) => {
      if (item.name === event.dataItem.name) {
        item.expanded = !event.dataItem.expanded;
      }

      return item;
    });
    setData(newData);
  };

  return (
    <>
      {loading && <Loader/>}
      {!loading && <Grid
        data={data}
        detail={CityList}
        expandField="expanded"
        onExpandChange={expandChange}
        style={{
          width: "90%",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "10px"
        }}
      >
         <Column field="name" title="State" />
      </Grid>}
    </>
  );
}
export default StateList