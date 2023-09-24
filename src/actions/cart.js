export function Add(id, item) {
    return {
        type: "ADD",
        id: id,
        info: item
    }
}

export function Remove(id) {
    return {
        type: "REMOVE",
        id: id
    }
}

export function RemoveAll() {
    return {
        type: "REMOVE_ALL"
    }
}

export function Update(id,value) {
    // console.log(value);
    return {
        type: "UPDATE",
        id: id,
        quantity: value
    }
}