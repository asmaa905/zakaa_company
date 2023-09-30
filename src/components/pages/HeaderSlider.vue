<template>
    <div id="carouselExampleIndicators" class="carousel slide rounded-lg"
    style="  padding-top: 60px;">
      <div class="carousel-inner position-relative" style="position: relative;">
        <div
          class="carousel-item"
          v-for="(item, i) in slides"
          :key="i"
          ref="carouselItem"
          :class="current == i ? 'active' : ''"
        >
        <div 
          id="overlay"
          style="max-height: 100%; width:100%; background-color: rgba(0,0,0,54%); "
          :style="`${lang=='en'?' direction: ltr;justify-content: left; text-align: left;':  ' direction: rtl;justify-content: right; text-align: right;'}`"

          >
          <div style="max-height: 100%; width:100%; padding-top:30px"
          :style="`${lang == 'en'?'padding-left: 30px; ':'padding-right: 30px;'}`"
          >
          <h6
          :style="`${lang=='en'?' text-align: left;' : 'text-align: right;'}`"
          >ذكاء الدولية توفر لك.....</h6>
            <div class="input-wrapper">
            <br/>
                <button  
                    class="btn2 button"
                    style="font-size:40px;font-weight:bold; "
                    v-for="(itemm, i) in animatedWords"
                    :key="i"
                    :style="`display: ${currentWord == i ? 'block' : 'none'}`"                >
                <div>
                    <span>{{ itemm.text }}</span>
                </div>
            </button>
              <br/>

            </div>
            <p>نقدم لك جميع خدمات المواقع الإلكترونية وتطبيقات الموبايل وبرامج إدارة المؤسسات وكل <br/>,الحلول التقنية الذكية التي تحتاجها في إنشاء وتطوير أعمالك لتنقل أعمالك للمستقبل<br/> وتواكب تقنيات الذكاء الاصطناعي.</p>
            <b-button class="cc">{{ $t('contactUs') }}</b-button>
          </div>
          </div>
        <img 
        :src="item.src"
        style="width:100%; height:100%"
        alt="slider"/>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "header-slider",
    data() {
      return {
        current: 0,
        timer: 0,
        timerWord:null,
        currentWord: 0,
        animatedWords:[
        {
            id: 1,
            text: "البرمجة",
          },
          {
            id: 2,
            text: "التطبيق",
          },
          {
            id: 3,
            text: "التقدم",
          },
        ],
        slides: [
          {
            id: 1,
            src: "/imgsSlides/Pic1.jpg",
          },
          {
            id: 2,
            src: "/imgsSlides/Pic2.jpg",
          },
          {
            id: 3,
            src: "/imgsSlides/Pic3.jpg",
          },
          {
            id: 4,
            src: "/imgsSlides/Pic4.jpg",
          },
        ],
        paragragh:{
          "en":"We provide you with all website services, mobile applications, enterprise management programs, and all The smart technical solutions you need to create and develop your business to move your business to the futureKeeping pace with artificial intelligence technologies.",
          "ar":">نقدم لك جميع خدمات المواقع الإلكترونية وتطبيقات الموبايل وبرامج إدارة المؤسسات وكل <br/>,الحلول التقنية الذكية التي تحتاجها في إنشاء وتطوير أعمالك لتنقل أعمالك للمستقبل<br/> وتواكب تقنيات الذكاء الاصطناعي."
        }
      };
    },
    computed :{
    lang() {
      return localStorage.getItem("lang") || "en";

    }
  },
    methods: {
      nextSlide() {
        this.current++;
        if (this.current >= this.slides.length) this.current = 0;
        this.resetPlay();
      },
      play() {
        let app = this;
        this.timer = setInterval(function () {
          app.nextSlide();
        }, 3000);
      },
      resetPlay() {
        clearInterval(this.timer);
        this.play();
      },
      prevSlide() {
        this.current--;
        if (this.current < 0) this.current = this.slides.length - 1;
        this.resetPlay();
      },
      selectSlide(i) {
        this.current = i;
        this.resetPlay();
      },
      // /* animate text */
      secondWord() {
        this.currentWord++;
        if (this.currentWord >= this.animatedWords.length) this.currentWord = 0;
        this.resetAnimateWord();
      },
      Animate() {
        let app = this;
        this.timerWord = setInterval(function () {
          app.secondWord();
        }, 3600);
      },
    
      resetAnimateWord() {
        clearInterval(this.timerWord);
        this.Animate();
      },
    },
    created() {
      this.play();
      this.Animate();
    },

  };
  </script>
  
  <style lang="scss" scoped>
  .carousel {
    max-height: 75vh;
    position: relative;
    overflow: hidden;
  }
  
  .carousel .carousel-inner {
    max-height: 75vh;
  }
  
  .carousel .carousel-inner img {
    width: 100%;
    height: 75vh;
    box-sizing: border-box;
  }
  .carousel-item {
    position: relative;

  }

