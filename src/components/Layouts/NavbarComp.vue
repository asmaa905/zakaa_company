<template>
  <nav class="mx-auto d-flex-center navbar navbar-expand-lg align-items-center " 
  style="background-color: #ffffff; color:#D0D0D2;   overflow: hidden;
  position: fixed;
  top: 0;
  width:100%
">
   <div class="container "

>
    <div class="d-flex   translation " style="border: 1px solid #8A8A8A">
      <img src="@/assets/fluent-mdl2_world.svg" alt="trans" style="width:16px;height:16px;top:-0px"/>
      <span style="font-size:16px; font-family:cairo;color:#8A8A8A;font-weight:400px;line-height: 29.98px">EN</span>
    </div>
    <div class=" flex-center">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="#">وظائف</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">تواصل معنا</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">خدماتنا</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="#">من نحن</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="#">الرئيسية</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class=" ">
     <img style="height:56px;width:104px" src="@/assets/logo.png"/>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:"navbar-comp"
}
</script>

<style  scoped>
nav {
   font-family:cairo;
}
.nav-item  {
  position: relative;
  font-size:18px ;
  font-weight: bold;
  font-weight: 700px;
}

.nav-item ::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: #00ABAD;
  /* transform-origin: bottom right;
  transition: transform 0.25s ease-out; */
}

.nav-item :hover::after {
  transform: scaleX(1);
 /*  transform-origin: bottom left; */
}
.nav-item :hover{
  color:#00ABAD;
}
.translation {
  width: 60px;
height: 40px;

padding: 4px 8px 6px 8px;
border-radius: 8px;
border: 1px;
gap: 8px;


}
.translation img {
  margin:auto !important
}
</style>