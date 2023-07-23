export const addTask = async (task, id) => {

    const url = "http://localhost:8000/";
    const endpoint = "tasks";

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "body": task,
        "id": id,
        "progress": "false"
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch(url + endpoint, requestOptions);
        const data = await response.json();

        return data;

    } catch(error) {
        console.log(err, "This was catch by catch block 'addTask'");

    }
}




