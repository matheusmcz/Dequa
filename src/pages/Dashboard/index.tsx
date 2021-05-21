import React from "react";
import { useAuth, Usertype } from "../../context/auth";
import { FeaturedCourses } from "../FeaturedCourses";
import { JobDescription } from "../JobDescription";

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return user.userType === Usertype.searchingJob ? (
    <JobDescription />
  ) : (
    <FeaturedCourses />
  );
};
