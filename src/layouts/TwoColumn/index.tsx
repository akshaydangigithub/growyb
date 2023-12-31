import React, { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

// actions
import { changeTopbarTheme } from "../../redux/actions.ts";

// store
import { RootState, AppDispatch } from "../../redux/store.ts";

// utils
import { changeBodyAttribute } from "../../utils/layout.ts";

// constants
import { LayoutTypes, TopbarTheme } from "../../constants/layout.ts";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("../Topbar.tsx"));
const LeftSidebar = React.lazy(() => import("./LeftSidebar.tsx"));
const Footer = React.lazy(() => import("../Footer.tsx"));
const RightSidebar = React.lazy(() => import("../RightSidebar.tsx"));

const loading = () => <div className="text-center"></div>;

interface VerticalLayoutProps {
  children?: any;
}

const TwoColumnLayout = ({ children }: VerticalLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    layoutWidth,
    leftSideBarTheme,
    isOpenRightSideBar,
    topbarTheme,
    leftSideBarType,
  } = useSelector((state: RootState) => ({
    layoutWidth: state.Layout.layoutWidth,
    menuPosition: state.Layout.menuPosition,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
    leftSideBarType: state.Layout.leftSideBarType,
    topbarTheme: state.Layout.topbarTheme,
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  }));

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  /*
   * layout defaults
   */
  useEffect(() => {
    changeBodyAttribute("data-layout-mode", LayoutTypes.LAYOUT_TWO_COLUMN);
    dispatch(changeTopbarTheme(TopbarTheme.TOPBAR_THEME_LIGHT));
  }, [dispatch]);

  useEffect(() => {
    changeBodyAttribute("data-layout-width", layoutWidth);
  }, [dispatch, layoutWidth]);

  useEffect(() => {
    changeBodyAttribute("data-sidebar-color", leftSideBarTheme);
  }, [leftSideBarTheme]);

  useEffect(() => {
    changeBodyAttribute("data-topbar-color", topbarTheme);
  }, [topbarTheme]);

  useEffect(() => {
    changeBodyAttribute("data-sidebar-size", leftSideBarType);
  }, [leftSideBarType]);

  /**
   * Open the menu when having mobile screen
   */
  const openMenu = () => {
    setIsMenuOpened((prevState) => !prevState);
    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.add("sidebar-enable");
      } else {
        document.body.classList.remove("sidebar-enable");
      }
    }
  };

  return (
    <>
      <div id="wrapper">
        <Suspense fallback={loading()}>
          <Topbar openLeftMenuCallBack={openMenu} topbarDark={true} />
        </Suspense>
        <Suspense fallback={loading()}>
          <LeftSidebar />
        </Suspense>

        <div className="content-page">
          <div className="content">
            <Container fluid>
              <Suspense fallback={loading()}>{children}</Suspense>
            </Container>
          </div>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>
      {isOpenRightSideBar && (
        <Suspense fallback={loading()}>
          <RightSidebar />
        </Suspense>
      )}
    </>
  );
};

export default TwoColumnLayout;
