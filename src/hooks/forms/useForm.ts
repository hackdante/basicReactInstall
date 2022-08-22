import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialForm: T) => {
    const [formData, setFormData] = useState(initialForm);
    const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const resetForm = () => {
        setFormData({...initialForm})
    }

    return {
        ...formData,
        onChangeForm,
        resetForm
    }
}
