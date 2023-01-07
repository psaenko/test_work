<template>
  <section>
    <div class="my-2">
      <back-button />
    </div>

    <div id="map" class="vw-100" style="height: 90vh">
    </div>

    <create-market-modal ref="modal" @create="createMarker"/>
  </section>
</template>

<script>
import "leaflet/dist/leaflet.css";
import leaflet from 'leaflet'
import createMarketModal from '@/components/modals/create.marker.modal.vue'
import backButton from "../components/buttons/back.button.vue";
import {mapMutations, mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {
    leaflet,
    createMarketModal,
    backButton
  },
  data() {
    return {
      zoom: 6,
      allMarkers: [],
      myIcon: leaflet.icon({
        iconUrl: 'geo-alt-fill.png',
        iconSize: [30, 30],
        iconAnchor: [24, 29],
        popupAnchor: [-8, -20],
      }),
      map: null
    };
  },
  async mounted() {
    this.allMarkers = this.markers

    this.map = leaflet.map('map').setView([48.104863, 30.488292], 6)
    await this.createMap(this.markers)
  },
  methods: {
    createMap(markers) {
      leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 19,
            doubleClickZoom: 'false',
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(this.map);


      markers.map((marker) => {
        leaflet.marker(marker.latlng, {
          icon: this.myIcon,
        }).addTo(this.map).bindPopup(`<p>${marker.name}</p>`).on('mouseover', function (e) {
          this.openPopup();
        });
      })

      this.map.on('click', async (e) => {
        this.openModal(e.latlng.lat, e.latlng.lng)
      });
    },

    openModal(lat, lng) {
      this.$refs.modal.openModal(lat, lng);
    },

    createMarker(data) {
      this.addMarker({
        "latlng": new Array(data.latitude, data.longitude),
        "name": data.name
      })

      leaflet.marker([data.latitude, data.longitude], {
        icon: this.myIcon,
      }).addTo(this.map).bindPopup(`<p>${data.name}</p>`)
    },

    ...mapMutations({addMarker: 'markers/addMarker'})
  },
  computed: {
    ...mapGetters({markers: 'markers/markers'}),
  },
}
</script>
