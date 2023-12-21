import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// layout constants
import { LayoutTypes } from "../constants/layout.ts";

// strore
import { RootState } from "../redux/store.ts";

// All layouts containers
import DefaultLayout from "../layouts/Default.tsx";
import VerticalLayout from "../layouts/Vertical.tsx";
import DetachedLayout from "../layouts/Detached.tsx";
import HorizontalLayout from "../layouts/Horizontal/index.tsx";
import TwoColumnLayout from "../layouts/TwoColumn/index.tsx";

import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
  publicGrowYBFlattenRoutes,
  authGrowYBFlattenRoutes
} from "./index.tsx";


interface RoutesProps { }

const AllRoutes = (props: RoutesProps) => {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.Layout,
  }));

  const getLayout = () => {
    let layoutCls = TwoColumnLayout;

    switch (layout.layoutType) {
      case LayoutTypes.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      case LayoutTypes.LAYOUT_DETACHED:
        layoutCls = DetachedLayout;
        break;
      case LayoutTypes.LAYOUT_VERTICAL:
        layoutCls = VerticalLayout;
        break;
      default:
        layoutCls = TwoColumnLayout;
        break;
    }
    return layoutCls;
  };

  let Layout = getLayout();


  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <DefaultLayout {...props} layout={layout}>
                  {route.element}
                </DefaultLayout>
              }
              key={idx}
            />
          ))}
        </Route>

        <Route>
          {publicGrowYBFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <DefaultLayout {...props} layout={layout}>
                  {route.element}
                </DefaultLayout>
              }
              key={idx}
            />
          ))}
        </Route>

        <Route>
          {authGrowYBFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <Layout {...props}>{route.element}</Layout>
              }
              key={idx}
            />
          ))}
        </Route>

        {/* <Route>
          {authProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <Layout {...props}>{route.element}</Layout>
              }
              key={idx}
            />
          ))}
        </Route> */}
      </Routes>
    </React.Fragment>
  );
};

export default AllRoutes;
