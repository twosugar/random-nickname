import { describeList, nounList } from  './mock'
class RandomNickname {
    constructor(options = {}) {
        this.describeList = describeList
        this.nounList = nounList
        if (options.describeList && options.describeList.length) {
            this.describeList = options.describeList
        }

        if (options.nounList && options.nounList.length) {
            this.nounList = options.nounList
        }
    }

    getRandomName() {
        const describeIndex = Math.floor(Math.random() * this.describeList.length)
        const dnounIndex = Math.floor(Math.random() * this.nounList.length)
        return this.describeList[describeIndex] + this.nounList[dnounIndex]
    }
}

export default RandomNickname