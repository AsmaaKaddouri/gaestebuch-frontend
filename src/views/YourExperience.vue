<template>
  <div class="Table">
    <div id="PleaseSignOurGuestbook">
    <h1 style="font-size: 2vw">How was your experience?</h1>
    </div>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <title>Form Reviews</title>
    </head>
    </html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
      <title>Star Rating in HTML CSS & JavaScript</title>
      <link rel="stylesheet" type="text/css" href="cssstyle">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300&display=swap" rel="stylesheet">
    </head>
    <body>
    <div class="container">
      <form id="ratingForm">
      <div class="contact-box">
        <div class="left"></div>
        <div class= "right">
          <h2>Write a review</h2>
          <label for="name"></label>
          <input type="text" class="field" placeholder="Name">
          <textarea class="field area" placeholder="Your opinion..."></textarea>
          <div class="stars">
            <span class="star star-5" data-rating="5"></span>
            <span class="star star-4" data-rating="4"></span>
            <span class="star star-3" data-rating="3"></span>
            <span class="star star-2" data-rating="2"></span>
            <span class="star star-1" data-rating="1"></span>
          </div>
          <button type="submit">Submit</button>
        </div>
       </div>
      </form>
    </div>
    </body>
    </html>
  </div>
</template>

<script>
const stars = document.querySelectorAll('.star')

stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = star.dataset.rating
    updateStars(rating)
  })
})

function updateStars (rating) {
  stars.forEach((star) => {
    if (parseInt(star.dataset.rating) < rating) {
      star.classList.add('active')
    } else {
      star.classList.remove('active')
    }
  })
}</script>

<style>
.PleaseSignOurGuestbook h1{
  font-family: 'Quicksand', sans-serif;
  color: burlywood;
  padding: 10px 20px;
  font-size: 1.5rem;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 100px;
  content: '';
  left: 50%;
  bottom: 0;
  transform: translateX(-100%);
  height: 10px;
  width: 50%;
  border-radius: 2px;
}
.PleaseSignOurGuestbook{
  font-size: 1.0rem;
  font-weight: 1000;
  color: #ffffff;
  margin: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
body {
  background: var(--bs-light);
  display: block;
  justify-content: center;
  align-items: normal;
  min-height: 200vh;
  font-size: 1vw;
}
.wrapper h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
textarea {
  width: 100%;
  background: var(--bs-light);
  padding: 1rem;
}
*{
  margin: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
body{
  width: 100%;
  height:100vh;
}

.container{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 100px;
}
.container:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/RiadMarrakesch.GIF") no-repeat center;
  background-size: cover;
  z-index: -1;
  filter: blur(50px);
}
.contact-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
}
.left {
  height: 100%;
  background: url("../assets/RiadMarrakesch.GIF") no-repeat center;
  background-size: cover;
}

.right{
  padding: 25px 40px;
}
h2{
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

h2:after{
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: #2ecc;
}

.field{
width: 100%;
border: 2px solid rgba(0, 0, 0, 0);
outline: none;
background-color: rgba(230, 230, 230, 0.6);
padding: 0.5rem 1rem;
font-size: 1.1rem;
margin-bottom: 22px;
transition: .3s;
}
.field:hover{
background-color: rgba(0, 0, 0, 0.1);
}

textarea {
min-height: 150px;
}
.stars {
  display: flex;
  align-items: center;
  gap: 25px;
}
.stars i {
  color: #e6e6e6;
  font-size: 35px;
  cursor: pointer;
}

.btn{
width: 50%;
padding: 0.5rem 1rem;
background-color: #2ecc71;
color: #fff;
font-size: 1.0rem;
border: none;
outline: none;
cursor: pointer;
transition: .3s;
}

.btn:hover{
    background-color: #27ae60;
}

.field:focus{
    border: 2px solid rgba(30,85,250,0.47);
    background-color: #fff;
}

.stars-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.star-icon {
  color: #e6e6e6;
  font-size: 35px;
  cursor: pointer;
  transition: color 0.3s;
}

.star-icon.active,
.star-icon:hover {
  color: #ffc107;
}

.star {
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 5em;
  height: 5em;
  margin-right: 5em;
}

.star:before {
  content: "\2605";
  font-size: 30px;
  color: #ffc107;
  position: absolute;
  top: -2rem;
  left: 14rem;
  width: 100%;
  height: 100%;
}

.star.active,
.star:hover {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 11.7 50.9-10.1 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L381.7 150.2 316 17.8c-11.7-23.6-45.6-23.6-57.4 0z' fill='%23ccc'/></svg>") no-repeat center;
  background-size: contain;
}

.star.active:before,
.star:hover:before {
  color: #ffc107;
}

</style>
