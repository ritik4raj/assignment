import React from "react";
export default function AddUser(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    city: "",
    isAdd: false,
  });
  function handleSubmit(event) {
    event.preventDefault();
    const sendData = {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://jsonplaceholder.typicode.com/users", sendData)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          type="text"
          placeholder="City"
          onChange={handleChange}
          name="city"
          value={formData.city}
        />
        <button>Save</button>
      </form>
    </div>
  );
}
