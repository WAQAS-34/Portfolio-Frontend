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
  mobileappdev,
} from "@/endPoints";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  mobileDispatch,
  presentationDispatch,
  uiuxDispatch,
  websiteDev,
} from "@/store/action";
import { Form } from "react-bootstrap";
import MultiSelect from "@/Component/MultiSelect/MultiSelect";
import { PORTFOLIO_TYPE } from "@/utils/utils";
import { ImCross } from "react-icons/im";

const CreateWebsite = () => {
  const options = [
    { value: "html5", label: "html 5" },
    { value: "css3", label: "css 3" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "reactjs", label: "react js" },
    { value: "reactNative", label: "react Native" },
    { value: "Redux", label: "Redux" },
    { value: "typescript", label: "typescript" },
    { value: "keynote", label: "keynote" },
    { value: "Microsoft_PowerPoint", label: "Microsoft_PowerPoint" },
    { value: "googleslides", label: "google slides" },
    { value: "Firebase", label: "Firebase" },
    { value: "Laravel", label: "Laravel" },
    { value: "nodejs", label: "node js" },
    { value: "PandaDoc", label: "PandaDoc" },
    { value: "PHP", label: "PHP" },
    { value: "Figma", label: "Figma" },
    { value: "AdobeXD", label: "Adobe XD" },
  ];
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [multiSelect, setmultiSelect] = useState();
  const { id } = router.query;
  const mobileAppState = useSelector(
    (state) => state && state.mobileAppReducer.mobileApp
  );

  const [State, setState] = useState({
    appName: "",
    appImage: "",
    appDecs: "",
    appSkills: [],
    allScreenImages: [],
    imageUrl: false,
    imageFile: "",
    likeCount: 0,
    views: 0,
    selected: false,
    thumbnailImage: false,
  });

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
  const handleimages = (e) => {
    const file = e.target.files;
    const formData = new FormData();
    Array.from(file).forEach((image, index) => {
      formData.append(`image`, image);
    });

    axios({
      url: `${BASE_URL}${upload}`,
      method: "post",
      data: formData,
    })
      .then((res) => {
        setState((prev) => {
          return {
            ...prev,
            allScreenImages: [...res.data.urls,...State.allScreenImages, ],
          };
        });
      })
      .catch((err) => {});
  };
  const handleThumbnail = (e) => {
    const file = e.target.files;
    const formData = new FormData();
    Array.from(file).forEach((image, index) => {
      formData.append(`image`, image);
    });

    axios({
      url: `${BASE_URL}${upload}`,
      method: "post",
      data: formData,
    })
      .then((res) => {
        setState((prev) => {
          return {
            ...prev,
            thumbnailImage: res.data.link,
          };
        });
      })
      .catch((err) => {});
  };

  const handleUplod = () => {
    if (router.query.id) {
      if (!State.imageFile) {
        handleUpdate(State.appImage);
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
        if (router.query.id) {
          handleUpdate(res.data.link);
        } else {
          handleCreate(res.data.link);
        }
      })
      .catch((err) => {
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
    const appSkills = multiSelect.map((item) => {
      return item.value;
    });

    setloading(true);
    axios({
      url: `${BASE_URL}${mobileappdev}`,
      method: "post",
      data: {
        appImage: imageLink,
        appName: State.appName,
        appDecs: State.appDecs,
        appSkills: multiSelect,
        portfolioType: PORTFOLIO_TYPE.Mobile_app_development,
        selected: State.selected,
        allScreenImages: State.allScreenImages,
        likeCount: State.likeCount,
        views: State.views,
        thumbnailImage: State.thumbnailImage,
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

        router.push(`/admin/mob-dev/view`);
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
    router.push(`/admin/mob-dev/view`); // Navigate after state update
  };

  const handleUpdate = (imageLink) => {
    // const appSkills = multiSelect.map((item) => {
    //   return item.value;
    // });
    setloading(true);
    axios({
      url: `${BASE_URL}${mobileappdev}/${id}`,
      method: "patch",
      data: {
        appImage: imageLink,
        appName: State.appName,
        appDecs: State.appDecs,
        appSkills: multiSelect,
        selected: State.selected,
        allScreenImages: State.allScreenImages,
        likeCount: State.likeCount,
        views: State.views,
        thumbnailImage: State.thumbnailImage,
      },
    })
      .then((res) => {
        setloading(false);
        setState({
          appName: "",
          appImage: "",
          appDecs: "",
          appSkills: [],
          allScreenImages: [],
          imageUrl: false,
          imageFile: "",

          selected: false,
        });

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
          appName: "",
          appImage: "",
          appDecs: "",
          appSkills: [],
          allScreenImages: [],
          imageUrl: false,
          imageFile: "",

          selected: false,
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
    if (router.query.id) {
      dispatch(mobileDispatch(`/${router.query.id}`));
    }
  }, []);
  useEffect(() => {
    if (router.query.id && mobileAppState) {
      setmultiSelect(mobileAppState.appSkills);

      setState({
        appName: mobileAppState.appName,
        appImage: mobileAppState.appImage,
        appDecs: mobileAppState.appDecs,
        imageUrl: mobileAppState.appImage,
        appSkills: mobileAppState.appSkills,
        allScreenImages: mobileAppState.allScreenImages,
        selected: mobileAppState.selected,
        likeCount: mobileAppState.likeCount,
        views: mobileAppState.views,
        thumbnailImage: mobileAppState.thumbnailImage,
      });
    }
  }, [mobileAppState]);
  const handleDelete = (ind) => {
    console.log("ind", ind);
    const data = [...State.allScreenImages];
    data.splice(ind, 1);
    console.log("deleteOne", data);
    setState((prev) => {
      return {
        ...prev,
        allScreenImages: data,
      };
    });
  };
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
        <input
          type="text"
          value={State.appName}
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                appName: e.target.value,
              };
            })
          }
          placeholder="Enter App Name"
          className="inputStyle"
        />

        <textarea
          value={State.appDecs}
          onChange={(e) =>
            setState((prev) => {
              return {
                ...prev,
                appDecs: e.target.value,
              };
            })
          }
          placeholder="Enter Decsription"
          className="inputStyle height"
        ></textarea>
        <br />
        <br />
        <MultiSelect
          multiSelect={multiSelect}
          setmultiSelect={setmultiSelect}
          options={options}
        />
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

        <br />
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {State.allScreenImages &&
            State.allScreenImages?.map((item, ind) => {
              return (
                <>
                  <div
                    style={{
                      position: "relative",
                      width: "max-content",
                      display: "flex",

                      justifyContent: "center",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <ImCross
                      onClick={() => handleDelete(ind)}
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        fontSize: "20px",
                        color: "red",
                        cursor: "pointer",
                        zIndex: 99,
                      }}
                    />
                    <img
                      src={item}
                      style={{
                        width: "261px",
                        height: "537px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </div>
                </>
              );
            })}
        </div>
        <label className="btn4">
          <input
            type="file"
            multiple
            name="image"
            onChange={handleimages}
            hidden
          />
          Upload Multiple Mobile Images
        </label>
        <br />
        <br />
        <label className="btn4">
          <input
            type="file"
            multiple
            name="image"
            onChange={handleThumbnail}
            hidden
          />
          Upload Thumbnail
        </label>
        <br />
        <br />

        {State.thumbnailImage ? (
          <img src={State.thumbnailImage} className="previwImag" alt="" />
        ) : null}
        <br />
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
