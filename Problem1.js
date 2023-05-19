function sumElements (set1, set2) { 
    let sum = 0; 
    var newlist=[];
    for (let i = 0; i < set1.length; i++) { 
        let found = false; 
        for (let j = 0; j < set2.length; j++) { 
    if (set1[i] === set2[j]) { 
            found = true; 
            break; 
    } 
    } 
        if (!found) { 
    sum += set1[i]; 
    newlist.push(set1[i])
        } 
    } 
    for (let i = 0; i < set2.length; i++) { 
        let found = false; 
        for (let j = 0; j < set1.length; j++) { 
            if (set2[i] === set1[j]) { 
            found = true; 
            break; 
    } 
        } 
        if (!found) { 
        sum += set2[i]; 
        newlist.push(set2[i])

        } 
    } 
    return "The sum "+sum +" The distinct elements "+ newlist; 
    } 
    let set1 = [3, 1, 7, 9]; 
    let set2 = [2, 4, 1, 9, 3]; 
    
    console.log(sumElements(set1, set2));