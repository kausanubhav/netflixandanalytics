import "./movie.css";
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import { useState } from "react";
import storage from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function Movie() {
  const location = useLocation();
  const movie = location.state.movie;
  const [newMovie, setNewMovie] = useState({ movie });
  const [img, setImg] = useState("");
  const [trailer, setTrailer] = useState("");
  const [video, setVideo] = useState("");
  const [uploaded, setUploaded] = useState(0);
  const [progress, setProgress] = useState(0);

  const { dispatch } = useContext(MovieContext);

  //handleChange
  const handleChange = (e) => {
    const value = e.target.value;
    setNewMovie({ ...newMovie, [e.target.name]: value });
  };
  console.log(newMovie);
  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress(Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          ));
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setNewMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
            console.log(uploaded);
          });
        }
      );
    });
  };
  //handleUpload
  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
    ]);
  };
  if(progress===100){
    alert('done');
    setProgress(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(newMovie, dispatch);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/new-product">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>{" "}
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>{" "}
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={movie.title}
              onChange={handleChange}
              name="title"
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movie.genre}
              onChange={handleChange}
              name="genre"
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
              onChange={handleChange}
              name="year"
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movie.limit}
              onChange={handleChange}
              name="limit"
            />
            <label>Duration</label>
            <input
              type="text"
              placeholder={movie.duration}
              onChange={handleChange}
              name="duration"
            />
            <label>trailer</label>
            <input
              type="file"
              placeholder={movie.trailer}
              onChange={(e) => setTrailer(e.target.files[0])}
              name="trailer"
            />
            <label>Video</label>
            <input
              type="file"
              placeholder={movie.video}
              onChange={(e) => setVideo(e.target.files[0])}
              name="video"
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                onChange={(e) => setImg(e.target.files[0])}
                name="img"
              />
            </div>
            
              <button className="addProductButton" onClick={handleSubmit}>
                update
              </button>
              <button className="addProductButton" onClick={handleUpload}>
                Upload
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
