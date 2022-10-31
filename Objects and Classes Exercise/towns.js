function town(list){
    let townInfo = {};
    list.forEach(line => {
        let [townName, latitude, longitude] = line.split(' | ');
        townInfo.town = townName;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);
        console.log(townInfo);
    });
}