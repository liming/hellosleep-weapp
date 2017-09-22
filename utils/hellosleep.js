import {testData} from 'data/evaluation'
import {dumb} from 'util'

const URL = 'xxxx'

export function getEvaluationData(actions) {
  let success = actions.success || dumb,
    fail = actions.fail || dumb;
  
  setTimeout(
    () => {success(testData)},
    1000
  )
}
