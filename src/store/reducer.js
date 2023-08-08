const { default: CONSTANT } = require("./types")

const INITIAL_STATE = {
    mobileDev: false,
    webDev: false,
    uiux: false,
    presentation: false,
    testimonial: false,
    mobileApp: false,
    selected:false
}

export function webDevelopment(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANT.WEBDEV:
            return {
                ...state,
                webDev: action.payload
            }

        default:
            return state
    }
}
export function uiuxDesign(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANT.UIUX:
            return {
                ...state,
                uiux: action.payload
            }

        default:
            return state
    }
}
export function presetatIonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANT.PRESENTATION:
            return {
                ...state,
                presentation: action.payload
            }

        default:
            return state
    }
}
export function testmonialReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANT.TESTIMONIAL:
            return {
                ...state,
                testimonial: action.payload
            }

        default:
            return state
    }
}
export function mobileAppReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANT.MOBILEAPP:
            return {
                ...state,
                mobileApp: action.payload
            }

        default:
            return state
    }
}
export function selectedReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANT.SELECTED:
            return {
                ...state,
                selected: action.payload
            }

        default:
            return state
    }
}
