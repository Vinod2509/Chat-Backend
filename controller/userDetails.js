const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

const userDetails = async (req, res) => {
    try {
        const {token} = req.body;
        const user = await getUserDetailsFromToken(token);

        return res.status(200).json({
            message: 'User details',
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

module.exports = userDetails;