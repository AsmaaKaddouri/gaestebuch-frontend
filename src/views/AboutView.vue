<template>
  <div class="page-container">
    <h1 class="page-header">Willkommen bei La Maison Arabe <span></span></h1>
    <div class="info-card shadow">
      <div class="card-body m-4 d-flex flex-column justify-content-center">
        <h5 class="text-center">Ihre Quelle für erstklassige Hotelbewertungen in Marrakesch.</h5>
        <h5 class="text-center">
          La Maison Arabe ist ein einzigartiges Hotel in Marrakesch, das Luxus und Tradition vereint. Unser Riad
          bietet Ihnen eine unvergleichliche Erfahrung inmitten der faszinierenden Kultur und Schönheit
          Marokkos. Wir sind stolz darauf, unseren Gästen nicht nur exzellente Unterkünfte, sondern auch
          unvergessliche Momente und erstklassigen Service zu bieten.</h5>
        <h5 class="text-center">
          Die Bedeutung von Kundenfeedback für uns bei La Maison Arabe kann nicht genug betont werden. Ihr Feedback ist
          nicht nur ein Spiegelbild Ihrer individuellen Erfahrung, sondern auch ein unschätzbarer Leitfaden für uns, um
          kontinuierlich unseren Service und unsere Einrichtungen zu verbessern.</h5>
        <h5 class="text-center">
          Wir sehen jeden Kommentar, jede Bewertung und jedes Lob als wertvolle Quelle konstruktiver Kritik und
          Inspiration. Kundenfeedback ermöglicht es uns, die Erwartungen unserer Gäste besser zu verstehen und gezielte
          Maßnahmen zu ergreifen, um diese zu übertreffen. Wir sind davon überzeugt, dass durch das Zuhören und
          Reagieren auf Ihre Anregungen unser Hotel nicht nur Ihren Erwartungen entspricht, sondern sie auch übertrifft.
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.page-container {
  position: relative;
  height: 100vh;
}

.page-header {
  position: relative;
  top: 100px;
  z-index: 1;
}

.info-card {
  min-width: 1500px;
  margin: 150px;
  position: absolute;
  z-index: 1;
}
.page-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/RiadMarrakesch.GIF") no-repeat center;
  background-size: cover;
  filter: brightness(200%) blur(100px);
  z-index: 0;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: normal;
  position: relative;
}
.text-center{
  text-align: center;
}
</style>
