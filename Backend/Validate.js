const Joi = require("joi");

//Resister

const ResisterValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        phone:Joi.string().min(10).max(10).required(),
        tphn:Joi.string().min(10).max(10).required(),
        tid:Joi.string().min(34).max(34).required(),
        tsec:Joi.string().min(32).max(32).required()

    });

    return schema.validate(data);
};

const LoginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};
module.exports.LoginValidation = LoginValidation;
module.exports.ResisterValidation = ResisterValidation;