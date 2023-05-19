function dot_product(var1, var2){ 
    let ps = 0;
    for(let i=0; i<var1.length; i++){
        ps += var1[i] * var2[i];
    }
    return ps;
}


function prod(var1, var2){
    let ps = dot_product(var1, var2);
    if(ps == 0){
        return true;
    } else {
        return false;
    }
}


function dot_product(var1, var2){ 
    let ps = 0;
    for(let i=0; i<var1.length; i++){
        ps += var1[i] * var2[i];
    }
    return ps;
}

function prod(var1, var2){
    let ps = dot_product(var1, var2);
    if(ps == 0){
        return true;
    } else {
        return false;
    }
}