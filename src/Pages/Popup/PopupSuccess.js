import Swal from "sweetalert2";

const PopupSuccess = (successType) => {
    let title = "";
    if (successType === "login") {
        title = "Congrats! Successfully logged in";
    } else if (successType === "logout") {
        title = "Logged Out Successfully!";
    } else if (successType === "orderDelete") {
        title = "Successfully deleted order";
    } else if (successType === "booked") {
        title = "Congrats! We've just received your order.";
    } else if (successType === "orderApproved") {
        title = "Order Approved Successfully";
    } else if (successType === "new product") {
        title = "Successfully added a new product!";
    }
    else if (successType === "create admin") {
        title = "Admin created successfully!";
    }
    return Swal.fire({
        icon: "success",
        title: "<h3 style='color:#fff'>" + title + "</h3>",
        showConfirmButton: false,
        timer: 1500,
        padding: "1rem 2rem 3rem",
        background: "#313333",
    });
};

export default PopupSuccess;