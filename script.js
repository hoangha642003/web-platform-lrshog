let fruitName =document.getElementById('name')
let showPriceBtn =document.getElementById('showPrice');
let price =document.getElementById('price');
showPriceBtn.addEventListener('click',function(){
let fruitNameValue=fruitName.value;//

let priceHtml;
switch(fruitNameValue){
case "ổi":
priceHtml=`gia cho san pham : ${fruitNameValue} 20000VNĐ/kg`
break;
case "dưa hấu":
priceHtml=`gia cho san pham : ${fruitNameValue} 20000VNĐ/kg`
break;
case "táo":
priceHtml=`gia cho san pham : ${fruitNameValue} 30000VNĐ/kg`
break;
case "xoài":
priceHtml=`gia cho san pham : ${fruitNameValue} 30000VNĐ/kg`
break;
case "cam":
priceHtml=`gia cho san pham : ${fruitNameValue} 40000VNĐ/kg`
break;
case "chôm chôm":
priceHtml=`gia cho san pham : ${fruitNameValue} 40000VNĐ/kg`
break;
case "măng cụt":
priceHtml=`gia cho san pham : ${fruitNameValue} 50000VNĐ/kg`
break;

}

price.innerHTML=priceHtml
})

  





























