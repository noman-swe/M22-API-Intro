document.getElementById('hlw').addEventListener('click', function() {
this.innerText = ('hlw Api');
});  

const user = { id:11, name: 'Girob amir', job: 'actor' };
const stringify = JSON.stringify(user);
console.log(user);
console.log(stringify);
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name);

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

//  -------------------->
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));