import { AddAPhoto } from "@mui/icons-material";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useRef } from "react";
import { useContext, useState } from "react";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from "../../firebase";
import "./newProduct.css";
//TODO: UPDATE (api calls and client side)
export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgThumb, setImgThumb] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  // const imgRef=useRef();
  // const imgTitleRef=useRef();
  // const imgThumbRef=useRef();
  // const videoRef=useRef();
  // const trailerRef=useRef();

  // const reset = () => {
  //   ref.current.value = "";
  // };


  const {dispatch}=useContext(MovieContext);

  //handleChange
  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  //upload files
  const upload = (items) => {
    items.forEach((item) => {
      const fileName=new Date().getTime()+item.label+item.file.name;
      //ref() creates a reference to the file we want to operate on
      //ref() is called on the instance of storage service (storage in this case)
      //2nd parameter is the path which ref() points to 
      const storageRef = ref(storage, `/items/${fileName}`);

      //uploadBytesResumable() takes the reference and the file to be uploaded
      //uploadBytes() does the same thing; either can be used
      //but the former allows to observe the progress updates
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      

      //on() is called to listen for state changes,errors, and successful uploads
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log('Progress is '+ progress + '%')
        },
        (err) => {
          console.log(err);
        },
        //On successful upload, getDownloadUrl() is called
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
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
      { file: imgTitle, label: "imgTitle" },
      { file: imgThumb, label: "imgThumb" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    createMovie(movie,dispatch);

  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="img">
            Image
            <AddAPhoto className="addProductImgIcon"  />
          </label>
          <input
            type="file"
            id="img"
            name="img"
            style={{ display: "none" }}
           // ref={imgRef}
           // onChange={(e) => setImg(e.target.files[0])}
            onChange={(e) => setImg(e.target.files[0])}

          />
        </div>
        <div className="addProductItem">
          <label htmlFor="imgTitle">
            Title image
            <AddAPhoto  className="addProductImgIcon" />
          </label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            style={{ display: "none" }}
            //ref={imgTitleRef}
            //onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="imgThumb">
            Thumbnail
            <AddAPhoto  className="addProductImgIcon" />
          </label>
          <input
            type="file"
            id="imgThumb"
            name="imgThumb"
            //ref={imgThumbRef}
            style={{ display: "none" }}
            //onChange={(e) => setImgThumb(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Prestige"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select id="isSeries" name="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            //ref={trailerRef}
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="addProductButton" onClick={handleSubmit}>Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
