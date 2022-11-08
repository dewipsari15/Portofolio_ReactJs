import React from "react";

export default function Carousel() {
  return (
    <div className="container">
      <h1 className="text">Welcome To Dewi Book Store</h1>
      <br />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://swebtoon-phinf.pstatic.net/20210924_282/1632470334874FEuC8_JPEG/0M_details.jpg?type=crop540_540"
              className="d-block w-100"
              width="25px"
              height="450px"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://swebtoon-phinf.pstatic.net/20220107_10/1641546429675pTYmW_JPEG/3M_details.jpg?type=crop540_540"
              className="d-block w-100"
              width="25px"
              height="450px"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cf.shopee.co.id/file/0ba43d47f1c5518f0c86669884e78275"
              className="d-block w-100"
              width="25px"
              height="450px"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cf.shopee.co.id/file/8a0bd14dcd550eaf8d285df3149b4742"
              className="d-block w-100"
              width="25px"
              height="450px"
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
