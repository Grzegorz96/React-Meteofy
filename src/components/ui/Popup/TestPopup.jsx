import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function showErrorPopup(data, setData) {
    MySwal.fire({
        title: "Error!",
        text: data.error,
        icon: "error",
        background: "#333",
        color: "#fff",
        heightAuto: false,
    }).then(() => {
        setData({ ...data, error: false });
    });
}
