import Table from "react-bootstrap/Table";
import portfolio1 from "@/assets/images/portfolio1.svg";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { uiuxDispatch, websiteDev } from "@/store/action";
import axios from "axios";
import BASE_URL from "@/url";
import { toast } from "react-toastify";
import { uiux, webdev } from "@/endPoints";
function DataTable() {
  const router = useRouter();
  const webDevState = useSelector(
    (state) => state && state.uiuxDesign.uiux
  );

  const dispatch = useDispatch();
  const [show, setshow] = useState(false);


  const handleDelete = () => {
    axios({
      url: `${BASE_URL}${uiux}/${show}`,
      method: "delete",
    })
      .then((res) => {
        dispatch(uiuxDispatch());
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
  const handleEdit = (id) => {
    router.push(`/admin/ui-ux/create?id=${id}`);
  };
  useEffect(() => {
    dispatch(uiuxDispatch());
  }, []);

  return (
    <div className="bg-darkblue  ">
      <DeleteModal handleDelete={handleDelete} show={show} setShow={setshow} />
      <br />
      <br />
      <br />
      <div className="container">
        <button
          onClick={() => router.push(`/admin/ui-ux/create`)}
          className="btn1 mb-3"
        >
          Create
        </button>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Like</th>
              <th>Views</th>
              <th>Seleted</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!webDevState?.length
              ? null
              : webDevState &&
                webDevState?.map((item, ind) => {
                  
                  return (
                    <tr key={ind}>
                      <td>{ind + 1}</td>
                      <td>{item.likeCount}</td>
                      <td>{item.views}</td>
                      <td>{item.selected ? "Yes" : "No"}</td>
                      <td>
                        <img
                          src={item.webImage}
                          className="tableImage"
                          alt=""
                        />
                      </td>
                      <td>
                        <AiOutlineEdit
                          onClick={() => handleEdit(item._id)}
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
