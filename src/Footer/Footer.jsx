import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTON } from "../Head";
import { useSelector } from "react-redux";

function Footer({ bestUntil }) {
  console.log('Footer');
  const activePrice = useSelector((state) => state.main.activePrice);

  return (
    <>
      {activePrice === DEFAULT_ACTIVE_BUTTON ? (
        <TargetLow
          bestUntil={bestUntil}
        />
      ) : (
        <TargetHigh />
      )}
    </>
  );
}

export default Footer;
