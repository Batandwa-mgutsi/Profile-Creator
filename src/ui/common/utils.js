
// UI Utilities

/**
 * Displays the selected file from the given input element in the target img element id
 * @param {HTMLInputElement} input
 * @param {String} targetId
 */
export function displayImage(input, targetId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById(targetId).src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

/**
 * Returns {list} with {item} removed.
 * @param {Array} list
 * @param {any} item
 */
export function removeItemFromList(list, item) {
    return list.splice(list.findIndex((itm) => itm === item), 1);
}