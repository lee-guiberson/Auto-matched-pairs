const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const link1 = process.env.LINK1 || "https://docs.google.com/document/d/1w08mQU_Xwmx1fqoeuS3FrOua06CkYfZUZ6SwfbSCleU/edit?usp=sharing"
const link2 = process.env.LINK2 || "https://docs.google.com/document/d/1e_mygk5p0sSx_lJUr_orpJMlAUS1_4con9udmd4egBM/edit?usp=sharing"

let assignments = [];

app.get('/', (req, res) => {
    res.redirect(getLink())
})

app.get('/s33d4t4', (req, res) => {
    let data = `[${assignments}]   Subjects: ${assignments.length}   Groups: ${assignments.length/2}`
    res.send(data);
})

app.post('/r3s3tth34ss1nm3nts', (req, res) => {
    assignments = [];
    res.redirect('/s33d4t4')
})  

app.listen(port, () => {
  console.log(`@ http://localhost:${port}`)
})

function getLink() {
    // Get assignment, add to array
    if(assignments.length % 2 == 0) {
        let assignment = Math.floor(Math.random() * 2)
        assignments.push(assignment)
    } else {
        let lastAssignment = assignments[assignments.length - 1]
        let assignment = lastAssignment == 0 ? 1 : 0;
        assignments.push(assignment);
    }

    // Convert assignment to link
    let assignment = assignments[assignments.length - 1]
    let link = ""
    switch (assignment) {
        case 0:
            link = link1
            break;
    
        case 1:
            link = link2
            break;
    }

    return link
}