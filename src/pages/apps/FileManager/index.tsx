import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle.tsx";

import LeftSidePanel from "./LeftSidePanel.tsx";
import TopPanel from "./TopPanel.tsx";
import Folders from "./Folders.tsx";
import Recent from "./Recent.tsx";

// dummy data
import { folderDetails, recentFiles } from "./data.tsx";

// FileManager
const FileManager = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/file-manager" },
          { label: "File Manager", path: "/apps/file-manager", active: true },
        ]}
        title={"File Manager"}
      />
      <Row>
        <Col>
          <div className="email-container bg-transparent">
            {/* left sidebar */}
            <LeftSidePanel />

            {/* right side bar */}
            <div className="inbox-rightbar h-100 pb-0">
              <TopPanel />

              {/* folder details */}
              <Folders folderDetails={folderDetails} />
            </div>

            {/* recent data */}
            <div className="inbox-rightbar recent-data">
              <Recent recentFiles={recentFiles} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FileManager;
