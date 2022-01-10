## 安装

运行指令如下，安装 `@qmxt/toolset`，以下简称工具库

```bash
npm i -D @qmxt/toolset
```

如果安装成功，你的`package.json`文件中将会出现`@qmxt/toolset: x.x.x`的标识

## 使用

工具库并不会限制你的使用位置，你可以在任何想使用的时候导入并执行它们

## 判断函数

```javascript
import { isNumber } from '@qmxt/toolset'
isNumber(1) // true
isNumber('1') // false
```

这是一个简单的使用，其他函数的使用方式与 `isNumber` 相同，判断函数共包含以下类型的判断
  - `isArguments`
  - `isFunction`
  - `isString`
  - `isNumber`
  - `isDate`
  - `isRegExp`
  - `isError`
  - `isSymbol`
  - `isMap`
  - `isWeakMap`
  - `isSet`
  - `isWeakSet`
  - `isArray`
  - `isObject`
  - `isBoolean`
  - `isNull`
  - `isUndefined`

另外，还存在一些环境或时间的判断
  - `isAndroid`
  - `isIOS`
  - `isMobile`
  - `isPC`
  - `isLeapYear` 指定时间是否是闰年
  - `isToday`    指定时间是否是今天

## 验证函数

该函数提供一系列以正则表达式验证是否的工具

```javascript
import { checkEmail } from '@qmxt/toolset'

if (checkEmail('15029352778@163.com')) {
  console.log('邮箱效验通过')
}
```

其他函数的使用方式与 `checkEmail` 相同，以下是所有的验证函数

  - `checkNoWord` 验证不能包含 `a-zA-Z` 的字母
  - `checkPostcode` 验证中国邮政编码
  - `checkWechatNumber` 验证微信号码
  - `checkColor16` 验证16进制颜色
  - `checkTrainNumber` 验证火车车次
  - `checkIMEI` 验证手机机身码
  - `checkUrl` 验证是否是 `url`
  - `checkVersion` 验证是否是标准版本号
  - `checkAccountNumber` 验证是否是标准银行卡号
  - `checkChineseName` 验证是否是中文姓名
  - `checkEnglishName` 验证是否是英文姓名
  - `checkLicensePlateNumber` 验证车牌号码 (新能源 + 非新能源)
  - `checkPhoneNumber` 验证手机号码
  - `checkIDCard` 验证身份证号码，支持一代身份证和二代身份证
  - `checkChineseChar` 验证是否是中文字符
  - `checkQQNumber` 验证是否是正确的QQ号码
  - `checkEmail` 验证是否是正确的邮箱格式

## 时间函数

该函数为我们提供很方便的时间获取方式

- `getTimestamp` 获得时间戳，可以指定时间或者返回10位时间戳
```javascript
import { getTimestamp } from '@qmxt/toolset'
// getTimestamp(date: Date = new Date(), withMiliseconds: boolean = true)
getTimestamp()
getTimestamp(new Date(), false)
```

- `getDayStartTimestamp` 获得当天的零点时间戳
```javascript
import { getDayStartTimestamp } from '@qmxt/toolset'
// getDayStartTimestamp(date: Date = new Date(), withMiliseconds: boolean = true)
getDayStartTimestamp()
getDayStartTimestamp(new Date(), false)
```

- `getDayEndTimestamp` 获得当天的 `23:59:59.999` 时间戳
```javascript
import { getDayEndTimestamp } from '@qmxt/toolset'
// getDayEndTimestamp(date: Date = new Date(), withMiliseconds: boolean = true)
getDayEndTimestamp()
getDayEndTimestamp(new Date(), false)
```

- `getNextTimestamp` 获得从现在起指定天数的时间戳
```javascript
import { getNextTimestamp } from '@qmxt/toolset'
// getDayEndTimestamp(dayNum: number = 1, withMiliseconds: boolean = true)
getNextTimestamp(1)
getNextTimestamp(3, false)
```

- `getWeekFirstDay` 获得当周第一天零点的时间
```javascript
import { getWeekFirstDay } from '@qmxt/toolset'
// getWeekFirstDay(date: Date = new Date(), withMiliseconds: boolean = true): Date
getWeekFirstDay()
getWeekFirstDay(new Date(), false)
```

- `getWeekLastDay` 获得当周最后一天 `23:59:59.999` 的时间
```javascript
import { getWeekFirstDay } from '@qmxt/toolset'
// getWeekFirstDay(date: Date = new Date(), withMiliseconds: boolean = true): Date
getWeekFirstDay()
getWeekFirstDay(new Date(), false)
```

- `getWeekSpace` 获得当前周，相当于获得第一天和最后一天的函数组合
```javascript
import { getWeekSpace } from '@qmxt/toolset'
// getWeekSpace(date: Date = new Date()): [Date, Date]
const [startTime, endTime] = getWeekSpace()
const [startTime, endTime] = getWeekSpace(new Date())
```

