/**
 * Makes a http GET request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {String} keyToReturn
 */
export async function get(url, keyToReturn, headers = new Map()) {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('Cookie', document.cookie);

    const response = await fetch(url, {
        credentials: 'include',
        withCredentials: true,
        mode: 'cors',
        headers: getMapAsObject(headers),
    });

    console.log('Response: ', response);
    console.log(response.headers.get('set-cookie')); // undefined
    console.log(document.cookie); // nope
    return await _checkForError(response, keyToReturn);
}

/**
 * Makes a http POST request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
export async function post(url, data, keyToReturn, headers = new Map()) {
    return await _fetchWithData(url, 'POST', data, keyToReturn, headers);
}

/**
 * Makes a http PATCH request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
export async function patch(url, data, keyToReturn, headers = new Map()) {
    return await _fetchWithData(url, 'PATCH', data, keyToReturn, headers);
}


/**
 * Makes a http PUT request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
export async function put(url, data, keyToReturn, headers = new Map()) {
    return await _fetchWithData(url, 'PUT', data, keyToReturn, headers);
}

/**
 * @param {String} url
 * @param {String} method
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
async function _fetchWithData(url, method, data, keyToReturn, headers = new Map()) {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('Cookie', document.cookie);

    console.log(data);
    const response = await fetch(url, {
        credentials: 'include',
        method: method,
        mode: 'cors',
        withCredentials: true,
        headers: getMapAsObject(headers),
        body: JSON.stringify(data)
    });
    console.log('Response: ', response);
    console.log(response.headers.get('set-cookie')); // undefined
    console.log(document.cookie); // nope
    return await _checkForError(response, keyToReturn);
}

/**
 * @param {Response} response
 * @param {String} keyToReturn
 */
async function _checkForError(response, keyToReturn) {
    var text = await response.text();
    console.log('Error checking response:', text);
    for (const header of response.headers) {
        console.log(header);
    }
    console.log('Error res:', JSON.parse(text));
    if (response.status !== 200) {
        throw Error('An Error occurred: ' + response.status + ' - ' + text);
    } else {
        var entries = Object.entries(JSON.parse(text));
        let value = null;
        for (var entry in entries) {

            if (entries[entry][0] === keyToReturn) {
                value = entries[entry][1];
                break;
            }
        }

        return value;
    }
}

/**
 * @param {Map<String, any>} map
 */
function getMapAsObject(map) {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }

    console.log(obj);
    return obj;
}