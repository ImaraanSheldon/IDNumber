
let click = document.getElementById('click');

click.addEventListener('click', ()=>{
    let ID = document.getElementById('ID');
    console.log(ID.value);
    let year = document.getElementById('ID').value
    console.log(year.substring(0,2));
    let month = document.getElementById('ID').value
    console.log(month.substring(2,4));
    let day = document.getElementById('ID').value
    console.log(day.substring(4,6));

    let gen = document.getElementById('ID').value.substring(6,10);
    console.log(gen)


    document.getElementById('Dob').textContent = '19'+(year.substring(0,2)) + '/' + (month.substring(2,4)) + '/' + (day.substring(4,6));

    if(gen >= 5000){
        document.getElementById('gender').textContent = "Male"
    }else{
        document.getElementById('gender').textContent = "Female"
    }

    let type = document.getElementById('ID').value.substring(10,11);

    if(type == 0){
        document.getElementById('race').textContent = "You're a resident born in SA"
    }else if( type == 1){
        document.getElementById('race').textContent = "You're a permanent resident in SA"
    }else{
        document.getElementById('race').textContent = "GGez"
    }
})