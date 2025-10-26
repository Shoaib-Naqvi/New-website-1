 
 exports.getAllUsers = (req, res) => {

    res.status(200).json({ message: 'Get all users' });

}


exports.getUserById = (req, res) => {
    try {   
        const {Id} = req.params;
         res.status(200).json({
        success: true,
        message: `Get user with ID: ${Id}`,
        data:{},
    });
    }
        catch (error) {
        res.status(500).json({ 
        success: false, 
        message: 'Internal Server Error' });
    }
}

exports.createUser = (req, res) => {
    try {
        const userData = req.body;
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: userData,
        });
    } catch (error) {
        res.status(500).json({ 
        success: false, 
        message: 'Internal Server Error' });
    }
}
exports.updateUser = (req, res) => {
    try {
        const { Id } = req.params;
        const updatedData = req.body;
        res.status(200).json({
            success: true,
            message: `User with ID: ${Id} updated successfully`,
            data: updatedData,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: 'Internal Server Error' });
    }
}