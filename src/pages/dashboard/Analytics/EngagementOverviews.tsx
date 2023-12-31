import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// dummy data
import { EngagementOverviewsTypes } from "./data.ts";

interface EngagementOverviewsProps {
  engagementOverviews: EngagementOverviewsTypes[];
}

const EngagementOverviews = ({
  engagementOverviews,
}: EngagementOverviewsProps) => {
  return (
    <Card>
      <Card.Body>
        <Link to="#" className="p-0 float-end">
          Export <i className="uil uil-export ms-1"></i>
        </Link>

        <h4 className="card-title header-title">Engagement Overviews</h4>
        <div className="table-responsive table-nowrap mt-3">
          <table className="table table-sm table-centered mb-0 fs-13">
            <thead className="table-light">
              <tr>
                <th>Duration (Secs)</th>
                <th style={{ width: "30%" }}>Sessions</th>
                <th style={{ width: "30%" }}>Views</th>
              </tr>
            </thead>
            <tbody>
              {(engagementOverviews || []).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.duration}</td>
                    <td>{item.sessions}</td>
                    <td>{item.views}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EngagementOverviews;
