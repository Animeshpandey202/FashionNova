import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "#ffffff",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "5px",
};

const labelStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  alignItems:"right",
  marginLeft: "17px",
   // Add 10px margin to the right of the input
};
const inputStyle2 = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    alignItems:"right",
    marginLeft: "26px",
     // Add 10px margin to the right of the input
  };
  

const submitButtonStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { cart } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && phone && address) {
        console.log(cart);
  
        const itemData = cart.map((item) => {
          return {
            title: item.title,
            price: item.price,
          };
        });
        console.log("itemData", itemData);
  
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "aplication/json",
          },
          body: JSON.stringify({
            name,
            phone,
            address,
            itemData,
            
          }),
        };
        const res = await fetch(
          "https://fashionnova-7b212-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",
          options
        );
        if (res) {
            toast.success("Thanks!....Your Details are saved with us we will surely get back to you");
            setName("");
            setPhone("");
            setAddress("");
        } else {
          alert("error occured");
        }
        // Submit the data to your desired location (e.g., Firebase) here
        console.log("Data submitted:", { name, phone, address });
      } else {
      alert("Error occurred. Please fill in all fields.");
    }
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle2}
          />
        </label>
        <label style={labelStyle}>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle2}
          />
        </label>
        <label style={labelStyle}>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
