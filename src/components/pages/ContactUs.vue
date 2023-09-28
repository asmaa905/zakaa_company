<template>
  <div class="img content" >
<h2
:style="`${lang=='en'?'text-align: left;':' text-align: right;'}`"

>{{ $t('subscribeToGetNotations') }}</h2>
<p
:style="`${lang=='en'?'text-align: left;':' text-align: right;'}`"

>{{ $t('subscribeInEmailToGetUpdatesAndNewNews') }}</p>
<form>
  <button>{{ $t('subscribe') }}</button>
  <input 
  type="email"

  :placeholder="$t('EnterYourEmail')"
  :style="`${lang=='en'?' justify-content: flex-start;':' justify-content: flex-end;'}`"
  />
</form>
  </div>
</template>
<script>
export default {
  name: "contact-us",
  computed :{
    lang() {
      return localStorage.getItem("lang") || "en";

    }
  },
};
</script>
<style scoped>
.content{
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img{
  background-image: url('@/assets//BackgroundBlue.jpg');
  background-position: 100%;
}
h2{
  color: var(--light-primary2, #CCEEEF);
text-align: right;

/* 18 Bold */
font-family: Cairo;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
/* direction: rtl; */
}
p{
  color: var(--White, #FFF);

/* 16 Reg */
font-family: Cairo;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 16px 0;
}
button{
  color: var(--White, #FFF);

/* 16 Reg */
font-family: Cairo;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
border:none;
border-radius: 4px;
background: var(--Blue2, #28649C);
display: flex;
width: 82px;
padding: 4px 8px 6px 8px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
box-shadow: 0px 4px 4px 0px rgba(144, 144, 144, 0.25);
}
input{
  border-radius: 4px;
background: var(--White, #FFF);

display: flex;
padding: 9px 16px 9px 168px;
align-items: center;
box-shadow: 0px 4px 4px 0px rgba(144, 144, 144, 0.25);
margin-left: 16px;
border:none
}
form{
  display: flex;
  align-items: center;
}
</style>
