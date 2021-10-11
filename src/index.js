import { describeList, nounList } from  './mock'


class RandomNickname {
    constructor(options) {
        this.describeList = describeList
        this.nounList = nounList

        if (options?.describeList?.length) {
            this.describeList = options.describeList
        }

        if (options?.nounList?.length) {
            this.nounList = options.nounList
        }
    }

    getRandomName() {
        const describeIndex = Math.floor(Math.random() * this.describeList.length)
        const dnounIndex = Math.floor(Math.random() * this.nounList.length)
        return {
            name:  this.describeList[describeIndex] + this.nounList[dnounIndex]
        }
    }
}

const randomNickname = new RandomNickname()

export default randomNickname