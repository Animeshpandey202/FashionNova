import { FcFullTrash } from 'react-icons/fc';
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const cartItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const itemImageStyle = {
  width: "30%", // Set id="5" to 30% width
  marginRight: "20px",
  borderRadius: "5px",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
};
const deleteIconStyle = {
  fontSize: "24px",
  color: "red",
  cursor: "pointer",
};

const itemTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "8px",
};

const itemDescriptionStyle = {
  fontSize: "15px",
  marginBottom: "8px",
};

const itemPriceStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginRight: "20px",
};

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  // Function to truncate the description to 50 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 50) {
      return words.slice(0, 50).join(" ") + " ...";
    }
    return description;
  };

  return (
    <div style={cartItemStyle}>
      <div style={itemImageStyle} id="5">
        <img height="550px" width="550px" src={item.image} alt={item.title} />
      </div>
      <div style={{ flex: "1" }} id="6">
        <h1 style={itemTitleStyle}>{item.title}</h1>
        <p style={itemDescriptionStyle}>{truncateDescription(item.description)}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={itemPriceStyle}>${item.price}</p>
          <div onClick={removeFromCart} style={deleteIconStyle}>
            <FcFullTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
