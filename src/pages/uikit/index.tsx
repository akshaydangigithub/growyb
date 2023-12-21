import React from "react";
import { Col, Row } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle.tsx";

import Accordions from "./Accordions.tsx";
import Alerts from "./Alerts.tsx";
import Badges from "./Badges.tsx";
import Buttons from "./Buttons.tsx";
import Cards from "./Cards.tsx";
import Dropdowns from "./Dropdowns.tsx";
import Modals from "./Modals.tsx";
import Navs from "./Navs.tsx";
import Offcanvases from "./Offcanvas.tsx";
import Popovers from "./Popovers.tsx";
import Progressbars from "./Progressbars.tsx";
import Spinners from "./Spinners.tsx";
import Toasts from "./Toasts.tsx";
import Tooltips from "./Tooltips.tsx";

const UIElements = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Components", path: "/apps/calendar" },
          { label: "UI Elements", path: "/apps/calendar", active: true },
        ]}
        title={"UI Elements"}
      />

      <Row>
        <Col xl={6}>
          <Alerts />
        </Col>
        <Col xl={6}>
          <Toasts />
        </Col>
      </Row>

      <Buttons />

      <Row>
        <Col lg={12}>
          <Badges />
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Cards />
        </Col>
      </Row>

      <Dropdowns />

      <Navs />

      <Accordions />

      <Row>
        <Col lg={12}>
          <Modals />
        </Col>
      </Row>

      <Progressbars />

      <Row>
        <Col lg={6}>
          <Popovers />
        </Col>
        <Col lg={6}>
          <Tooltips />
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Spinners />
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Offcanvases />
        </Col>
      </Row>
    </>
  );
};

export default UIElements;
