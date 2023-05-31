import Joi from "joi";
export const BlogSchema = Joi.object({
    _id: Joi.string(),
    name: Joi.string().required().messages({
        "string.empty": "Tên danh mục không được để trống",
        "any.required": "Trường tên danh mục là bắt buộc",
    }),
    description: Joi.string(),
})