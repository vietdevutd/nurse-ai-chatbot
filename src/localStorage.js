const saveToLocalStorage = (message) => {
    let conversations = JSON.parse(localStorage.getItem('conversations')) || [];
    conversations.push(message);
    localStorage.setItem('conversations', JSON.stringify(conversations));
    return conversations.join("\n");
}

const clearHistoryFromLocalStorage = () => {
    localStorage.setItem('conversations', JSON.stringify([]));
}

export { saveToLocalStorage, clearHistoryFromLocalStorage };