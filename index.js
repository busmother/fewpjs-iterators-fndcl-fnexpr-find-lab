function superbowlWin(array) {
    let winner = array.find(function(s) {return s["result"] === "W"})
    if (winner === undefined) {
        return undefined
    } else {
        return winner["year"]
    }
    
}
