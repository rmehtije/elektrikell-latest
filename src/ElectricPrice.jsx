import { useEffect } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveHour } from "./services/stateService";
import Loading from "./Loading";
import ElectricPriceProvider from "./contexts/ElecticPriceContext";

function ElecticPrice() {
  console.log("ElecticPrice");
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);

  return (
    <ElectricPriceProvider>
      <Container>
        <Head />
        <Body />
        <Footer />
        <LeftSideBar />
        <ErrorModal />
        <Loading />
      </Container>
    </ElectricPriceProvider>
  );
}

export default ElecticPrice;
