// write a function that lets you watch 2 movies conscecutively. 
// Array of movie times. Return if its possible to watch 2 movies conscecutively. Total of movies watched need to be exact length of flight

const movie_times = [80, 100, 80]
// [80, 100, 80]
const flight = 160 

function is_possible(movie_times, flight){
    const movie_seen = new Set()
    for(let i = 0; i < (movie_times.length); i ++){
        const first = movie_times[i]
        const secondMovie = flight - first 

        if(movie_seen.has(secondMovie)) {
            return console.log('possible') 
        } 
        movie_seen.add(first)
    }
    return console.log('impossible')
}

is_possible(movie_times, flight)