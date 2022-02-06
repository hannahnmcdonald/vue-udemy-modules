export default {
    coaches(state) {
        return state.coaches;
    },
    //only render if there are coaches
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0; 
    }
};