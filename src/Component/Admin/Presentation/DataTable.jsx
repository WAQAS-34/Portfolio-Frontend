import Table from "react-bootstrap/Table";
import portfolio1 from "@/assets/images/portfolio1.svg";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { presentationDispatch, uiuxDispatch, websiteDev } from "@/store/action";
import axios from "axios";
import BASE_URL from "@/url";
import { toast } from "react-toastify";
import { presentation, uiux, webdev } from "@/endPoints";
import { Form } from "react-bootstrap";
function DataTable() {
  const router = useRouter();
  const [type, settype] = useState("GoogleSlide");
  const PresentationState = useSelector(
    (state) => state && state.presetatIonReducer.presentation
  );
  
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);

  const handleDelete = () => {
    axios({
      url: `${BASE_URL}${presentation}/${show}`,
      method: "delete",
    })
      .then((res) => {
        dispatch(presentationDispatch(`?type=${type}`));

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
    router.push(`/admin/presentation/create?id=${id}&type=${type}`);
  };
  useEffect(() => {
    dispatch(presentationDispatch(`?type=${type}`));
  }, []);
  const handleFilter = (filterType) => {
    settype(filterType)
    dispatch(presentationDispatch(`?type=${filterType}`));
  };
  return (
    <div className="bg-darkblue  ">
      <DeleteModal handleDelete={handleDelete} show={show} setShow={setshow} />
      <br />
      <br />
      <br />
      <div className="container">
        <button
          onClick={() => router.push(`/admin/presentation/create`)}
          className="btn1 mb-3"
        >
          Create
        </button>

        <Form.Select
          onChange={(e) => handleFilter(e.target.value)}
          aria-label="Default select example"
        >
          {/* <option value={""}> Filter By Type</option> */}
          <option value="GoogleSlide">Google Slide</option>
          <option value="Keynote">Keynote</option>
          <option value="PowerPoint">Power Point</option>
        </Form.Select>
        <br />
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
            {!PresentationState?.length
              ? null
              : PresentationState &&
                PresentationState?.map((item, ind) => {
                  
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
