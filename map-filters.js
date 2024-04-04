const nums =[4,8,3,1,6,9];
  const newNums =[];
   for(let n of nums){
   // console.log(n**3);
    newNums.push(n**3);
   }
   console.log(newNums);
   nums.map((a)=>{console.log(a);});


//    const newArr = nums.map((a)=>{return(a**3);});
//    console.log(newArr);
   
   const names=['ramu','shamiu','kaliya','pinki','raju'];
   console.log('abc'.toUpperCase());
    const upperCaseName = names.map((n)=>{return n.toUpperCase()});
    console.log(upperCaseName);

   const evenNums= nums.filter((n)=>{return n%2===0});
    console.log(evenNums);

    const prices=[530,990,2880,3200,800,120];
    //800<prices<1500

    const num =prices.filter((n)=>{return n>800 && n<1500})
    console.log(num);

    const length = names.filter((n)=>{return n.length >4});
    console.log(length);
     const strPrices =['₹56.90','₹780.892','₹190.8','120.9'];
    // console.log(parseInt('₹67.82'.slice(1)));
     const rupee = strPrices.map((n)=>{return parseInt(n.slice(1))})
     console.log(rupee);

     
    