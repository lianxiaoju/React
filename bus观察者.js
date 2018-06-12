var bus = {
    cbArr: {},
    $on(event, cb) {
        if (!this.cbArr.hasOwnProperty(event)) {
            this.cbArr[event] = [cb]
        } else {
            this.cbArr[event].push(cb)
        }
    },
    $emit(event, ...data) {
        if (!this.cbArr[event]) {
            return
        }
        this.cbArr[event].forEach((i) => {
            i(...data)
        });
    },
    $destroyed(event) {
        delete this.cbArr[event]
    }
}



export default bus
