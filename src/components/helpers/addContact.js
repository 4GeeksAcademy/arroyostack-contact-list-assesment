export const addContact = async (contactObject) => {
    const { name, address, phone, email, avatar, id } = contactObject;
    const url = "http://localhost:8000/";
    const endpoint = "contacts";

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": name,
        "address": address,
        "phone": phone,
        "email": email,
        "avatar": avatar,
        "id": id
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };

    try {
        const response = await fetch(url + endpoint, requestOptions);
        const data = await response.json();

        return data;

    } catch(error) {
        console.log(error, "This was catch by catch block 'addTask'");

    }
}




