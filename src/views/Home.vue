<template>

  <div>
    <span>Capacity: <strong>{{capacity}} and {{leftSpaces}} seats are left</strong></span>
    <div><button @click="increaseCapacity">increase Capacity</button></div>
    <div>
      <ul>
        <li v-for="(name, index) in attending" :key="index">{{name}}</li>
      </ul>
      <div>name: <strong>{{name}}</strong> total Age: <strong>{{totalAge}}</strong></div>

    </div>

  </div>
</template>

<script>
// import the ref from vue 
// the setup can return whatever has to be accessed 
/** adding methods
 * to add a method just right a composition function 
 * inside the setup. and access the value of variable by 
 * using variable_name.value e.g capacity. value 
 * 
 * adding computed Properties 
 * import computed from vue, 
 * create the computed property and make it equal to computed that
 * returns an anornimous functions 
 * 
 * another way to declare reactive references 
 * import reactive from vue and then create an event that returns a reactive object
 * then to access the values import torefs from vue to destructure the event
 * in the computed property u dont have to use variable_name.value   
 *  */ 

import {ref, computed, reactive, toRefs} from "vue"
  export default {
    setup() {
      const capacity = ref(3) 
      const attending = ref(["bob", "amosi", "jane"])
      // method
       let increaseCapacity =()=>{
         capacity.value++
       }
       // computed property 
       let leftSpaces = computed(()=>{return capacity.value - attending.value.length})
       // using reactive syntax.. this is a better option 
       const event =reactive({
         age:32,
         name:"tucker",
         age2:30,
         totalAge:computed(()=>{return event.age + event.age2})

       })
      
      return {capacity, increaseCapacity, attending, leftSpaces, ...toRefs(event)} 
    }
    
  }
</script>

<style lang="scss" scoped>

</style>