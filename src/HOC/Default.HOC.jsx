import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../Layout/Default.Layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};
export default DefaultHOC;
