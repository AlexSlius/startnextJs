export const THEME_SET_CURRENT_RESOLUTION = "THEME_SET_CURRENT_RESOLUTION";
export const THEME_SET_DETECTS = "THEME_SET_DETECTS";
export const THEME_SET_IS_HOME_PAGE = "THEME_SET_IS_HOME_PAGE";

export const themeSetCurrentResolution = (resolutionAlias) => {
    return {
        type: THEME_SET_CURRENT_RESOLUTION,
        payload: resolutionAlias
    };
};

export const themeSetCurrentDetects = (result) => {
    return {
        type: THEME_SET_DETECTS,
        payload: result
    };
}

export const themeSetIsHomePage = (status) => {
    return {
        type: THEME_SET_IS_HOME_PAGE,
        payload: status
    };
}

