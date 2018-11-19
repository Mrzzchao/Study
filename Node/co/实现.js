function run(gen) {
    var g = gen()

    function next(data) {
        var res = g.next(data)
        if(res.done) return res.value
        res.value.then(function(data) {
            next(data)
        })

    }
    next()
}

run(gen)