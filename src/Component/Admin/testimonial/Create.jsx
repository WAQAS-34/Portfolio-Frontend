import React, { useEffect, useState } from "react";
import portfolio1 from "@/assets/images/portfolio1.svg";
import Loader from "../../Loader/Loader";
import axios from "axios";
import BASE_URL from "@/url";
import {
  getimages,
  upload,
  uiux,
  presentation,
  testimonial,
} from "@/endPoints";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  presentationDispatch,
  testimonailDispatch,
  uiuxDispatch,
  websiteDev,
} from "@/store/action";
import { Form } from "react-bootstrap";
import CountrySelect from "@/Component/CountrySelect/CountrySelect";

const CreateWebsite = () => {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [country, setcountry] = useState();
  const { id } = router.query;
  const testimonialState = useSelector(
    (state) => state && state.testmonialReducer.testimonial
  );
  const [State, setState] = useState({
    clientName: "",
    // likeCount: "",
    clientPic: "",
    county: "",
    imageFile: false,
    countyPic: "",
    review: "",
    star: null,
  });
  console.log("State.selected", State);

  const handleimage = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setState((prev) => {
      return {
        ...prev,
        clientPic: url,
        imageFile: file,
      };
    });
  };

  const handleUplod = () => {
    if (router.query.id) {
      if (!State.imageFile) {
        handleUpdate(State.webImage);
        return;
      }
    }
    if (State.imageFile == "" || State.clientPic == "") {
      toast.warning(`Image Fiels Are Required`, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const formData = new FormData();
    formData.append(`image`, State.imageFile);
    axios({
      url: `${BASE_URL}${upload}`,
      method: "post",
      data: formData,
    })
      .then((res) => {
        console.log("upload ", res.data.link);
        if (router.query.id) {
          handleUpdate(res.data.link);
        } else {
          handleCreate(res.data.link);
        }
      })
      .catch((err) => {
        console.log(err);

        if (err?.response?.data) {
          toast.error("Only images are allowed", {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  const handleCreate = (imageLink) => {
    setloading(true);
    axios({
      url: `${BASE_URL}${testimonial}`,
      method: "post",
      data: {
        clientName: State.clientName,
        clientPic: imageLink,
        county: country.label,
        countyPic: country.countyPic,
        review: State.review,
        star: State.star,
      },
    })
      .then((res) => {
        setloading(false);
        setState({
          clientName: "",
          // likeCount: "",
          clientPic: "",
          county: "",
          imageFile: false,
          countyPic: "",
          review: "",
          star: 0,
        });

        router.push(`/admin/testimonial/view`);
        if (res.data) {
          toast.success(` Create successfully`, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        setloading(false);
        setState({
          views: "",
          likeCount: "",
          webImage: "",
          imageUrl: false,
          imageFile: "",
        });

        if (err?.response?.data?.message) {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  const handleUpdateAndNavigate = async () => {
    await dispatch(websiteDev()); // Wait for the state to be updated
    router.push(`/admin/testimonial/view`); // Navigate after state update
  };
  const handleUpdate = (imageLink) => {
    setloading(true);
    axios({
      url: `${BASE_URL}${testimonial}/${id}`,
      method: "patch",
      data: {
        clientName: State.clientName,
        clientPic: imageLink,
        county: country.label,
        countyPic: country.countyPic,
        review: State.review,
        star: State.star,
      },
    })
      .then((res) => {
        setloading(false);
        setState({
          clientName: "",
          // likeCount: "",
          clientPic: "",
          county: "",
          imageFile: false,
          countyPic: "",
          review: "",
          star: 0,
        });

        console.log("res", res);
        if (res.data) {
          handleUpdateAndNavigate();
          // dispatch(websiteDev());

          // router.push(`/admin/web-dev/view`);
          toast.success(`Update successfully`, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        setloading(false);
        setState({
          clientName: "",
          // likeCount: "",
          clientPic: "",
          county: "",
          imageFile: false,
          countyPic: "",
          review: "",
          star: 0,
        });

        if (err?.response?.data?.message) {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  useEffect(() => {
    console.log(router.query);
    if (router.query.id) {
      dispatch(testimonailDispatch(`/${router.query.id}`));
    }
  }, []);
  useEffect(() => {
    if (testimonialState) {
      setcountry({
        label: testimonialState.county,
        countyPic: testimonialState.countyPic,
      });
      setState({
        clientName: testimonialState.clientName,
        // likeCount: "",
        clientPic: testimonialState.clientPic,
        county: testimonialState.county,

        countyPic: testimonialState.countyPic,
        review: testimonialState.review,
        star: testimonialState.star,
      });
    }
  }, [testimonialState]);

  return (
    <div className="bg-darkblue">
      <br />
      <br />
      <br />

      <div className="container websiteForm full-hig">
        {State.clientPic ? (
          <img src={State.clientPic} className="previwImag" alt="" />
        ) : //   <img src={"/images/1691193413725--wallpaperflare.com_wallpaper-(4).jpg"} className="previwImag" alt="" />
        null}
        <label className="btn4">
          <input type="file" name="image" onChange={handleimage} hidden />
          Upload Image
        </label>

        <input
          type="text"
          value={State.clientName}
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                clientName: e.target.value,
              };
            })
          }
          placeholder="Enter Name"
          className="inputStyle"
        />
        <textarea
          value={State.review}
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                review: e.target.value,
              };
            })
          }
          placeholder="Enter Review"
          className="inputStyle height"
        ></textarea>

        <input
          type="number"
          value={State.star}
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                star: e.target.value,
              };
            })
          }
          placeholder="Enter Stars"
          className="inputStyle"
        />
        <br />
        <br />

        <CountrySelect setValue={setcountry} value={country} />
        <br />

        {router.query.id ? (
          <button className="outlinebtn1" onClick={handleUplod}>
            {loading ? <Loader /> : "Update"}
          </button>
        ) : (
          <button className="outlinebtn1" onClick={handleUplod}>
            {loading ? <Loader /> : "Create"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateWebsite;
