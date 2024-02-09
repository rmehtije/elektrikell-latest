import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function About() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
    console.log('params', params);
  useEffect(() => {
    if (params.id === "999") navigate("/");
  }, [params, navigate]);

  return <>About component</>;
}

export default About;
