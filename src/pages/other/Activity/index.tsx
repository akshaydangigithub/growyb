import React from "react";
import { Col, Row } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle.tsx";

import LeftTimeline from "./LeftTimeline.tsx";
import CenterTimeline from "./CenterTimeline.tsx";

// dummy data
import { timeLine1, timeLine2 } from "./data.tsx";

const Activity = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Pages", path: "/pages/activity" },
          { label: "Activity", path: "/pages/activity", active: true },
        ]}
        title={"Activity"}
      />
      <Row>
        <Col lg={12}>
          <LeftTimeline timeLine1={timeLine1} />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={12}>
          <CenterTimeline timeLine2={timeLine2} />
        </Col>
      </Row>
    </>
  );
};

export default Activity;
