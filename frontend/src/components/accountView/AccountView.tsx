import React, {useState, useRef, useEffect} from "react";
import axios from "axios";
import FormData from "form-data";

const AccountView = () => {
  // DEBOUNCING??????????????????????
  const [image, setImage] = useState({preview: "", data: ""});
  const [username2, setUsername] = useState("");
  const [media2, setMedia] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [accountUpdated, setAccountUpdated] = useState(false);

  const BASE_URL = "http://localhost:4001/api/v1";

  const handleFileChange = (e: any) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const handleSubmit = async () => {
    try {
      // e.preventDefault();

      // if (!media.data) return;

      const formData = new FormData();
      formData.append("username", username2);
      formData.append("platform", media2);
      formData.append("photo", image.data);

      const response = await axios.post(`${BASE_URL}/accounts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {}
  };
  // useEffect(() => {
  //   setIsValid(media ? true : false);
  // }, [media]);
  //  await createCity(newCity);
  //  navigate("/app/cities");

  return (
    <div>
      <h3>ADD NEW ACCOUNT</h3>
      {image.preview && (
        <img src={image.preview} width="100" height="100" alt="" />
      )}
      <form className="nav__search">
        {/* onSubmit={handleSubmit} */}
        <div>
          <label htmlFor="fullName">Username</label>
          <input
            id="fullName"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username2}
            name="username"
          />
        </div>
        <select
          onChange={(e) => {
            setMedia(e.target.value);
          }}
          required
          value={media2}
          name="platform"
        >
          <option hidden>Select social media</option>
          <option value="facebook">facebook</option>
          <option value="instagram">instagram</option>
          <option value="twitter">twitter</option>
          <option value="pinterest">pinterest</option>
          <option value="linkedin">linkedin</option>
        </select>
        {!isValid && <p>You must choose a value</p>}

        <div>
          <label htmlFor="photo">Account image</label>

          <input
            id="photo"
            type="file"
            accept="image/*"
            name="photo"
            onChange={handleFileChange}
          ></input>
        </div>
        <div>
          {/* <button type="reset">Cancel</button> */}
          <button type="button" onClick={handleSubmit}>
            Add account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountView;
