<template>
    <div class="join-us" id="JoinUs" @mouseenter="setClass()">
        <div class="overlay " v-if="showOverlay"  >
                        <h3
             style="
            color:#ffffff ;
            font-size:18px;
            font-weight:400px
            ">{{ $t('JoinUs') }}</h3>
            <p          
            style="
            color:#ffffff ;
            font-size:18px;
            font-weight:400px
            ">{{ $t('letsBulidGreatThingsTogether') }}</p>
            <b-button 
            style="
            color:#000000 ;
            background-color:#ffffff ;
            font-size:16px;
            font-weight:400px
            "
            >{{ $t('SHowAvalableJobs') }}</b-button>

        </div>
      <video  controls autoplay>
        <!--poster-->
  <source src="@/assets/video.mp4" type="video/mp4">
  <source src="@/assets/video.mp4" type="video/ogg">

    </video>
</div>
</template>
<script>

export default {
  data(){
    return{
      showOverlay: false
    }
  },
    computed :{
    lang() {
      return localStorage.getItem("lang") || "en";

    },  },
    methods: {
      setClass(){
       setTimeout(()=> {
        this.showOverlay = true
        }, 500);
        
      }
    },

}
</script>
<style scoped>
.join-us {
  position: relative;
}
video{
  display: flex;
width: 100%;
height: 100%;

justify-content: center;
align-items: center;
flex-shrink: 0;

}
.overlay {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
  transition: all 100s;

}

.overlay button {


padding: 4px, 8px, 6px, 8px;
border-radius: 4px;
gap: 8px;
color:#00ABAD !important;
  border: 1px solid #00ABAD;
}

.overlay button:hover {
 color:#ffffff !important;
  background-color:  #00ABAD !important;
}
</style>
