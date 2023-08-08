import { combineReducers } from "redux";
import { mobileAppReducer, mobileDevelopment, presetatIonReducer, selectedReducer, testmonialReducer, uiuxDesign, webDevelopment } from "./reducer";

const roortReducer = combineReducers({

    mobileDevelopment: mobileDevelopment,
    webDevelopment:webDevelopment,
    uiuxDesign:uiuxDesign,
    presetatIonReducer:presetatIonReducer,
    testmonialReducer:testmonialReducer,
    mobileAppReducer:mobileAppReducer,
    selectedReducer:selectedReducer
})
export default roortReducer