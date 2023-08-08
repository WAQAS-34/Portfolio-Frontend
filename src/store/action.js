import axios from "axios"
import CONSTANT from "./types"
import BASE_URL from "@/url"
import { mobileappdev, presentation, selected, testimonial, uiux, webdev } from "@/endPoints"

export const websiteDev = (data, type) => {
  return dispatch => {

    axios
      .get(
        `${BASE_URL}${webdev}${data ? data : ""}`,

      )
      .then(res => {
        
        dispatch({
          type: CONSTANT.WEBDEV,
          payload: res?.data.data
        })

      })
      .catch(err => {
        // dispatch({
        //   type: t.Constant.ERROR,
        //   payload: err
        // })
      })
  }
}
export const uiuxDispatch = (data, type) => {
  return dispatch => {

    axios
      .get(
        `${BASE_URL}${uiux}${data ? data : ""}`,

      )
      .then(res => {
        
        dispatch({
          type: CONSTANT.UIUX,
          payload: res?.data.data
        })

      })
      .catch(err => {
        // dispatch({
        //   type: t.Constant.ERROR,
        //   payload: err
        // })
      })
  }
}
export const presentationDispatch = (data, type) => {
  return dispatch => {

    axios
      .get(
        `${BASE_URL}${presentation}${data ? data : ""}`,

      )
      .then(res => {
        
        dispatch({
          type: CONSTANT.PRESENTATION,
          payload: res?.data.data
        })

      })
      .catch(err => {
        
      })
  }
}
export const testimonailDispatch = (data, type) => {
  return dispatch => {

    axios
      .get(
        `${BASE_URL}${testimonial}${data ? data : ""}`,

      )
      .then(res => {
        
        dispatch({
          type: CONSTANT.TESTIMONIAL,
          payload: res?.data.data
        })

      })
      .catch(err => {
        
      })
  }
}
export const mobileDispatch = (data, type) => {
  return dispatch => {

    axios
      .get(
        `${BASE_URL}${mobileappdev}${data ? data : ""}`,

      )
      .then(res => {
        
        dispatch({
          type: CONSTANT.MOBILEAPP,
          payload: res?.data.data
        })

      })
      .catch(err => {
        
      })
  }
}
export const Selected = (data, type) => {
  return dispatch => {

    axios
      .get(
        `${BASE_URL}${selected}${data ? data : ""}`,

      )
      .then(res => {
        
        dispatch({
          type: CONSTANT.SELECTED,
          payload: res?.data.data
        })

      })
      .catch(err => {
        
      })
  }
}