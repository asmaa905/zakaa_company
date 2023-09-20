<template>
    <footer class="text-center text-lg-end  text-xs-center"  style="background-color: #12151C;color:white">      
      <section class="text-align-right">
        <div class="container text-center text-md-end  text-xs-center p-4 ">
          <div class="row mt-3 ">
            <!-- company info -->
            <div class="col-md-3 col-lg-4 col-xl-3  mb-4 d-flex flex-column align-items-start">
              <!-- logo -->
              <img 
              src="@/assets/logo.png" 
              style="width:133px;height: 72px;"
              />
              <!-- company name -->
              <h6 class="text-uppercase fw-bold mb-4"
               >
               <span > ذكاء الدولية -مصر </span>
              </h6>
              <div class="mx-0">
               <!--phone number-->
              <p 
                class="phone d-flex flex-row " 
              >
                <i class="fas fa-phone flex-1"></i>
                <span class="flex-2 mx-2">01558075795</span>
              </p>
              <!-- address -->
              <p 
                class="address d-flex flex-row flex-gap-1" 
              >
              <i class="fa-solid fa-location-dot"></i>
              <span class="flex-2 mx-2">القاهرة - مدينة بدر - الحى الثانى</span>
              </p>
              <!-- E-mail -->
              <p 
                class="email d-flex flex-row flex-gap-1" 
              >
              <i class="fas fa-envelope "></i>
              <span class="flex-2 mx-2">hr@thaka.saaa</span>
            </p>
              </div>
            </div>
            <!-- menu-->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-flex flex-column align-items-start">
              <h6 class="text-uppercase fw-bold mb-4 section-title">القائمة</h6>
              
              <p v-text="'الرئيسية'"></p>
              <p  v-text="'من نحن' "></p>
              <p v-text="'الخدمات ' "></p>
              <p v-text="'الوظائف' "></p>
            </div>
            <!-- services-->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column align-items-start">
              <h6 class="text-uppercase fw-bold mb-4 section-title">
                الخدمات
              </h6>
              <div class="d-flex flex-row gap-8" style="gap:8px">
                <img src="@/assets/solar_code-square-bold.svg"  alt="code" />
                <p class="flex-2" v-text="'حلول تقنية متكاملة '"></p>
              </div>
              
              <div class="d-flex flex-row flex-gap-1" style="gap:8px">
                <img src="@/assets/solar_code-square-bold.svg"  alt="code" />
                <p  v-text="'حلول تقنية متكاملة '"></p>
              </div>
              <div class="d-flex flex-row flex-gap-2" style="gap:8px">
                <img src="@/assets/solar_code-square-bold.svg"  alt="code" />
                <p  v-text="'تدريب وتأهيل'"></p>
              </div>
              <div class="d-flex flex-row flex-gap-2" style="gap:8px">
                <img src="@/assets/solar_code-square-bold.svg"  alt="code" />
                <p  v-text="'الدراسات والاستشارات'"></p>
              </div>

            </div>
            <!-- last news -->
            <div class=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column align-items-start " style="width:fit-content !important">
              <h6 class="text-uppercase fw-bold mb-4 section-title">
                اخر الاخبار
              </h6>
              <div>
                <b-form inline >
                  <label class="text-align-right">ادخل بريدك الالكترونى ليصلك كل جديد</label>
                  <div class="email-from d-flex mt-2  " >
                      <b-input
                        class="flex-1 mb-2 mr-sm-2 mb-sm-0"
                        placeholder="email"
                        style="border-radius: 0px !important;"
                      ></b-input>
                      <b-button 
                        class="flex-1 " 
                        style="background-color: #00ABAD;border-radius: 0px !important;"
                      >
                        <i class="fa-solid fa-paper-plane fa-flip-horizontal text-white"/>
                      </b-button>
                  </div>
                </b-form>
              </div>
              <div class="social-media d-flex mt-3 ">                
                <span class="icon flex-1"><img src="@/assets/typcn_social-facebook.svg"/></span>
                <span class="icon flex-1"><img src="@/assets/basil_instagram_solid.svg"/></span>
                <span class="icon flex-1"><img src="@/assets/mdi_twitter.svg"/></span>
                <span class="icon flex-1"><img src="@/assets/ri_linkedin-fill.svg"/></span>
              </div>
        </div>
      </div>
    </div>
      </section>   
      <hr style="color: #ffff;width:83%;"  class="text-align-center mx-auto"> 
      <!-- Copyright -->
      <div class="text-center pb-4 copy-right" style="background-color: rgba(0, 0, 0, 0.05);">
       
       <span>2023جميع الحقوق محفوظة لشركة ذكاء الدولية </span>
       <span class="icon">	&copy;</span> 
      </div>
 </footer>
</template>
<script>
export default {
  name: "footer-comp",
};
</script>

<style>
footer{
  direction: rtl;
  font-size:16px; 
  
  font-family:cairo;
  color:white;
}
.copy-right {
  font-weight:400px;

}
.copy-right icon {
  font-size:14px;
  font-weight:400px;
  font-weight: bold;
} 
/* section-title */
.section-title   {
  position: relative;
  font-family: Cairo;
  font-size: 16px;
  font-weight: bold;

  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  color:#28649C

}

.section-title::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  width:53px;
  border-radius: 4px;
  bottom: 0;
  left: 0;
  background-color: #28649C;


  /* transform-origin: bottom right;
  transition: transform 0.25s ease-out; */
}
.section-conent {
  font-size:14px;
  gap:2px
}
.social-media .icon {
  width:40px;
  height: 40px;
}
.email-from {
  border-radius: 4px !important;
}
</style>
