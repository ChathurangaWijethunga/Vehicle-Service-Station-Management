const Message = require('../../models/SparePart/message.model');

const sentMesg = (req, res) => {


   
    const{ id, message} = req.body;

    //create a object

    const newMsg = new Message({
        id,
        message
    });

    newMsg.save().then((Message) => {
        res.json(Message);
    }).catch((err)=>{
        res.json(err);
    });

}


module.exports = {
    sentMesg,
}