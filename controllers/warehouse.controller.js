const {executeQuery} = require('../services/runquery')
const queries = require('../queries.json')

exports.signUp = async (req, res) =>{
    try {
        const body = req.body;
        console.log(body);
        
        const result = await executeQuery(queries.insertUser,[body.name, body.email, body.password, body.address, body.phone, body.age ])
        console.log(result)
        res.status(200).json({
            data: body
        })
    } catch (error) {
        console.log(error)
    }

}
exports.getdata = async(req, res) => {
    try {
        const body=req.body;
        console.log(body);
        const [data] = await executeQuery(queries.selectuser,[body.name, body.email])
        console.log(data)
        res.status(200).json({
            data: data
        })
    } catch (error) {
        console.log(error)
    }
}

exports.updatedata = async (req, res) => {
    try {
        const body= req.body;
        console.log(body)
        const update = await executeQuery(queries.updateuser,[body.name, body.email,body.id])
        console.log(update)
        res.status(200).json({
            data: body
        })
    } catch (error) {
        console.log(error)
    }
}

exports.deletedata = async (req, res) => {
    try {
        const body=req.body;
        console.log(body)
        const delRow = await executeQuery(queries.deltedata,[body.name])
        console.log(delRow)
        res.status(200).json({
            data: delRow
        }) 

    } catch (error) {
    console.log(error)        
    }
}