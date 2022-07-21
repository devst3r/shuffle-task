//array of numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//shuffle event
function shuffle_numbers(){
    console.log('Shuffling numbers');
    //pass the value only
    let shuffle_array = arr.slice();
    //shuffle and set
    const shuffled = shuffle(shuffle_array);
    build_cards(shuffled);
}

//sort event
function sort_numbers(){
    //use the sorted array
    let sort_array = arr;
    console.log('Sorting numbers');
    build_cards(sort_array);
}

//shuffling function
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

//build the html
function build_cards(arr){
    let app_content = "";
    let numbers_div = document.getElementById('numberz');
    //reset the current view
    numbers_div.innerHTML = "";
    if(arr){
        for(let i=0;i < arr.length;i++){
            //create new
            app_content += '<span class="number ncolor'+arr[i]+'">'+arr[i]+'</span>';
        }
    } else {
        app_content =  "Error";
    }
    //append new
    numbers_div.innerHTML = app_content;
}
