const state = {
  number: 0,
};

const mutations = {
  increment(state) {
    state.number++;
  },
  decrement(state) {
    state.number--;
  },
};

export default { state, mutations };
