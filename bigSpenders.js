// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => 
    business.orders.some(spender => spender >= 9000));

bigSpenders.forEach(spender => {
    console.log("big spenders", spender); 
})


