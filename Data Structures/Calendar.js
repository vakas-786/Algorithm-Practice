function solution(S, K) {
    const map = { 
        "Mon": 1,
        "Tue": 2,
        "Wed": 3,
        "Thu": 4,
        "Fri": 5,
        "Sat": 6,
        "Sun": 7
    }

    const maptwo = { 
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat",
        7: "Sun" 
    }

    let day = map[S]
    let newday = map[S] += K

    let remainder = K % 7

    if (day + remainder > 7){
        return maptwo[remainder - 1]
    }else {
        return maptwo[newday]
    }
    
}
