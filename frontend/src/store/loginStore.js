import create from 'zustand';
import { persist } from "zustand/middleware"

const useStore = 
  create(
    persist((set) => ({
      usernameLogin: "",
      isLogin: false,
      tokenLogin: "",
      roleLogin: "",

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
      },

      setTokenLogin: (tokenJwt) => {
        set((state) => ({
          tokenLogin: tokenJwt,
        }))
      },

      setRoleLogin: (roleLoginVal) => {
        set((state) => ({
          roleLogin: roleLoginVal,
        }))
      },
    }), { name: "login" })
  )


export default useStore;
export { useStore };