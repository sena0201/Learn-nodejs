
import connection from "../configs/connectDB.js";

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


export const getHomePage = async (req, res) => {
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    res.render('index.ejs', { users: rows })
}

export const getAboutPage = (req, res) => {
    //logic
    return res.render('about.ejs')
}

export const getPage = async (req, res) => {
    let id = req.params.id
    let action = req.params.action
    let [user, fields] = await connection.execute('SELECT * FROM `users` WHERE `id` = ?', [id]);
    if (action === 'delete') {
        res.render('delete.ejs', { user: user[0], action: action })
    } else {
        res.render('detail.ejs', { user: user[0], action: action })
    }
}


export const createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    await connection.execute('insert into `users` (firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address])
    return res.redirect('/')
}

export const editUser = async (req, res) => {
    let { id, firstName, lastName, email, address } = req.body
    await connection.execute('UPDATE users SET firstName = ? , lastName = ? , email = ? , address = ? WHERE id = ?', [firstName, lastName, email, address, id])
    return res.redirect('/')
}

export const deleteUser = async (req, res) => {
    await connection.execute('delete from `users` where `id` = ?', [req.body.id])
    return res.redirect('/')
}