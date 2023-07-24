export const updateProgress = async (taskObject) => {
    const url = "http://localhost:8000/";
    const endpoint = "contacts/";
    const { name, address, number, email, avatar, id, company, progress } = taskObject;

    const requestOptions = {
        "method": 'PUT',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({
            "name": name,
            "address": address,
            "number": number,
            "email": email,
            "avatar": avatar,
            "id": id,
            "company": company,
            "progress": progress === "false" ? "true" : "false"
        })
    };




    const response = await fetch(`${ url }${ endpoint }${ id }`, requestOptions);
    const data = await response.json();

    console.log(data);
};
