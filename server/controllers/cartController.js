import User from '../models/User.js'


// Updata User CartData : /api/cart/update
export const updateCart = async (req, res) => {
    try {
        const user = req.user;
        const { cartItems } = req.body;
        await User.findByIdAndUpdate(user._id, {cartItems});
        res.json({ success: true, message: 'Cart Updated' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}