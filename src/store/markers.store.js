export const markersStore = {
    state() {
        return {markers: []}
    },
    mutations: {
        addMarker(state, data) {
            state.markers.push(data)
        },
    },
    getters: {
        markers(state) {
            return state.markers
        }
    },
    namespaced: true
}
