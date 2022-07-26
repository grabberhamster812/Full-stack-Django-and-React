import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Layout from "../components/Layout";
import UpdateProfileForm from "../components/profile/UpdateProfileForm";
import { fetcher } from "../helpers/axios";
import { Row, Col } from "react-bootstrap";

function UpdateProfile() {
    const { profileId } = useParams();

  const profile = useSWR(`/users/${profileId}/`, fetcher);

  return (
    <Layout>
      <Row className="justify-content-evenly">
        <Col sm={9}>
          <UpdateProfileForm profile={profile} />
        </Col>
      </Row>
    </Layout>
  );
}

export default UpdateProfile;