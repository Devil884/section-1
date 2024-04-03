const user ={name: 'raju',email:'raju@gmail.com',password:'1234',};
console.log(user);
console.log(user.email);
console.log(user['password']);
 user.password="qbkbra";
 console.log(user);
 user.address ='lucknow';
 console.log(user);

 console.log(Object.keys(user));
 console.log(Object.values(user));

 const smartphone={
    brand :'Samsung',
    model :'s24',
    price :'12000',
    colors :['white','black','blue']
 }
 console.log(smartphone.price);
 
 console.log(smartphone.colors[1][4]);

 const smartphoneList=[
    { brand :'Samsung',model :'s24',price :'12000',colors :['white','black','blue']},
    { brand :'Redimi',model :'note12pro',price :'18000',colors :['ger','black','blue']},
    { brand :'poco',model :'POco X5',price :'17000',colors :['white','black','blue']},
    { brand :'Vivo',model :'Vivo Y7',price :'21000',colors :['white','black','yello']},
    { brand :'Apple',model :'18 pro',price :'50000',colors :['pink','black','blue']},
    { brand :'Samsung',model :'z fold',price :'162000',colors :['white']}
 ]
 //console.log(smartphoneList.length);
 console.log(smartphoneList[1].colors[1]);
 console.log(smartphoneList[3].model);
 console.log(smartphoneList[5].price);
 smartphoneList[5].colors.push('red');
 console.log(smartphoneList[5]);