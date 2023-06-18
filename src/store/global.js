import { action } from "easy-peasy";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  global: {
    userId: null,
    authToken: null,
    setUserId: action((state, payload) => {
      state.userId = payload;
    }),
    setAuthToken: action((state, payload) => {
      state.authToken = payload;
    }),
  },
};
