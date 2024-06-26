const express = require("express")
const app = express()
const port = 4000
const cors = require("cors") // 4.4K (gzipped: 1.9K)

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.get("/", cors(), async (req, res) => {
    res.send("This is working")
    
})



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})