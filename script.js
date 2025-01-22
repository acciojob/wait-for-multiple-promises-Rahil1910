function createrandomPromise(names) {
	const takentime = (Math.random() *2+1).toFixed(3);
	return new Promise(resolve =>{
		setTimeout(()=>{
			resolve({names,takentime});
		},takentime*1000);
	});
}

const promise - 1 = createrandomPromise('Promise - 1');
const promise - 2 = createrandomPromise('Promise - 2');
const promise - 3 = createrandomPromise('Promise - 3');

Promise.all([promise - 1,promise - 2,promise - 3]).then((results)=>{
	document.getElementById('loading').remove();
	const totalTime = results.reduce((total,result) => total + parseFloat(result.takentime),0).toFixed(3);
	const tableBody = document.getElementById('output');

    results.forEach(result => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${result.names}</td><td>${result.takentime}</td>`;
        tableBody.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    tableBody.appendChild(totalRow);

});