<template>
  <div class="home">
    <HelloWorld msg=""/>
    <div class="reviews-box">
      <!-- Reviews will be displayed here -->
    </div>
  </div>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testimonial HTML</title>
    <!--popins-font-family--------->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!--using-Font-Awesome------------>
  </head>
  <body>
  <!--Testimonials----------------->
  <section id="testimonials">
    <!--heading-------------------->
    <div class="testimonial-heading">
      <span>La Maison Arabe</span>
      <h1>Feedbacks</h1>
    </div>

    <!--testimonials-box-container------->
    <div class="testimonial-box-container">
      <!--BOX-1------>
      <div class="testimonial-box">
        <!--top------->
        <div class="box-top">
          <!--profile---->
          <div class="profile">
            <!--img---->
            <div class="profile-img">
            </div>
            <!--name-and-username-->
            <div class="name-user">
              <strong>Dennis Korth</strong>
            </div>
          </div>
          <!--reviews----->
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i><!--Empty star-->
          </div>
        </div>
        <!--Comments/Reviews-------------->
        <div class="client-comment">
          <p>Sehr gutes hotel an perfekter Lage, super Service, super Restaurant, tolles spa, gute Betten, hilfsbereites
            Personal, werden bestimmt wieder kommen. Uns wurde auch ein guter guide empfohlen.
            Vielen dank an das ganze la maison arabe Team.</p>
          <span class="time-left">11:00</span>
        </div>
      </div>

      <!--BOX-2------>
      <div class="testimonial-box">
        <!--top------->
        <div class="box-top">
          <!--profile---->
          <div class="profile">
            <!--img---->
            <div class="profile-img">
            </div>
            <!--name-and-username-->
            <div class="name-user">
              <strong>Julia N</strong>
            </div>
          </div>
          <!--reviews----->
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i><!--Empty star-->
          </div>
        </div>
        <!--Comments/Reviews-------------->
        <div class="client-comment">
          <p>Wir haben die Empfehlung von unserem Gastgeber, Riad Kniza, erhalten. Während unseres Aufenthalts in
            Marrakech konnten wir uns von einigen Restaurants ein gutes Bild machen.
            Im La Maison Arabe war jedoch das dargebotene Essen wirklich geschmacklich umwerfend. Ein Feuerwerk an
            marokkanischen Gewürzen, Fisch und Fleisch gleichsam köstlich. Ein unbedingter Tipp für ein schönes Dinner!
            Unbedingt Tisch reservieren.
          </p>
          <span class="time-left">13:00</span>
        </div>
      </div>

      <!--BOX-3------>
      <div class="testimonial-box">
        <!--top------->
        <div class="box-top">
          <!--profile---->
          <div class="profile">
            <!--img---->
            <div class="profile-img">
            </div>
            <!--name-and-username-->
            <div class="name-user">
              <strong>Lisa Meier</strong>
            </div>
          </div>
          <!--reviews----->
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i><!--Empty star-->
          </div>
        </div>
        <!--Comments/Reviews-------------->
        <div class="client-comment">
          <p>Das Maison Arabe ist ein wunderbarer Ort und erfüllt alle Erwartungen an diese Vorstellung von
            1001-Nacht.Das Personal ist sehr freundlich und aufmerksam, das Haus wunderschön, die Bar überaus angenehm
            und das Hammam eine Wohltat.
            Das Dinner war vorzüglich und das Frühstück brauchbar, wenngleich das Angebot um 10.00 Uhr überwiegend aus
            leergefegten Platten bestand, was in dieser Preisklasse eigentlich nicht passieren darf.
            Drückt man hier ein Auge zu,ist das Maison Arabe ein toller Ort.</p>
          <span class="time-left">15:30</span>
        </div>
      </div>

      <!--BOX-4------>
      <div class="testimonial-box">
        <!--top------->
        <div class="box-top">
          <!--profile---->
          <div class="profile">
            <!--img---->
            <div class="profile-img">
            </div>
            <!--name-and-username-->
            <div class="name-user">
              <strong>Oktay Deniz</strong>
            </div>
          </div>
          <!--reviews----->
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i><!--Empty star-->
          </div>
        </div>
        <!--Comments/Reviews-------------->
        <div class="client-comment">
          <p>Wir machen einen privaten Kochkurs mit der ganzen Familie (11 Personen). Er war super organisiert und auch Vegetarier kamen voll auf ihre Kosten. Es gab eine Einführung zum Maison arabe, die Teezubereitung und die Gewürze. Eine ganz tolle Erfahrung. Vielen Dank Wafa und ihrem ganze Team.</p>
          <span class="time-left">18:00</span>
        </div>
      </div>

    </div>
  </section>
  </body>
  </html>
</template>

<style>
.home{
  position: relative;
}
.testimonial-heading {
  margin: 0;
  padding: 0;
  font-family: poppins, serif;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
#testimonials{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.testimonial-heading{
  letter-spacing: 1px;
  margin: 50px 0px;
  padding: 10px 20px;
}
.testimonial-heading h1{
  font-size: 2.2rem;
  font-weight: 500;
  background-color: #202020;
  color: #ffffff;
  padding: 10px 20px;
}
.testimonial-heading span {
  font-size: 1.3rem;
  color: #252525;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.testimonial-box-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
}

.testimonial-box-container:after{
  background: url("../assets/RiadMarrakesch.GIF") no-repeat center;
  height: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: initial;
  width: 100%;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  filter: blur(50px);
}
.testimonial-box-container:after{
  filter: blur(50px);
  background-size: cover;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
}
.testimonial-box{
  width: 500px;
  box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
  padding: 20px;
  background-color: #ffffff;
  margin: 15px;
  cursor: pointer;
  margin-bottom: 16px;
  border: 1px solid #ccc;
}
.profile-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.profile-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.profile{
  display: contents;
  align-items: center;
}
.name-user{
  display: flex;
  flex-direction: column;
}
.name-user strong{
  color: #3d3d3d;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}
.name-user span{
  color: #979797;
  font-size: 0.8rem;
}
.reviews{
  color: #f9d71c;
}
.box-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.client-comment p{
  font-size: 0.9rem;
  color: #4b4b4b;
}
.testimonial-box:hover{
  transform: translateY(-10px);
  transition: all ease 0.3s;
}
::selection{
  color:#ffffff;
  background-color: #252525;
}
.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}
.time-left {
  float: right;
  color: #999;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

// Add the Font Awesome library
fontawesome.library.add(solid)

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<script setup>
</script>
