<template>
  <div>hoteldetail</div>
</template>
<script>
import { getHotelDetailDate } from "@/api/hotel.js";
export default {
  data() {
    return {
      hotelmessage: {
        bd_source: "",
        checkInDate: "",
        checkOutDate: "",
        city: "",
        cityUrl: "",
        extra: {},
        keywords: "",
        location: "",
        locationAreaFilterSelected: [],
        needSec: true,
        page: 1,
        sort: "0"
      }
    };
  },
  async created() {
      console.log(this.$store.state.hotelmessage)
    this.hotelmessage.checkOutDate = this.$store.state.hotelmessage.checkOutDate;
    this.hotelmessage.checkInDate = this.$store.state.hotelmessage.checkInDate;
    this.hotelmessage.city = this.$store.state.hotelmessage.city;
    this.hotelmessage.keywords = this.$store.state.hotelmessage.keywords;
    this.hotelmessage.cityUrl = this.$store.state.hotelmessage.cityurl;
    console.log(this.hotelmessage);
    let hoteldetailrs = await getHotelDetailDate({
      bd_source: "",
      checkInDate: this.hotelmessage.checkInDate,
      checkOutDate: this.hotelmessage.checkOutDate,
      city: this.hotelmessage.city,
      cityUrl: this.hotelmessage.cityUrl,
      extra: {},
      keywords: this.hotelmessage.keywords,
      location: "",
      locationAreaFilterSelected: [],
      needSec: true,
      page: 1,
      sort: "0"
    });
    console.log(hoteldetailrs);
  },
  methods: {}
};
</script>