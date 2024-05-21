import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function ContactItem({
  contact: { id, name, number },
  onDelete,
}) {
  return (
    <div>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>

      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
