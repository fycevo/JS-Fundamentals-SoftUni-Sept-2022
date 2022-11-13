function filePath(string){
    let file = string.split('\\').pop();
    let extensionIndex = file.lastIndexOf('.');
    let extension = file.slice(extensionIndex+1);
    let fileName = file.slice(0,extensionIndex)
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}
filePath('C:\\Internal\\training-internal\\Template.pptx');