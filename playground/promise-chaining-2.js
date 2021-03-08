require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('604316ea1475cd306465b2e1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60431701b074ee4a8097ca7c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})