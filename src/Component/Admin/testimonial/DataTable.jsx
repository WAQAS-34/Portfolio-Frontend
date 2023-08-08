import Table from "react-bootstrap/Table";
import portfolio1 from "@/assets/images/portfolio1.svg";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  presentationDispatch,
  testimonailDispatch,
  uiuxDispatch,
  websiteDev,
} from "@/store/action";
import axios from "axios";
import BASE_URL from "@/url";
import { toast } from "react-toastify";
import { presentation, testimonial, uiux, webdev } from "@/endPoints";
import { Form } from "react-bootstrap";
function DataTable() {
  const router = useRouter();
  const [type, settype] = useState("GoogleSlide");
  const testimonialState = useSelector(
    (state) => state && state.testmonialReducer.testimonial
  );
  console.log(testimonialState);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);

  const handleDelete = () => {
    axios({
      url: `${BASE_URL}${testimonial}/${show}`,
      method: "delete",
    })
      .then((res) => {
        dispatch(testimonailDispatch());

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
    router.push(`/admin/testimonial/create?id=${id}`);
  };
  useEffect(() => {
    dispatch(testimonailDispatch());
  }, []);
  return (
    <div className="bg-darkblue  ">
      <DeleteModal handleDelete={handleDelete} show={show} setShow={setshow} />
      <br />
      <br />
      <br />
      <div className="container">
        <button
          onClick={() => router.push(`/admin/testimonial/create`)}
          className="btn1 mb-3"
        >
          Create
        </button>

        <br />
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>stars</th>
              <th>country</th>
              <th>Image</th>
              <th>review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!testimonialState?.length
              ? null
              : testimonialState &&
                testimonialState?.map((item, ind) => {
                  console.log(item);
                  return (
                    <tr key={ind}>
                      <td>{ind + 1}</td>
                      <td>{item.clientName}</td>
                      <td>{item.star}</td>
                      <td>{item.county}</td>
                      <td>
                        <img
                          src={item.clientPic}
                          className="tableImage"
                          alt=""
                        />
                      </td>
                      <td style={{maxWidth:"200px"}}>  {item.review}</td>

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
