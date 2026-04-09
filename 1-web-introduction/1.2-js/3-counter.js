let counter = {
    count: 0,
    add(value) {
        this.count += value;
    },
    sub(value) {
        this.count -= value;
    },
}

alert(counter.count);
counter.add(5)
alert(counter.count);
counter.sub(6)
alert(counter.count);
