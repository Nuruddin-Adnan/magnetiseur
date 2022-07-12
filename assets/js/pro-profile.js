$("#country_selector").countrySelect({
   defaultCountry: "fr",
 })

 $("#country_selectorA").countrySelect({
   defaultCountry: "fr",
})
// ***************

{
   const experienceContent = document.getElementById("experienceContent");
   const addExperience = document.getElementById("addExperience");

   addExperience.addEventListener("click", ()=> {

      if (experienceContent.classList.contains("d-none")){
         experienceContent.classList.remove("d-none");
         experienceContent.classList.add("d-block");
      } 
   });
}

{
   const Yes1 = document.getElementById("Yes1");
   let No1 = document.getElementById("No1");
   const categoryService = document.getElementById("categoryService");

   Yes1.addEventListener("click", ()=> {

      if (Yes1.checked == true){
         categoryService.classList.remove("d-none");
         categoryService.classList.add("d-block");
      }
   });

   No1.addEventListener("click", ()=> {
      
      if (No1.checked == true){
         categoryService.classList.remove("d-block");
         categoryService.classList.add('d-none');
      }
   });
}

{
   const Yes2 = document.getElementById("Yes2");
   let No2 = document.getElementById("No2");
   const categoryService2nd = document.getElementById("categoryService2nd");

   Yes2.addEventListener("click", ()=> {

      if (Yes2.checked == true){
         categoryService2nd.classList.remove("d-none");
         categoryService2nd.classList.add("d-block");
      }
   });

   No2.addEventListener("click", ()=> {
      
      if (No2.checked == true){
         categoryService2nd.classList.remove("d-block");
         categoryService2nd.classList.add('d-none');
      }
   });
}

{
   const Yes3 = document.getElementById("Yes3");
   let No3 = document.getElementById("No3");
   const categoryService3rd = document.getElementById("categoryService3rd");

   Yes3.addEventListener("click", ()=> {

      if (Yes3.checked == true){
         categoryService3rd.classList.remove("d-none");
         categoryService3rd.classList.add("d-block");
      }
   });

   No3.addEventListener("click", ()=> {
      
      if (No3.checked == true){
         categoryService3rd.classList.remove("d-block");
         categoryService3rd.classList.add('d-none');
      }
   });
}