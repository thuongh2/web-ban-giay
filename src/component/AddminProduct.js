import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Button, Form } from "react-bootstrap";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardItem from "./Card";
import { columns } from "../data/header";
import Table from "./Table";
import Modal from "./Modal";

function AddminProduct() {
  const [category, setCategory] = useState([]);
  const [cat, setCat] = useState({});
  const [imageFile, setImageFile] = useState("");
  const [product, setProduct] = useState({
    code: "",
    name: "",
    price: "",
    description: "",
    size: ""
  });
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState([]);

  const uploadFileHandler = (event) => {
    setImageFile(event.target.files);
  };

  useEffect(() => {
    async function getCategory() {
      await axios
        .get("http://localhost:8080/categories")
        .then((res) => {
          setCategory(res.data);
        })
        .catch((error) => console.log(error));

      await axios
        .get(`http://127.0.0.1:8080/products`)
        .then((res) => {
          const persons = res.data;
          setTasks(persons);
        })
        .catch((error) => console.log(error));
    }

    getCategory();
  }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    setProduct({
      ...product,
      [evt.target.name]: value,
    });
  }

  function handleOptionChange(e) {
    const value = e.target.value;
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    setCat({ id: value, name: label });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append(`imageFile`, imageFile[0]);
    formData.append(`code`, product.code);
    formData.append(`name`, product.name);
    formData.append(`price`, product.price);
    formData.append(`size`, product.size);
    formData.append(`description`, product.description);
    formData.append(`categoryId`, cat.id);

    await axios.post("http://localhost:8080/product/save", formData).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      []
    );
  };

  const handelRemove = async (code) => {
    console.log(code);
    axios.get(`http://localhost:8080/product/delete/${500}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      []
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "Product table",
        columns: [
          {
            Header: "code",
            accessor: "code",
          },
          {
            Header: "name",
            accessor: "name",
            // Cell method will provide the cell value; we pass it to render a custom component
          },
          {
            Header: "price",
            accessor: "price",
            // Cell method will provide the value of the cell; we can create a custom element for the Cell
          },
          {
            Header: "image",
            accessor: "image",
            Cell: ({ cell: { value } }) => {
              return (
                <img className="" width="150px" height="150px" src={value} />
              );
            },
          },
          {
            Header: "category",
            accessor: "category",
            Cell: ({ cell: { value } }) => {
              return (
                <>
                  <p>{value.id}</p>
                  <p>{value.name}</p>
                </>
              );
            },
          },
          {
            Header: "action",
            accessor: "",
            Cell: (code) => {
              return (
                <>
                  <a>Update</a>
                  <div>
                    <Button variant="danger" onClick={() => handelRemove(code)}>
                      Danger
                    </Button>
                  </div>
                </>
              );
            },
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="container">
      <Header />
      {/* <Table columns={columns} data={tasks} /> */}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Code</Form.Label>
          <Form.Control
            type="text"
            name="code"
            value={product.code}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={product.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="text"
            name="size"
            value={product.size}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" multiple onChange={uploadFileHandler} />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          onChange={handleOptionChange}
        >
          {category.map((c) => (
            <option value={c.id} name="category">
              {c.name}
            </option>
          ))}
        </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </div>
  );
}

export default AddminProduct;
