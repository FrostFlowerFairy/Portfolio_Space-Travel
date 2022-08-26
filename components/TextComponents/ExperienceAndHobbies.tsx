import { getHobbiesPosition, hobbiesVisible } from "../../lib/constants";
import { hobbiesText } from "../../lib/text";
import TextImageBillboard from "./TextImageBillboard";

export default function ExperienceAndHobbies() {
  //const tempScroll = (scroll: ScrollControlsState) => scroll.range(0, 1);
  return (
    <>
      <TextImageBillboard
        textContent={hobbiesText}
        baseFontSize={18}
        baseFontWidth={510}
        position={getHobbiesPosition()}
        scrollVisible={hobbiesVisible}
        key={"hobbies"}
      />
    </>
  );
}
