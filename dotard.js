const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//     let randomVariableForZipCode = "addressZipCode"

//     outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity}, ${business["addressStateCode"]} ${business[randomVariableForZipCode]}
//         </section>
//     `
//     outEl.innerHTML += "<hr/>"
// });

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false;

    if (business.addressStateCode === "NY") {
        inNewYork = true;
    }

    return inNewYork;
})

// Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM. 

const manufacturingBusinesses = businesses.filter(business => {
    let manuBiz = false;

    if (business.companyIndustry === "Manufacturing") {
        manuBiz = true; 
    }

    return manuBiz;
})

console.log(manufacturingBusinesses)

//printing new return to the DOM

// outEl.innerHTML = "<h1>New York Businesses</h1>"

// manufacturingBusinesses.forEach(business => {
//     let randomVariableForZipCode = "addressZipCode"

//     outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity}, ${business["addressStateCode"]} ${business[randomVariableForZipCode]}
//         </section>
//     `
//     outEl.innerHTML += "<hr/>"
// });