- 与上面周的使用方式相同的还包括 `getMonthFirstDay`，`getMonthLastDay`，`getMonthSpace`

- `getDaysInMonth` 获得指定时间当月的实际天数
```javascript
import { getDaysInMonth } from '@qmxt/toolset'
// getDaysInMonth(date: Date = new Date()): number
getDaysInMonth() // 31
getDaysInMonth(new Date()) // 30
```

- `format` 格式化时间，内部采用`DayJs`完成，所以所有的时间格式化字符串可以查看 [DayJs Formatter](https://day.js.org/docs/zh-CN/display/format)
```javascript
import { format } from '@qmxt/toolset'
// format(date: Date = new Date(), formatter: string = 'YYYY-MM-DD HH:mm:ss'): string
format(new Date()) // 2020-03-26 14:35:00
format(new Date(), 'YYYY-MM') // 2020-03
```

- `getDaysOfCategory` 获得指定时间内当月每天的信息数组

  可以接受两个参数，第一个为指定时间，第二个则是类型，支持 `CURR`，`PREV`，`NEXT` 三个类型，分别代表基于给定时间的当月、上月、下月，一般用于日历组件的开发

```javascript
import { getDaysOfCategory } from '@qmxt/toolset'
// getDaysOfCategory(date: Date = new Date(), category: string = 'CURR'): DayInfo[]
const days = getDaysOfCategory(new Date(), 'CURR')
days.forEach(day => {
  console.log(day.id) // 唯一 ID
  console.log(day.dayOfMonth) // 本月的第几天
  console.log(day.date) // 年月日字符串，例如 2020-3-26
  console.log(day.isToday) // 本日是不是今天
  console.log(day.category) // 分类，CURR，NEXT，PREV，等同于你传入的 category
})
```

<!-- - `getDaysForCalendar` 为日历组件定制的时间获取，相当于 `getDaysOfCategory` 的三个类型的组合体

```javascript
import { getDaysForCalendar } from '@qmxt/toolset'
// getDaysForCalendar(date: Date = new Date()): DayInfo[]
// 内部实际的返回为
// return [
//   ...getDaysOfCategory(date, DayListCategory.PREV),
//   ...getDaysOfCategory(date),
//   ...getDaysOfCategory(date, DayListCategory.NEXT),
// ]
const days = getDaysForCalendar(new Date())
``` -->

## 浏览器函数

该工具会提供一系列在浏览器中使用的函数，通常是与`DOM`相关

- `getCurrentUrl` 获得当前页面的路由
```javascript
import { getCurrentUrl } from '@qmxt/toolset'
const href = getCurrentUrl()
```

- `getUrlParams` 获得路由中携带的参数并转化为对象
```javascript
import { getUrlParams } from '@qmxt/toolset'
const href = getUrlParams('https://gcard.com/index?a=1&b=2')
// href = {
//   a: '1',
//   b: '1'
// }
```

- `object2Param` 将对象转换为路由参数
```javascript
import { object2Param } from '@qmxt/toolset'
const param = object2Param({
  a: 1,
  b: 2
})
// param = 'a=1&b=2'
```

- `getViewClientHeight` 获得可视化窗口高度
```javascript
import { getViewClientHeight } from '@qmxt/toolset'
getViewClientHeight()
```

- `getViewClientWidth` 获得可视化窗口宽度
```javascript
import { getViewClientWidth } from '@qmxt/toolset'
getViewClientWidth()
```

- `getViewportOffset` 获得窗口尺寸
```javascript
import { getViewportOffset } from '@qmxt/toolset'
const [width, height] = getViewportOffset()
```

- `getPageScrollTop` 获得滚动条距顶部距离
```javascript
import { getPageScrollTop } from '@qmxt/toolset'
const offset = getPageScrollTop()
```

- `getPageScrollLeft` 获得滚动条距左边距离
```javascript
import { getPageScrollLeft } from '@qmxt/toolset'
const offset = getPageScrollLeft()
```

- `launchFullscreen` 请求指定元素全屏
```javascript
import { launchFullscreen } from '@qmxt/toolset'
launchFullscreen(document.getElementById('app'))
```

- `exitFullscreen` 取消全屏
```javascript
import { exitFullscreen } from '@qmxt/toolset'
exitFullscreen()
```

## 数组对象函数

该工具中包含对数据以及对象的一系列操作函数

- `cleanArray` 清除数组中的空值
```javascript
import { cleanArray } from '@qmxt/toolset'
cleanArray([1, 0, null, undefined]) // => [1, 0]
```

- `uniqueForArray` 数组去重
```javascript
import { uniqueForArray } from '@qmxt/toolset'
uniqueForArray([1, 1, 2, 2, 3, 3, 4, 4]) // => [1, 2, 3, 4]
```

- `removeForArray` 删除数组中的某个值，以 `===` 作为判断
```javascript
import { removeForArray } from '@qmxt/toolset'
let arr = [1, 2, 3]
removeForArray(arr, 1)
console.log(arr) // => [2, 3]
```

## 缓存封装(LocalStorage)

缓存函数是对`LocalStorage`做的一次二次封装，在存储数据的同时，还能对数据值做过期时间处理等操作

#### 引入
```javascript
// src/main.js
import Vue from 'vue'
import { Cache } from '@qmxt/toolset'

// namespace 默认为 default
Vue.prototype.$cache = new Cache({
  namespace: '<my-package-namespace>'
})
```

#### 单例模式引入
`Cache` 新增了单例模式引用方式，可以通过单例直接拿到实例对象
```javascript
import { Cache } from '@qmxt/toolset'

// 两个实例之间不通用
let cache = Cache.getInstace()
Cache.getInstace({ namespace: 'test' })

cache.save('token', '123456')
Cache.getInstance().load('token') // 123456
```

#### 存储数据
```javascript
created() {
  // 不设置过期时间
  this.$cache.save('token', 123456)
  // 设置过期时间
  this.$cache.save('short_message', 'message info', {
    expire: Date.now() + 1000 * 10, // 存储 10s
    expire: '2020-03-26 18:00:00', // 六点过期
    expire: new Date(2021, 0) // 2021年1月过期
  })
}
```

#### 获取数据
```javascript
created() {
  const token = this.$cache.load('token')
  console.log(token) // 123456
}
```

#### 移除数据
```javascript
created() {
  this.$cache.remove('token')
}
```

#### 判断是否存在某个 `key`
```javascript
created() {
  const has = this.$cache.includes('token')
  console.log(has) // false
}
```

## 请求封装(Axios)

#### 引入

通常在`Vue`项目中，我们习惯在`src/api`文件夹中完成对接口的初始化，所以`Axios`的初始化应该处于`src/api/index.js`中，其他接口以业务形式存在于`api`文件夹中并调用`index.js`完成接口请求

```javascript
// src/api/index.js
import { Request } from '@qmxt/toolset'

const service = new Request()
export default service.getInstance()
```

当然这种形式只是最基本的引用形式，如果这样设置的话，框架会抛出未设置 `base` 根路由的错误，那么我们需要在 `new Request()` 时候传递众多参数来完成对 `Axios` 的设置

下面是`Request Options`的定义

```typescript
interface RequestOptions extends AxiosRequestConfig {
  namespace?: string
  timeout?: number
  successCode?: number
  base?: string | GenerateBase
  headers?: object | GenerateHeader
  partHeaders?: GeneratePartHeader
  handleAccessDenied?: HandleAccessDenied
  handleResponseError?: HandleResponseError
  defaultErrorMessage?: string
  ignoreAnyCatch?: string[]
}
```

- `namespace` 当前的子应用命名空间
- `timeout` 对于`Axios`超时机制的设置
- `successCode` 在接口请求中，我们默认 `code: 0` 的情况为正确返回，如果你的后台接口不是这样，那么应该设置该值
- `base` 接口请求的根路由，他可以是一个字符串，但通常情况下，他以函数形式存在，以区分不同环境下的不同根路由
```javascript
  // base 作为函数时候应该返回一个字符串，否则框架会抛出错误
  new Request({
    base(pageURL) {
      // pageURL 当前页面的路由
      if (pageURL.startsWith('http://www.a.com')) {
        return 'http://back.a.com'
      } else if (pageURL.startsWith('http://www.b.com')) {
        return 'http://back.b.com'
      }
      return 'http://localhost:7001'
    }
  })
  // or
  new Request({
    base: 'http://localhost:7001'
  })
```
- `partBase` 选项指定针对每一个特定Url的根域名进行设置，他是一个函数用来返回`String`
```javascript
  // base 作为函数时候应该返回一个字符串，否则框架会抛出错误
  new Request({
    partBase(pageURL, uri) {
      // pageURL 当前页面的路由
      if (pageURL.startsWith('http://www.a.com')) {
        if (uri.startsWith('/test')) {
          return 'http://back-test.a.com';
        }

        return 'http://back.a.com'
      } else if (pageURL.startsWith('http://www.b.com')) {
        return 'http://back.b.com'
      }
      return 'http://localhost:7001'
    }
  })

```
- `headers` 选项指定在请求路由中携带的头部信息，他可以是一个`Object`，也可以是一个函数用来返回`Object`
```javascript
  // headers 函数必须返回一个 Object
  new Request({
    headers(baseURL) {
      // baseURL base设置的根路由
      switch (baseURL) {
        case 'http://back.a.com':
          return { 'token': '123456' }
        case 'http://back.b.com':
          return { 'b_token': '789012' }
      }

      return {}
    }
  })
  // or
  new Request({
    headers: {
      token: cache.load('token')
    }
  })
```
- `partHeaders` 对特定的路由我们需要传递特定的头部信息，`partHeaders`接收的是一个函数并返回`Object`
```javascript
  // headers 函数必须返回一个 Object
  new Request({
    partHeaders(uri) {
      // uri 当前请求路由，不含 baseURL
      if (uri.startsWith('/gcard')) {
        return {
          'ex_info': '666666',
        }
      }

      return {}
    }
  })
```

- `handleAccessDenied` 捕获请求被拒绝的处理函数，他是一个`Object`, 用于指定被拒绝的`statusCode`和处理函数`handler`
```javascript
  new Request({
    handleAccessDenied: {
      statusCode: [401, 422], // 被拒绝状态默认为 401
      handler(statusCode, message, response) {
        // statusCode 响应状态
        // message 响应信息
        // response Axios的完整响应体

        Toast.show('登录过期，请重新登录')
      }
    }
  })
```

- `handleResponseError` 任何 `code` 的值不是 `successCode` 的响应信息都会进入到该函数做处理，你可以设置处理函数 `handler` 和响应值忽略数组 `codeIgnore`
```javascript
  new Request({
    handleResponseError: {
      codeIgnore: [10086, 77895], // 如果返回的 code 值等于设置的忽略值，那么该接口调用就会走正常的回调流程
      handler(code, message, response) {
        // code 返回的状态
        // message 响应信息
        // response Axios的完整响应体

        Toast.show('接口发生错误，请稍后再试: ' + message)
      }
    }
  })
```

- `defaultErrorMessage` 默认的响应错误信息，如果接口响应信息中解读不到任何的错误信息，那么就会被赋予该错误信息，默认为 `Network Error`
- `ignoreAnyCatch` 如果你不想对某些路由做处理，需要直接返回响应信息，那么他就应该被设置在该忽略数组中
```javascript
  new Request({
    ignoreAnyCatch: [
      '/gcard/ignore/api1',
      '/gcard/ignore/api2',
      '/gcard/ignore/api3',
    ]
  })
```

#### 使用

假设我们现在存在一个 `User` 业务来处理用户相关的业务逻辑，那么他的接口文件应该定义在 `src/api/user.js` 中，额外的配置请参考 [Axios](https://github.com/axios/axios)
```javascript
// src/api/user/js
import request from './index.js'
import { object2Param } from '@qmxt/toolset'

// 登录业务
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: data
  })
}

// 获得用户信息
export function info(data) {
  return request({
    url: `/api/user/info?${object2Param(data)}`,
    method: 'get',
  })
}

// 我们还可以在任何请求 `request` 的地方对当前的请求做更特殊的处理
export function uploadAvatar(data) {
  return request({
    url: '/api/user/avatar',
    method: 'post',
    data,
    timeout: 1000 * 60 * 60, // 我们需要更长时间来做上传，所以不能让接口超时
    onUploadProgress: ({ loaded, total }) => {
      // 我们还可以获得上传进度
      console.log('上传进度为', Number((loaded / total * 100).toFixed(2)))
    }
  })
}
```

在 `Vue` 组件或者页面中如下使用
```javascript
import { login } from '@/api/user'

export default {
  created() {
    login({
      username: 'TaroXin',
      password: Base64('123456'),
    }).then(res => {
      let { data, code } = res
      Toast.show('登录成功', data.username)
    })
  }
}

```

## 上传封装(Uploader)

上传封装函数是对`qmxt`内部上传接口的二次封装，采用了动态切换的模式进行`CDN`缓存管理

#### 引入
```javascript
// src/App.vue
import { Uploader } from '@qmxt/toolset'

// 初始化上传函数
Uploader.init()
```

#### 使用

在组件上传中使用

```javascript
// src/components/uploader.vue

import { Uploader } from '@qmxt/toolset'
export default {
  methods: {
    upload() {
      Uploader.upload({
        file: file,
        type: 1, // 1 图片 2 视频 3 其他
        filename: '文件名称', // 文件名称需要自己生成，不能包含中文
      }).then(url => {
        console.log('上传后的地址', url)

        // 获得缩略图
        Uploader.getCompressImage(url, 100) // 第二个参数代表需要缩略图的宽度
      })
    }
  }
}
```

<!-- #### 获取图片缩略图

该方法可针对服务器动态切换的`CDN`图片进行对应的压缩处理，动态适配网宿云、阿里云、七牛云三家`CDN`平台

```javascript
// 传入图片的url，和所需图片的宽度即可
Uploader.getCompressImage(url, 100)
``` -->
