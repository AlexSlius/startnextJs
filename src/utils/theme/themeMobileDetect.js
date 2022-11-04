import MobileDetect from "mobile-detect";

import { themeSetCurrentDetects } from "../../redux/actions/theme";

export const setMobileDetect = (dispatch) => {
    let detect = new MobileDetect(window.navigator.userAgent);

    dispatch(themeSetCurrentDetects(
        {
            phone: detect.phone(),
            tablet: detect.tablet(),
            os: detect.os(),
            userAgent: detect.userAgent()
        }
    ));
}