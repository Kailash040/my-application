import React, { useState, useEffect } from "react";
// import ImageGallery from 'react-image-gallery';
import axios from "axios";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";
import img12 from "../images/img12.png";
import img14 from "../images/img14.png";
import img15 from "../images/img15.png";
import img16 from "../images/img16.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const Home = () => {
  const imgs = [
    { id: 0, value: "https://wallpaperaccess.com/full/2667581.jpg" },
    { id: 1, value: " https://wallpaperaccess.com/full/2637581.jpg" },
    { id: 2, value: "https://wallpaperaccess.com/full/2667581.jpg" },
  ];
  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  //

  const [messages, setMessages] = useState("");
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // from state
  return (
    <div>
      <div className="main_container ">
        <div className="item_container">
          <img src={img2} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>

        <div className="item_container">
          <img src={img3} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img4} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img5} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img6} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img7} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img8} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img9} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img10} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img11} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img12} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>

        <div className="item_container">
          <img src={img14} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img15} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
        <div className="item_container">
          <img src={img16} width="" height="" alt="" />
          <p>Ortiz bracelet</p>
          <p>Triangle cut, Blue</p>
        </div>
      </div>
      {/* button div */}
      <div className="button_container">
        <button className="home_btn"> Load More</button>
      </div>
      {/*  image gallery with thumbnail navigation */}
      <div className="gallery_container">
        <div className="main">
          <img src={wordData.value} height="80%" width="90%" />
          <div className="flex_row">
            {imgs.map((data, i) => (
              <div className="thumbnail" key={i}>
                <img
                  className={wordData.id == i ? "clicked" : ""}
                  src={data.value}
                  onClick={() => handleClick(i)}
                  height="70"
                  width="100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="form_container">
        <h3> Contact Us</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Messages"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              value={messages}
              onChange={(e) => setMessages(e.target.value)}
              placeholder="Leave a comment here"
            />
            <Form.Text className="text-muted">
              {messages.length < 15 ? "Please fill max 20 alphabet" : ""}
            </Form.Text>
          </FloatingLabel>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
