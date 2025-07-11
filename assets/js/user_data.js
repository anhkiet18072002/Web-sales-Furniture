// Lấy dữ liệu từ Local Storage hoặc sử dụng mảng trống nếu không có dữ liệu
export let arrUser = JSON.parse(localStorage.getItem("user")) || [];
// Cập nhật Local Storage với dữ liệu mới
export const updateUserLocalStorage = () => {
  localStorage.setItem("user", JSON.stringify(arrUser));
};
//trả về mảng arrUser
export const getArrUser = () => arrUser;

//Xóa data arrUser
export const resetUser = () => {
  arrUser = [];
  updateUserLocalStorage();
};
