// Good Luck 💪🏾
function removeDuplicates(arr){
    return arr.filter((el, index)=>{
        // console.log(el);
        // console.log(`item index => ${arr.indexOf(el)}`)
        // console.log(`index => ${index}`)
        return (arr.indexOf(el) === index);
    })
}

console.log(removeDuplicates([4,5,6,10,4,5]));


console.log(removeDuplicates(["Hassan", "Aisha", "Aisha"]));

