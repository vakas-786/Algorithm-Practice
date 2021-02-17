function triplets(t, d) {
    d.sort((a,b)=> {
    return a-b;
    })
    
    let left = 0
    let right = d.length -1 
    let counter = 0

    while (left < right){
        
        if (!d[left + 1] < d[left +2]){
            right --
        }else {
            left ++
        }
        
        if (d[left] < d[left + 1] < d[left +2] && d[left] + d[left + 1] + d[left +2] <= t){
            counter ++
        }
    }
    
    return counter -= 1
    
}

<p>Given an array of <em>n</em> distinct integers, <em>d = [d[0], d[1], …, d[n−1]]</em>, and an integer threshold, <em>t</em>, how many <em>(a, b, c)</em> index triplets exist that satisfy both of the following conditions?</p>