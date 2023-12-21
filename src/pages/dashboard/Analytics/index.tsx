import React from "react";
import { Col, Row } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle.tsx";

import Overview from "./Overview/index.tsx";
import NewUsers from "./NewUsers.tsx";
import SocialMediaChart from "./SocialMediaChart.tsx";
import Sources from "./Sources.tsx";
import EngagementOverviews from "./EngagementOverviews.tsx";
import Platforms from "./Platforms.tsx";
import Channels from "./Channels.tsx";
import ViewsDetails from "./ViewsDetails.tsx";
import SessionbyLocations from "./SessionbyLocations.tsx";
import SessionbyBrowser from "./SessionbyBrowser.tsx";

// dummy data
import {
  channels,
  engagementOverviews,
  platforms,
  sources,
  viewsDetails,
} from "./data.ts";

const AnalyticsDashboard = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard/analytics" },
          { label: "Analytics", path: "/dashboard/analytics", active: true },
        ]}
        title={"Analytics"}
      />

      <Row>
        <Col xl={8}>
          <Overview />
        </Col>

        <Col xl={4}>
          <NewUsers />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <SocialMediaChart />
        </Col>
        <Col xl={6}>
          <Row>
            <Col md={6}>
              <Sources sources={sources} />
            </Col>
            <Col md={6}>
              <EngagementOverviews engagementOverviews={engagementOverviews} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Platforms platforms={platforms} />
            </Col>
            <Col md={6}>
              <Channels channels={channels} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <ViewsDetails viewsDetails={viewsDetails} />
        </Col>
        <Col lg={6} xl={4}>
          <SessionbyLocations />
        </Col>
        <Col lg={6} xl={4}>
          <SessionbyBrowser />
        </Col>
      </Row>
    </>
  );
};

export default AnalyticsDashboard;
