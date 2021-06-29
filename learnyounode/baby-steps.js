let sum = 0
for (i in process.argv) {
    if (Number(process.argv[i])) {
	sum += Number(process.argv[i])
    }
}

console.log(sum)
