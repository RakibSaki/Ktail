class Measurement {
    constructor(of, value) {
        this.of = of
        this.value = value
        this.lines = []
    }
}

class Line {
    // from can be coordinates or (function to) point on another line
    // to can be relative polar coordinates or (function to) point on another line
    constructor(from, to, curveAbout) {
        this.from = from
        this.to = to
        this.curveAbout = curveAbout
    }
}