#overlay  {
position: absolute;
  display: block;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  color:#ffffff !important;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;

}
#overlay .cc {

  width: 150px;
height: 40px;



padding: 4px, 8px, 6px, 8px;
border-radius: 4px;
gap: 8px;
color:#ffffff !important;
  background-color:  #00ABAD !important;
  font-size: 16px;

}

#overlay p {
//styleName: 16 Reg;
font-family: Cairo;
font-size: 16px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: justified;

}
#overlay  h6 {
  //styleName: 20 Reg;
font-family: Cairo;
font-size: 20px;
font-weight: 400;
line-height: 37px;
letter-spacing: 0em;
// text-align: right;

}




/* The typewriter cursor effect colorchange*/
@keyframes blink-caret {
  from, to {  border-color: #28649C }
  50% { border-color: #09B9E1; }
}
@keyframes colorchange {
  from, to {  color: #28649C }
  50% { color: #09B9E1; }
}
#overlay  .button {
    top :60px;
    // position: fixed;
    border-left: 5px solid #09B9E1;
    height:50px;
    font-size: 40px;
    font-weight: 400px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background:transparent;
    animation:borderMove 3.5s alternate-reverse step-end ,
    colorchange 7s  infinite ease-in,
    blink-caret 7s infinite ease-in;
    background: none;
    border-right:unset !important;
    border-top:unset !important;
    border-bottom:unset !important;
    line-height: 8px;
    font-family: cairo;
}

#overlay .btn2 {
  overflow: hidden;

    top:134px;
    width:130px;
    letter-spacing: 3px;
    font-weight: bold;
     display :none;
     line-height: 5px;
}
#overlay .btn2 div{
    position: relative;
    width:100%;
    
     left:-55%
}
#overlay .btn2 span{
    position: absolute;
   
}
@keyframes borderMove {
    0%{
        padding:  5px 0px 5px 0px;
    }
    4%{
        padding: 5px 0px 5px 10px;

    } 
    8%{
        padding:  5px 0px 5px 20px;

    } 
    12%{
        padding: 5px 0px 5px 30px;

    } 
    16%{
        padding: 5px 0px 5px 40px;

    } 
    20%{
        padding: 5px 0px 5px 50px;

    } 
    24%{
        padding: 5px  0px  5px 60px;
    } 
    28%{
        padding: 5px 0px 5px 70px

    } 
   32%{
        padding: 5px  0px 5px 80px;

    } 
    38%{
        padding: 5px 0px 5px 90px;

    } 
    42%{
        padding: 5px 0px 5px 100px;

    }
    46%{
        padding:  5px 0px 5px 110px;
    }
    58%{
        padding: 5px 0px 5px 120px;

    } 
    50%{
        padding: 5px 0px 5px 130px;

    } 
    54%{
        padding:  5px 0px 5px 120px;

    } 
    58%{
        padding: 5px 0px 5px 110px;

    } 
    62%{
        padding: 5px 0px 5px 100px;

    } 
    66%{
        padding: 5px 0px 5px 90px;

    } 
    70%{
        padding: 5px  0px  5px 80px;
    } 
    74%{
        padding: 5px 0px 5px 70px

    } 
    78%{
        padding: 5px  0px 5px 60px;

    } 
    82%{
        padding: 5px 0px 5px 50px;

    } 
    86%{
        padding: 5px 0px 5px 40px;

    } 
    90%{
        padding: 5px  0px  5px 30px;
    } 
    94%{
        padding: 5px 0px 5px 20px

    } 
    98%{
        padding: 5px 0px 5px 10px

    } 
    100%{
        padding: 5px 0px 5px 0px

    } 
}
  </style>