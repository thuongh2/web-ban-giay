import "../styles/sliderBar.scss";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import LoadingIcons from "react-loading-icons";
import { Carousel } from "react-bootstrap";
import {Link } from "react-router-dom";

export default function SliderBar() {
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    const q = query(collection(db, "5carousel"));
    await onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  tasks.map((task) => console.log(task.data.image));

  let image = <LoadingIcons.Bars stroke="#000" />;
  if (tasks.length != 0 || tasks != undefined || tasks != null) {
    image = tasks.map((task) => (
        <Carousel.Item key={task.id}>
        <Link to={task.data.link}>
          <img
            className="d-block w-100"
            src={task.data.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{task.data.label}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Link>
        </Carousel.Item>

    ));
  }

  return (
    <div>
      <Carousel>
        {image}
      </Carousel>
    </div>
  );
}
