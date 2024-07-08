

class Auth {
    //========Register user
    registerUser = async (req, res) => {
        res.status(200).json({
            status: 'success',
            message: 'Signup route is running'
        })
    }
}

const newAuth = new Auth
export default newAuth