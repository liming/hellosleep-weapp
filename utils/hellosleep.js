import {testData} from 'data/evaluation'
import {dumb} from 'util'

const URL = 'xxxx'

export function getEvaluationData(cb) {
  let success = cb.success || dumb,
    fail = cb.fail || dumb;
  
  setTimeout(
    () => {success(testData)},
    500
  )
}
