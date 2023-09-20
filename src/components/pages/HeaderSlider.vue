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
          style="max-height: 100%; width:100%; background-color: rgba(0,0,0,54%); ">
          <div style="max-height: 100%; width:100%; padding-right: 30px; padding-top:30px">
          <h6>ذكاء الدولية توفر لك.....</h6>
            <div class="input-wrapper">
            <br/>
              <p class="animated-text1" style="font-size:40px;font-weight:bold; color: #09B9E1">البرمجة</p>
              <br/>

            </div>
            <p>نقدم لك جميع خدمات المواقع الإلكترونية وتطبيقات الموبايل وبرامج إدارة المؤسسات وكل <br/>
              ,الحلول التقنية الذكية التي تحتاجها في إنشاء وتطوير أعمالك لتنقل أعمالك للمستقبل<br/>
               وتواكب تقنيات الذكاء الاصطناعي.</p>
            <b-button>تواصل معنا</b-button>
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
      };
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
        }, 2000);
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
    },
    created() {
      this.play();
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
  justify-content: right;
  direction: rtl;
  color:#ffffff !important;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
  text-align: right;
}
#overlay button {

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
text-align: right;

}
/*animated text  */
.animated-text1 {
  overflow: hidden;
  white-space: nowrap;
  border-right: 1px solid black;
  animation: typing1 3s steps(30) infinite;
  width: 20%;
  display: block;
  height: 50px;
}

@keyframes typing1 {
  from {
    width: 0;
  }
  to {
    width:20%;
  }
}
.animated-text2 {
  overflow: hidden;
  white-space: nowrap;
  border-right: 1px solid black;
  animation: typing2 3s steps(30) infinite;
  width: 10%;
  display: none;

}

@keyframes typing2 {
  from {
    width: 0;
  }
  to {
    width:10%;
  }
}
.animated-text3 {
  overflow: hidden;
  white-space: nowrap;
  border-right: 1px solid black;
  animation: typing3 3s steps(30) infinite;
  width: 10%;
  display: none;

}

@keyframes typing3 {
  from {
    width: 0;
  }
  to {
    width:10%;
  }
}


  </style>