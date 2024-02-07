import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTON } from "../Head";

function Footer({ activePrice, activeHour, setActiveHour, bestUntil }) {
  return (
    <>
      {activePrice === DEFAULT_ACTIVE_BUTTON ? (
        <TargetLow
          activeHour={activeHour}
          setActiveHour={setActiveHour}
          bestUntil={bestUntil}
        />
      ) : (
        <TargetHigh />
      )}
    </>
  );
}

export default Footer;
