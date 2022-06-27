import create from 'zustand';
import { persist } from "zustand/middleware"

const useStore = 
  create(
    persist((set) => ({
      usernameLogin: "",
      isLogin: false,

      setUsernameLogin: (usernameLoginVal) => {
        set((state) => ({
          usernameLogin: usernameLoginVal,
        }))
      },
      
      setIsLogin: (isLoginVal) => {
        set((state) => ({
          isLogin: isLoginVal,
        }))
      },

      setLogout: () => {
        set((state) => ({
          usernameLogin: '',
          isLogin: false,
        }))
      }
    }), { name: "login" })
  )

// const useStore = create((set) => ({
//     usernameLogin: getLocalStorage("usernameLogin") || "",
//     isLogin: getLocalStorage("isLogin") || false,
//     setUsernameLogin: (usernameLogin) => {
//       set((state) => {
//         setLocalStorage("usernameLogin", usernameLogin);
//         return { usernameLogin };
//       })
//     },
//     setIsLogin: (isLogin) => {
//       set((state) => {
//         setLocalStorage("isLogin", isLogin);
//         return { isLogin };
//       })
//     }
//     // setUsernameLogin: (usernameLogin) => set(() => ({usernameLogin})),
//     // setIsLogin: (isLogin) => set(() => ({isLogin})),
// }));

// const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
// const setLocalStorage = (key, value) =>
//   window.localStorage.setItem(key, JSON.stringify(value));



export default useStore;
export { useStore };