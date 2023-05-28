import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import Person2Icon from "@mui/icons-material/Person2";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, updateProfile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constans/userContans";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const EditProfile = ({ history }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const { error, isUpdated } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("description", description);
    myForm.set("address", address);

    // Check if an avatar is selected before adding it to the form data
    if (avatar) {
      myForm.append("avatar", avatar);
    }

    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    if (e.target.files.length === 0) {
      setAvatarPreview("/profile.png");
      setAvatar("");
    } else {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar?.url);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile updated successfully");

      history.push("/profile");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, history, isUpdated, user]);

  const loadProfile = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API}/api/v2/me`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <>
      <div className="UpdateProfileContainer">
        <div className="UpdateProfileBox">
          <h2 className="UpdateProfileHeading">Update Profile</h2>

          <form
            className="UpdateProfileForm"
            encType="multipart/form-data"
            onSubmit={updateProfileSubmit}
          >
            <div className="updateProfileName">
              <Person2Icon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="updateProfileEmail">
              <MailIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="updateProfileAddress">
              <HomeIcon />
              <input
                type="string"
                placeholder="Address"
                required
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="updateProfileEmail">
              <DescriptionIcon />
              <input
                type="string"
                placeholder="Description"
                required
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div id="updateProfileImage">
              {avatarPreview !== "" ? (
                <img src={avatarPreview} alt="Avatar Preview" />
              ) : (
                <img src="/profile.png" alt="Default Avatar" />
              )}
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProfileDataChange}
              />
            </div>

            <input type="submit" value="Update" className="UpdateProfileBtn" />
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default EditProfile;
