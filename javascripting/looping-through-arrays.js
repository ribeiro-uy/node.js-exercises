const pets = ['cat', 'dog', 'rat']
for (const i in pets) {
  pets[i] = pets[i] + 's'
}
console.log(pets)
