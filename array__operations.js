const smartphoneList=[
    { brand :'Samsung',model :'s24',price :'12000',colors :['white','black','blue']},
    { brand :'Redimi',model :'note12pro',price :'18000',colors :['ger','black','blue']},
    { brand :'poco',model :'POco X5',price :'17000',colors :['white','black','blue']},
    { brand :'Vivo',model :'Vivo Y7',price :'21000',colors :['white','black','yello']},
    { brand :'Apple',model :'18 pro',price :'50000',colors :['pink','black','blue']},
    { brand :'Samsung',model :'z fold',price :'162000',colors :['white']}
 ];

//  const Bphone = smartphoneList.filter((phone)=>{return phone.price<50000});
  
//  console.log(Bphone);
 
//filter all samsung phone
//  const Bphone = smartphoneList.filter((phone)=>{return phone.brand==='Samsung'});
//  console.log(Bphone);

 //filter all phones with blue color
 const Bluephone = smartphoneList.filter((phone)=>{return phone.colors.includes('blue')});
 console.log(Bluephone);

 //creat an array of phone models
 //creat an array of phone brands
 //['s24','iphone 18','nord ce 3','note 8 pro','zfold']
  const model = smartphoneList.map((phone)=>{ return phone.model});
  console.log(model);

  const brand = smartphoneList.map((phone)=>{ return phone.brand});
  console.log(brand);