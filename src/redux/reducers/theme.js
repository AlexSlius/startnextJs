import {
    THEME_SET_CURRENT_RESOLUTION,
    THEME_SET_DETECTS,
    THEME_SET_IS_HOME_PAGE
} from "../actions/theme";

const initialState = {
    currentResolution: null,
    isHomePage: true,
    detects: {
        phone: null,
        tablet: null,
        os: null,
        userAgent: null
    },
}

export default function reduser(state = initialState, action) {
    switch (action.type) {
        case THEME_SET_IS_HOME_PAGE: {
            return {
                ...state,
                isHomePage: action.payload,
            };
        }
        case THEME_SET_CURRENT_RESOLUTION:
            return {
                ...state,
                currentResolution: action.payload,
            };
        case THEME_SET_DETECTS:
            return {
                ...state,
                detects: action.payload
            };
        default:
            return { ...state };
    }
}
