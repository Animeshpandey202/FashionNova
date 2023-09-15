import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
    // Use toFixed(2) to round the totalAmount to 2 decimal places
    setTotalAmount(calculatedTotal.toFixed(2));
  }, [cart]);

  const handleCheckout = () => {
    // Perform any necessary checkout logic here

    // Display a thank you message toast
    console.log("order details", cart);
    navigate("/form");
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div
            id="1"
            style={{ flex: "0.6", paddingLeft: "20px", paddingTop: "20px" }}
          >
            <div className=" h-40px w-50px">
              {cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />;
              })}
            </div>
          </div>

          <div
            id="2"
            style={{
              flex: "0.3",
              position: "fixed",
              top: "200px",
              left: "150vh",
              zIndex: 1,
            }}
          >
            <div>
              <div backgroundColor="green" width="250px">
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginBottom: "20px",
                    color: "green",
                  }}
                >
                  Your Cart
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "26px",
                    marginBottom: "20px",
                    color: "green",
                  }}
                >
                  Summary
                </div>
                <p style={{ marginBottom: "20px" }}>
                  <span>Total Items: {cart.length}</span>
                </p>
                <div className="">
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Total Amount: ${totalAmount}
                  </p>
                  <button
                    onClick={handleCheckout}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Check Out Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="7"  style={{ textAlign: "center", marginTop: "40vh" }}>
          <h1>Your Cart is Empty</h1>
          <Link to={"/"} style={{ textDecoration: "none" }}>
          <div style={{ textAlign: "center", marginTop: "5vh" }}>
          <button
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </div>
           
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
