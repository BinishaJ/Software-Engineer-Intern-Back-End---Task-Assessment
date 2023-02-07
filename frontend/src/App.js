import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    Name: "",
    email: "",
    phone: "",
    gender: "",
    hobbies: [],
  });

  const [errors, setErrors] = useState({
    Name: "",
    email: "",
    phone: "",
    gender: "",
    hobbies: "",
  });
  const { Name, email, phone, gender, hobbies } = errors;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setData({ ...data, gender: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (e.target.checked) {
      data.hobbies.push(value);
      setData({ ...data });
    } else {
      data.hobbies = data.hobbies.filter((hobby) => hobby !== value);
      setData({
        ...data,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await axios
      .post("http://localhost:4000/api/validation", data)
      .then((res) => {
        console.log(res);
        setData({ Name: "", email: "", phone: "", gender: "", hobbies: [] });
        setErrors({ Name: "", email: "", phone: "", gender: "", hobbies: [] });
        alert("Form submitted!");
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(error.response.data.message);
      });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${Name ? "is-invalid" : ""}`}
            name="Name"
            value={data.Name}
            onChange={handleChange}
          />
          {Name && <div className="invalid-feedback">{Name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${email ? "is-invalid" : ""}`}
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          {email && <div className="invalid-feedback">{email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className={`form-control ${phone ? "is-invalid" : ""}`}
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
          {phone && <div className="invalid-feedback">{phone}</div>}
        </div>

        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              value="Male"
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="Male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              value="Female"
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="Female">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              value="Others"
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="Others">
              Others
            </label>
          </div>
          {gender && (
            <div className="invalid-feedback" style={{ display: "inherit" }}>
              {gender}
            </div>
          )}
        </div>

        <label htmlFor="hobbies" className="form-label mt-3">
          Hobbies
        </label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="Reading"
              value="Reading"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="Reading">
              Reading
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="Traveling"
              value="Traveling"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="Traveling">
              Traveling
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="Listening to music"
              value="Listening to music"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="Listening to music">
              Listening to music
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="Playing Sports"
              value="Playing Sports"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="Playing Sports">
              Playing Sports
            </label>
          </div>
          {hobbies && (
            <div className="invalid-feedback" style={{ display: "inherit" }}>
              {hobbies}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
