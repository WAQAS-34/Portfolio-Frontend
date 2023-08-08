import React, { useEffect, useState } from "react";
import portfolio1 from "@/assets/images/portfolio1.svg";
import Loader from "../../Loader/Loader";
import axios from "axios";
import BASE_URL from "@/url";
import { getimages, upload, uiux, presentation } from "@/endPoints";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { presentationDispatch, uiuxDispatch, websiteDev } from "@/store/action";
import { Form } from "react-bootstrap";

const CreateWebsite = () => {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const presentationState = useSelector(
    (state) => state && state.presetatIonReducer.presentation
  );
  const [State, setState] = useState({
    views: "",
    likeCount: "",
    webImage: "",
    imageUrl: false,
    imageFile: "",
    type: "",
    selected: false,
  });
  console.log("State.selected", State.type);

  const handleimage = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setState((prev) => {
      return {
        ...prev,
        imageUrl: url,
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
    if (State.imageFile == "" || State.imageUrl == "") {
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
      url: `${BASE_URL}${presentation}`,
      method: "post",
      data: {
        webImage: imageLink,
        likeCount: State.likeCount,
        views: State.views,
        selected: State.selected,
        portfolioType: "Presentations Design",
        type: State.type,
      },
    })
      .then((res) => {
        setloading(false);
        setState({
          views: "",
          likeCount: "",
          webImage: "",
          imageUrl: false,
          imageFile: "",
        });

        router.push(`/admin/presentation/view`);
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
    router.push(`/admin/presentation/view`); // Navigate after state update
  };
  const handleUpdate = (imageLink) => {
    setloading(true);
    axios({
      url: `${BASE_URL}${presentation}/${id}`,
      method: "patch",
      data: {
        webImage: imageLink,
        likeCount: State.likeCount,
        views: State.views,
        selected: State.selected,
        type: State.type,

      },
    })
      .then((res) => {
        setloading(false);
        setState({
          views: "",
          likeCount: "",
          webImage: "",
          imageUrl: false,
          imageFile: "",
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
  useEffect(() => {
    console.log(router.query);
    if (router.query.id) {
      dispatch(
        presentationDispatch(`/${router.query.id}?type${router.query.type}`)
      );
    }
  }, []);
  useEffect(() => {
    if (presentationState) {
      setState({
        views: presentationState.views,
        likeCount: presentationState.likeCount,
        webImage: presentationState.webImage,
        imageUrl: presentationState.webImage,
        imageFile: false,
        selected: presentationState.selected,
        type: presentationState.type,
      });
    }
  }, [presentationState]);

  return (
    <div className="bg-darkblue">
      <br />
      <br />
      <br />

      <div className="container websiteForm full-hig">
        {State.imageUrl ? (
          <img src={State.imageUrl} className="previwImag" alt="" />
        ) : //   <img src={"/images/1691193413725--wallpaperflare.com_wallpaper-(4).jpg"} className="previwImag" alt="" />
        null}
        <label className="btn4">
          <input type="file" name="image" onChange={handleimage} hidden />
          Upload Image
        </label>
        <input
          type="number"
          value={State.views}
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                views: e.target.value,
              };
            })
          }
          placeholder="Enter Views"
          className="inputStyle"
        />
        <input
          value={State.likeCount}
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                likeCount: e.target.value,
              };
            })
          }
          type="number"
          placeholder="Enter Likes"
          className="inputStyle"
        />

        <Form.Select
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                type: e.target.value,
              };
            })
          }
          value={State.type}
          aria-label="Default select example"
        >
          <option value={""}> Select Type</option>
          <option value="GoogleSlide">Google Slide</option>
          <option value="Keynote">Keynote</option>
          <option value="PowerPoint">Power Point</option>
        </Form.Select>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Form.Check // prettier-ignore
            onChange={(e) =>
              setState((prev) => {
                return {
                  ...prev,
                  selected: e.target.checked,
                };
              })
            }
            checked={State.selected}
            value={State.selected}
            // defaultChecked={State.selected}
            type="switch"
            id="custom-switch"
            label=""
          />
          <p className="p1">Select</p>
        </div>

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
