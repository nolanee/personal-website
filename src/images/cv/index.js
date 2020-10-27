let images = []

for (let i = 1; i <= 4; ++i) {
    import("./ENolanCV_Page_" + i + ".png").then((value) => images.push(value))
}

export default images