import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const TermAndCondition = () => {
  return (
    <>
      <Meta title={"Term And Conditions"}></Meta>
      <BreadCrumb title={"Term And Conditions"}></BreadCrumb>

      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndCondition;
