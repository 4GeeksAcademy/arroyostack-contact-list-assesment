export const updateContact = async (contactObject) => {
    const { name, address, number, email, avatar, company, id } = contactObject;
    console.log(company, id, "here!!!!!");
    const url = "http://localhost:8000/";
    const endpoint = `contacts/${ id }`;

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": name,
        "address": address,
        "number": number,
        "email": email,
        "avatar": avatar,
        "company": company,
    });

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };

    try {
        const response = await fetch(url + endpoint, requestOptions);




    } catch(error) {
        console.log(error, "This was catch by catch block 'addTask'");

    }
}




