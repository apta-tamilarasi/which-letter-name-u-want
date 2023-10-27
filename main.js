let a=prompt("Enter the number of names")
let arr=[]
let b=[]

for(i=0;i<=a;i++){
	arr[i]=prompt("Enter the "+(i+1)+" Name")
}

let c=parseInt(prompt("Which number letter name u want"))

arr.forEach((e)=>{
	if(e.length==c){

		b.push(e)
	}
})

console.log(arr)
console.log(b)

document.write("given arry ="+arr+"<br>")
document.write("Ans ="+b+"<br>")



