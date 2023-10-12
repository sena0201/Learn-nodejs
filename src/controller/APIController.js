import connection from "../configs/connectDB.js"

export const getAllUsers = async (req, res) => {

    const [rows, fields] = await connection.execute('SELECT * FROM users')

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}


export const APICreateNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body

    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            message: 'missing required pargams',
        })
    }


    await connection.execute('insert into `users` (firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address])
    return res.status(200).json({
        message: 'ok',
    })
}

export const APIUpdateUser = async (req, res) => {
    let { id, firstName, lastName, email, address } = req.body

    if(!firstName || !lastName || !email || !address || !id){
        return res.status(200).json({
            message: 'missing required pargams',
        })
    }

    await connection.execute('UPDATE users SET firstName = ? , lastName = ? , email = ? , address = ? WHERE id = ?' , [firstName, lastName, email, address, id])

    return res.status(200).json({
        message: 'ok',
    })
}


export const APIDeleteUser = async (req, res) => {

    if(!req.params.id) {
        return res.status(200).json({
            message: 'missing required pargams',
        })
    }

    await connection.execute('delete from `users` where `id` = ?', [req.params.id])

    return res.status(200).json({
        message: 'ok',
    })
}

