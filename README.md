### 说明
随机生成昵称
### 在线地址

### 安装
`
npm i @sugarfish/random-nickname --save
`

### 引入
`
import RandomNickname from '@sugarfish/random-nickname'
`

### 使用

配置 options， 可以不传

`
const options = { //非必传
    describeList: [], //形容词字典，支持自定义，非必传
    nounList: [], //名称字典，支持自定义， 非必传
}
const res = new RandomNickname(options)

console.log(res.getRandomName()) //愤怒的小鸟
`
