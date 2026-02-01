
const data = [
  { category: "food", price: 100 },
  { category: "travel", price: 300 },
  { category: "food", price: 200 }
]


 const func =  function(data)
 {
   const  pk = data.reduce((acc,val)=>
    {
        const {category, price}  = val;
        acc[category] = acc[category] || 0 ;
         acc[category] += price
       return acc
        
    },{})
return pk ;  

 
 console.log(func(data));
