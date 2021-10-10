function choice(items) {
    const rand = Math.floor(Math.random() * items.length)
    return items[rand]
}

function remove(items, item){
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      return item;
    } else {
        return undefined
    }
}

export { choice, remove }