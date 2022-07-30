

export const validateCommentForm = (values) => {
    const errors = {};

    if (!values.rating) {
        errors.rating = 'Required';
    } else if (values.rating = 'Select...') {
        errors.rating = 'Required';
    }

    if (!values.author) {
        errors.author = 'Required';
    } else if (values.author.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    return errors;
};