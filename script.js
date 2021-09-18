function bubblesortOnce(a) {
    let escaped = a.slice();
     for (let i = 0; i<escaped.length; i++){
        if (escaped[i]>escaped[i+1]) {
            
        let item = escaped[i];
        let other = escaped[i+1];  
        escaped[i] = other;
        escaped [i+1] = item;
        }
     }
    return escaped;  
    }  