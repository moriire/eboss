<template>
  <section class="section" id="section-rooms" >
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ header.title_alias || header.title }}</h2>
              <p data-aos="fade-up" data-aos-delay="100">{{ header.subtitle }}</p>
            </div>
          </div>
          <div class="row justify-content-center text-center mb-5" v-if="rooms.length===0" >
            <div class="col-md-7">
            Room not uploaded yet
            </div>
          </div>
          <div class="row" v-else >
            <div class="col-md-6 col-lg-4" data-aos="fade-up" v-for = "room in rooms" v-bind:key="room.id">
              <a href="#" class="room">
                <figure class="img-wrap">
                  <img :src="room.img" :alt="room.price" class="img-fluid mb-3">
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>{{ room.title }}</h2>
                  <span class="text-uppercase letter-spacing-1">&#8358; {{ room.price }} / per night</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>
</template>

<script>
export default {
  name: 'RoomSection',
  props: {
    msg: { String, default:''},
    rooms: { Array , default: []},
    header: {type: Function, },
  },
}
</script>