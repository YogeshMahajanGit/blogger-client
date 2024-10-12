// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// export interface TokenStore {
//   token: string;
//   setToken: (data: string) => void;
// }

// //Token store

// const useTokenStore = create<TokenStore>()(
//   devtools(
//     persist(
//       (set) => ({
//         token: "",
//         setToken: (data: string) => set(() => ({ token: data })),
//       }),
//       { name: "token-store" }
//     )
//   )
// );

// export default useTokenStore;
