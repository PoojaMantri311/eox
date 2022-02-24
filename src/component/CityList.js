import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const CityList = (props) => {
    const dataItem = Object.keys(props.dataItem.cities).map((key) => {
      return {"city": key, "zip_code":props.dataItem.cities[key].join(",")}
    });
    return (
      <Grid
            data={dataItem}
            style={{
              width:"800px"
            }}
        >
            <Column field="city" title="City" width="400px" />
            <Column field="zip_code" title="Zip Code" width="400px" />
        </Grid>
    );
};

export  default CityList


