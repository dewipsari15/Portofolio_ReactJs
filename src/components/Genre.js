import React from "react";
import { Link } from "react-router-dom";

function Genre() {
  return (
    <div className="container">
      <div class="card">
        <h1 class="card-header">Horor</h1>
        <div class="card-body">
          <h5 class="card-title">Apa Kamu Suka Yang Menyeramkan??</h5>
          <Link to="/Genre/Horor" class="btn btn-primary">
            Lihat Semua
          </Link>
        </div>
      </div>
      <br />
      <div class="card">
        <h1 class="card-header">Fantasi</h1>
        <div class="card-body">
          <h5 class="card-title">Keajaiban dunia menunggumu!!</h5>
          <Link to="/Genre/Fantasi" class="btn btn-primary">
            Lihat Semua
          </Link>
        </div>
      </div>
      <br />
      <div class="card">
        <h1 class="card-header">Kerajaan</h1>
        <div class="card-body">
          <h5 class="card-title">Pangeran-pangeran Tampan!!</h5>
          <Link to="/Genre/Kerajaan" class="btn btn-primary">
            Lihat Semua
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Genre;
