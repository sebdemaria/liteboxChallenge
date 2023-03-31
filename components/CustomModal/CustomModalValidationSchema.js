import * as Yup from "yup";
import { FORM_ERROR_MESSAGES, IMAGE_SUPPORTED_FORMATS } from "../../consts";

const MAX_FILE_SIZE = 2097152;

export const ValidationSchema = Yup.object({
    // error submit validations
    movie_file: Yup.mixed()
        .test(
            "fileSize",
            FORM_ERROR_MESSAGES.fileSize,
            (value) => value?.size <= MAX_FILE_SIZE
        )
        .test("fileType", FORM_ERROR_MESSAGES.fileFormat, (value) =>
            IMAGE_SUPPORTED_FORMATS.includes(value?.type)
        )
        .required(FORM_ERROR_MESSAGES.required),
    movie_name: Yup.string(FORM_ERROR_MESSAGES.text)
        .required(FORM_ERROR_MESSAGES.required)
        .max(45, "Máximo 45 caracteres"),
});
