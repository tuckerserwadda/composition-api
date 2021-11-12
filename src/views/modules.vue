<template>
    <div>
    <span>Capacity: <strong>{{capacity}} and {{leftSpaces}} seats are left to seat</strong></span>
    <div><button @click="increaseCapacity">increase Capacity</button></div>
    <div>{{going}}</div>

    </div>
</template>

<script>
// importing the functions from the capacity.js file 
import useCapacity  from "@/use/capacity"
    export default {
        setup() {
            const {capacity, attending, leftSpaces,increaseCapacity, going} = useCapacity()
            return {capacity, attending, leftSpaces, increaseCapacity, going} }   
    }
</script>

<style lang="scss" scoped>

</style>