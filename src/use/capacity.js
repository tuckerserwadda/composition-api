/**
 * this file contains the object for capacity object 
 * this makes the function and the code more reusable 
 * 
 */
import {ref, computed, watch} from "vue"
const useCapacity = ()=>{
    const capacity = ref(3) 
      const attending = ref(["bob", "amosi", "jane"])
      const going = ref(false)
      // method
       let increaseCapacity =()=>{
         capacity.value++
       }
       // computed property 
       let leftSpaces = computed(()=>{return capacity.value - attending.value.length})
       /**
        * the watch fuction watches one property that depends on another property 
        * so going is going to depend on left spaces if they are greater than zero then going will be true 
        */
       watch(leftSpaces, (newValue, oldValue)=>{
         if((newValue - oldValue) > 0 ){
           going.value= true
         }
       })

       return{capacity, attending,increaseCapacity, leftSpaces, going}

}
export default useCapacity