function piccolo(input){
    let parkingList = new Map();
    input.map(el=>el.split(', '))
        .forEach(element => {
        const command = element[0];
        const carNumber = element[1];

        if(command==="IN"){
            parkingList.set(carNumber,command);
        } else if(command==="OUT"){
            parkingList.delete(carNumber);
        }
    });
    let sortedCarList = Array.from(parkingList).sort((a,b)=>a[0].localeCompare(b[0]));
    if(sortedCarList.length === 0){
        console.log("Parking lot is Empty");
    }
    sortedCarList.forEach((carNumber)=>console.log(carNumber[0]));
}