document.getElementById('hlw').addEventListener('click', function() {
this.innerText = ('hlw Api');
});  

const user = { id:11, name: 'Girob amir', job: 'actor' };
const stringify = JSON.stringify(user);
console.log(user);
console.log(stringify);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: '15000',
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia',
    },
    isExpensive: false
}
// console.log(shop);
const shopStringify = JSON.stringify(shop);
console.log(shopStringify);

// stringify k abr normal javascript object e change kora jay
const converted = JSON.parse(shopStringify);
console.log(converted.owner);