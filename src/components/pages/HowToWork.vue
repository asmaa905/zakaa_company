<template>
  <div class="img d-flex">
          <div class="container">

    <div class="content d-flex justify-content-between align-items-center">
      <div  class="leftSide d-flex  align-items-center justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <g filter="url(#filter0_d_612_158)">
    <circle cx="32" cy="28" r="28" fill="white" fill-opacity="0.5"/>
    <circle cx="32" cy="28" r="20" fill="#00ABAD"/>
    <path d="M17 28L17.1363 25.9294L17.5359 24L18.1716 22.3431L19 21.0718L19.9647 20.2726L21 20L22.0353 20.2726L23 21.0718L23.8284 22.3431L24.4641 24L24.8637 25.9294L25 28L24.8637 30.0706L24.4641 32L23.8284 33.6569L23 34.9282L22.0353 35.7274L21 36L19.9647 35.7274L19 34.9282L18.1716 33.6569L17.5359 32L17.1363 30.0706L17 28Z" fill="white"/>
    <path d="M46.5 28H22.5" stroke="white"/>
  </g>
  <defs>
    <filter id="filter0_d_612_158" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.566667 0 0 0 0 0.566667 0 0 0 0 0.566667 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_612_158"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_612_158" result="shape"/>
    </filter>
  </defs>
        </svg>
        <div class="img2"></div>
      </div>
        <div class="rightSide d-flex flex-column">
          <h3
          :style="`text-align:${ lang=='en'?'left'  : 'right'};`"

          >{{ $t('HowToWork') }}</h3>
          <ol >
            <li
            :style="`${ lang=='en'?'text-align:left; direction:ltr'  : '`text-align:right; direction:rtl;'}`"

            >{{ $t('getInformation') }}</li>
          </ol>
        <p
        :style="`text-align:${ lang=='en'?'left'  : 'right'};`"

        >نحن لا ننظر فقط إلى البيانات. نحن نبحث عن المعلومات.
          المعلومات التي تقود التحليل والرؤى ، والتي تمكننا من اكتساب فهم أفضل للأفراد والصناعة والأسواق ، وبالتالي تساعدنا على رسم طريق أفضل لتحقيق نتائج أفضل.</p>
        </div>


    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "how-to-work",
  computed :{
    lang() {
      return localStorage.getItem("lang") || "en";

    }
  },
};
</script>
<style scoped>
.content{
  padding: 40px  120px;
}
.img,.img2{


  background-size:cover ;

}
.img{
  background: url('@/assets/BackgroundBlue.jpg');
  background-position: 100%;
}
.img2{
  margin-right: 150px;
  height: 400px;
  width: 400px;
  background-image: url('@/assets/image20.png');
}
.rightSide{
  width:40%
}
h3{
  color: var(--Blue2, #28649C);
/* text-align: right; */

font-family: Cairo;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 32px;
}
li{
  color: var(--White, #FFF);
/* text-align: right; */


font-family: Cairo;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 24px;
margin-right: 25px;
}
p{
  color: var(--White, #FFF);
text-align: justify;
/* text-align: right; */
/*  */
font-family: Cairo;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 1.7;}
</style>

