import { useEffect, useState, useCallback, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Dot,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
} from "recharts";
import { getPriceData } from "../services/apiService";
import { chartDataConvertor } from "../utils";
import { currentTimeStamp } from "../utils/dates";
import { getLowPriceInterval } from "../utils/buildIntervals";
import { getAveragePrice } from "../utils/maths";
import lodash from "lodash";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import {
  setErrorMessage,
  setBestUntil,
  setIsLoading,
} from "../services/stateService";
import { ElectricPriceContext } from "../contexts/ElecticPriceContext";

function Body() {
  console.log("Body");
  const dispatch = useDispatch();
  const [priceData, setPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  const { actions, values } = useContext(ElectricPriceContext);

  const activeHour = useSelector((state) => state.main.activeHour);

  const from = useSelector((state) => state.date.from);
  const until = useSelector((state) => state.date.until);

  const renderDot = useCallback((line) => {
    const {
      payload: { timestamp },
    } = line;

    return timestamp === currentTimeStamp() ? (
      <Dot {...line}>
        <div></div>
      </Dot>
    ) : null;
  }, []);

  useEffect(() => {
    getPriceData(from, until)
      .then(({ data, success }) => {
        if (!success) throw new Error();

        const priceData = chartDataConvertor(data.ee);

        setPriceData(priceData);

        actions.setAveragePrice(getAveragePrice(priceData));
      })
      .catch(() => dispatch(setErrorMessage(ERROR_MESSAGE)))
      .finally(() => dispatch(setIsLoading(false)));

      console.log('useEffect, priceData');
  }, [from, until, dispatch, actions]);

  useEffect(() => {
    const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

    if (lowPriceIntervals.length) {
      setX1(lowPriceIntervals[0].position);
      setX2(lodash.last(lowPriceIntervals).position + 1);
      dispatch(setBestUntil(lowPriceIntervals[0].timestamp));
    }

    console.log('useEffect, lowPriceIntervals');
  }, [priceData, activeHour, dispatch]);

  return (
    <Row>
      <Col>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" interval={1} />
            <YAxis />
            <Tooltip />
            <Line
              type="stepAfter"
              dataKey="price"
              stroke="#8884d8"
              dot={renderDot}
            />
            <ReferenceArea x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />
            <ReferenceLine y={values.averagePrice} label="Average" stroke="grey" />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
}

export default Body;
