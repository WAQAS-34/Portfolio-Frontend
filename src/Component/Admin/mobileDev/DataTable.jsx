import Table from "react-bootstrap/Table";
import portfolio1 from "@/assets/images/portfolio1.svg";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  mobileDispatch,
  presentationDispatch,
  uiuxDispatch,
  websiteDev,
} from "@/store/action";
import axios from "axios";
import BASE_URL from "@/url";
import { toast } from "react-toastify";
import { mobileappdev, presentation, uiux, webdev } from "@/endPoints";
import { Form } from "react-bootstrap";
function DataTable() {
  const router = useRouter();
  const [type, settype] = useState("GoogleSlide");
  const mobileAppState = useSelector(
    (state) => state && state.mobileAppReducer.mobileApp
  );
  console.log(mobileAppState);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);

  const handleDelete = () => {
    axios({
      url: `${BASE_URL}${mobileappdev}/${show}`,
      method: "delete",
    })
      .then((res) => {
        dispatch(mobileDispatch());

        setshow(false);

        if (res.data) {
          toast.success(`Delete successfully`, {
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
  const handleEdit = (id, type) => {
    router.push(`/admin/mob-dev/create?id=${id}`);
  };
  useEffect(() => {
    dispatch(mobileDispatch());
  }, []);

  return (
    <div className="bg-darkblue  ">
      <DeleteModal handleDelete={handleDelete} show={show} setShow={setshow} />
      <br />
      <br />
      <br />
      <div className="container">
        <button
          onClick={() => router.push(`/admin/mob-dev/create.html`)}
          className="btn1 mb-3"
        >
          Create
        </button>

        <br />
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>App name</th>
              <th>Decsription</th>
              <th>Seleted</th>
              <th>all screen Image</th>
              <th>Image</th>
              <th>Thumbnail</th>
              <th>skills</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!mobileAppState?.length
              ? null
              : mobileAppState &&
                mobileAppState?.map((item, ind) => {
                  console.log(item);
                  return (
                    <tr key={ind}>
                      <td>{ind + 1}</td>
                      <td>{item.appName}</td>
                      <td style={{ maxWidth: "200px" }}>{item.appDecs}</td>
                      <td>{item.selected ? "Yes" : "No"}</td>
                      <td>
                        {item.allScreenImages.map((item, ind) => {
                          return (
                            <img
                              key={ind}
                              src={item}
                              className="tableImage"
                              alt=""
                            />
                          );
                        })}
                      </td>
                      <td>
                        <img
                          key={ind}
                          src={item.appImage}
                          className="tableImage"
                          alt=""
                        />
                      </td>
                      <td>
                        <img
                          key={ind}
                          src={item.thumbnailImage}
                          className="tableImage"
                          alt=""
                        />
                      </td>
                      <td>
                        {item.appSkills.map((item, ind) => {
                          return (
                            <p key={ind} className="p1">
                              {item.label}
                            </p>
                          );
                        })}
                      </td>
                      <td>
                        <AiOutlineEdit
                          onClick={() => handleEdit(item._id, item.type)}
                          className="red-color"
                        />
                        <AiOutlineDelete
                          onClick={() => setshow(item._id)}
                          className="red-color"
                        />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DataTable;
