export const deleteContact = async (identifier) => {
    const question = prompt("Are you sure you want to delete this contact. Write yes or no?");
    if(question === "no") return;
    const url = "http://localhost:8000/";
    const endpoint = "contacts/";

    const requestOptions = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(`${ url }${ endpoint }${ identifier }`, requestOptions);
        const data = response.json();

        return data;

    } catch(error) {
        console.log(error, "This was catch by catch block in 'deleteTask'");

    }
};
