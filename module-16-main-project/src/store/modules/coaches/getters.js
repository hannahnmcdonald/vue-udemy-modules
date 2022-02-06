export default {
    coaches(state) {
        return state.coaches;
    },
    //only render if there are coaches
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0; 
    },
    // find coach with user id
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId);
    }
};