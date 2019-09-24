// data4_1_bar
const data4_1_bar = []
for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 70) + 5

    data4_1_bar.push(num)
}

// data4_2_scatter
const data4_2_scatter = [
    [300, 200, 160, 'cat'],
    [210, 140, 80, 'dog'],
    [422, 300, 220, 'dog'],
    [70, 160, 40, 'cat'],
    [250, 50, 250, 'dog'],
    [110, 280, 100, 'cat'],
    [199, 225, 120, 'cat'],
    [0, 220, 180, 'dog'],
]

export {
    data4_1_bar,
    data4_2_scatter
}
