import myAxios from "@/request";

// 用户注册
export const userRegister = async (params: any) => {
  return await myAxios.request({
    url: "/api/user/register",
    method: "POST",
    data: params,
  });
};

// 用户登录
export const userLogin = async (params: any) => {
  return await myAxios.request({
    url: "/api/user/login",
    method: "POST",
    data: params,
  });
};

// 获取用户信息
export const getCurrentUser = async () => {
  return await myAxios.request({
    url: "/api/user/current",
    method: "GET",
  });
};

// 用户注销
export const userLogout = async (params: any) => {
  return await myAxios.request({
    url: "/api/user/logout",
    method: "POST",
    data: params,
  });
};

// 获取用户列表
export const searchUsers = async () => {
  return await myAxios.request({
    url: "/users",
    method: "GET",
    // params: {
    //   username: username,
    // },
  });
};

export const deleteHotels = async (id: number) => {
  return await myAxios.request({
    url: `/hotels/${id}/`, // 使用模板字符串来插入 id
    method: "DELETE",
  });
};

export const searchHotels = async (id: any) => {
  return await myAxios.request({
    url: "/hotels/",
    method: "GET",
    params: {
      id,
    },
  });
};

// 编辑酒店信息
export const editHotels = async (formState: any) => {
  const { id, ...hotelData } = formState; // 解构出 id 和其他酒店数据
  return await myAxios.request({
    url: `/hotels/${id}/`, // 使用解构获取 id
    method: "PUT",
    data: hotelData, // 发送酒店数据（不包括 ID）
  });
};

export const searchRooms = async () => {
  return await myAxios.request({
    url: "/rooms",
    method: "GET",
  });
};

export const searchBookings = async () => {
  return await myAxios.request({
    url: "/bookings",
    method: "GET",
  });
};

// 删除用户
export const deleteUser = async (id: any) => {
  return await myAxios.request({
    url: "/api/user/delete",
    method: "POST",
    data: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
