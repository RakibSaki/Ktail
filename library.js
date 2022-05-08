class মাপ {
    constructor(অংশ, মান) {
        this.অংশ = অংশ
        this.মান = মান
        this.মাপসমূহ = []
    }
}

class দাগ {
    // from can be coordinates or (function to) point on another line
    // to can be relative polar coordinates or (function to) point on another line or (function to) point according to measurement
    constructor(শুরু, শেষ, ঘুরবে) {
        this.শুরু = শুরু
        this.শেষ = শেষ
        this.ঘুরবে = ঘুরবে
    }
    আঁকো() {
        let শুরু = this.শুরু
        if (typeof this.শুরু == 'function') {
            শুরু = this.শুরু()
        }
        let শেষ = this.শেষ
        if (typeof this.শেষ == 'function') {
            শেষ = this.শেষ()
        } else {
            // add polar coordinate to start
            শেষ = [শুরু[0] + (শেষ[0] * Math.cos(শেষ[1])), শুরু[1] + (শেষ[0] * Math.sin(শেষ[1]))]
        }
        ঘুরবে = this.ঘুরবে(শুরু, শেষ)
        beginShape(শুরু[0], শুরু[1])
        quadraticVertex(ঘুরবে[0], ঘুরবে[শেষ], শেষ[0], শেষ[1])
        endShape()
    }
}
