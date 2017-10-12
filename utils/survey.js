import cal from 'calculation'
import * as hs from 'hellosleep'

export class Survey
{
  constructor(meta) {
    this.meta = meta;
    this.qmap = {};
    this.qlist = [];
    this.answers = {};
    this.availables = new Set();
    console.log(this.availables)

    let idx = 0;
    for (let group of this.meta.data) {
      for (let question of group.data) {
        this.qmap[question.name] = {group, question};
        this.qlist[idx] = question.name;
        idx++;
      }
    }
    this.qcount = idx;
    this.buildAvailables();
  }
  
  get groups() {
    return this.meta.data;
  }

  buildAvailables() {
    for (let g of this.meta.data) {
      for (let q of g.data) {
        let dep = q.depends || null;
        let valid = (!dep || (this.availables.has(dep.question) && this.answers[dep.question] == dep.value))
        if (valid) {
          this.availables.add(q.name);
        } else {
          this.availables.delete(q.name)
        }
      }
    }
  }

  setAnswer(name, answer) {
    this.answers[name] = answer
    this.buildAvailables()
  }

  getAnswer(name) {
    return this.answers[name]|| null
  }

  getQuestionByIndex(idx) {
    return this.qmap[this.qlist[idx]]
  }

  getQuestionByName(name) {
    return this.qmap[name]
  }

  canEvaluate() {
    for (let ent of this.availables.entries()) {
      if (this.answers[ent[0]] === undefined) {
        console.log(ent[0])
        console.log(false)
        return false;
      }
    }
    console.log(true)
    return true;
  }
}

export class Report
{
  constructor(survey) {
    this.survey = survey
    this.tags = []
  }

  calculateTags() {
    this.tags = []
    for (const tag of this.survey.meta.tags) {
      const func = tag.calc.func || null
      if (func) {
        const params = tag.calc.input.map(name => this.survey.answers[name])
        if (cal[func](...params)) {
          this.tags.push(tag)
        }
      } else {
        if (this.survey.answers[tag.calc.question] == tag.calc.value) {
          this.tags.push(tag)
        }
      }
    }
  }
}

export function getSurvey(cb) {
  const success = cb.success,
        fail = cb.fail
  hs.getEvaluationData({
    success: (evalData) => {
      let survey = new Survey(evalData)
      typeof success == 'function' && success(survey)
    },
    fail: (err) => { typeof fail == 'function' && fail(err) }
  })
}
