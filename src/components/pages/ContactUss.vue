<template>
    <div class="contact-us mb-0">
        <div class="container text-center  d-flex flex-column align-items-center ">
            <h2 
            v-text="'اشترك ليصلك اشعار'" 
            class="text-align-center   mt-5 "
            style="    color:rgb(204, 238, 239)"/>
            <div class="  mb-5  d-flex gab-8  text-align-right flex-column align-items-center justify-content-center wd-100">
                <p 
                v-text="'قم بالتسجيل بالنشرة البريدية لتلقى الاشعارات والتحديثات الجديدة'"  
                class="text-align-center flex-1"
                ></p>
                <b-form  class="flex-1 w-100 " inline style="direction:rtl">
                    <div class="email-from d-flex mt-2 gap-2"  >
                        <b-input
                        class="flex-1 mb-2 mr-sm-2 mb-sm-0 mx-8  rounded"
                         placeholder="ادخل البريد الالكترونى"
                        style="border-radius:2px !important;"
                        ></b-input>
                        <b-button 
                        class="flex-1 p-auto 3 rounded" 
                        style="background-color: rgb(40, 100, 156);border-radius: 2px !important;"
                       
                        >
                        اشتراك
                        </b-button>
                    </div>
                </b-form>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "contact-us",
};
</script>

<style scopes>
.contact-us {
    background:
        linear-gradient(to top left, rgb(74, 207, 203), transparent),
        linear-gradient(to top right, rgb(15, 118, 128), transparent);
    background-blend-mode: screen; 
    margin-bottom: 0px !important;
    color:#ffffff
}
.spectrum-background {
    background:
        linear-gradient(red, transparent),
        linear-gradient(to top left, lime, transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
}
</style>
