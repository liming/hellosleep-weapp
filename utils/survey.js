import cal from 'calculation'

export class Survey
{
  constructor(meta) {
    this.meta = meta;
    this.answers = {};

    this.count = this.groups.map(group => group.data.length)
                            .reduce((sum, n) => {return sum + n});
    this.reset()
  }

  reset() {
    this.trace = [];
    this.currentQid = 1; 
  }

  get groups() {
    return this.meta.data
  }

  get current() {
    return this.getQuestion(this.currentQid)
  }

  get currentGroup() {
    return this.current[0] || null
  }

  get currentQuestion() {
    return this.current[1] || null
  }

  setAnswer(answer) {
    this.answers[this.currentQuestion.name] = answer
  }

  getAnswer(question) {
    return this.answers[question.name] || null
  }

  getQuestion(id) {
    if (id <= 0) return null

    let sum = 0;
    for (let group of this.groups) {
      let nextSum = sum + group.data.length
      if (id <= nextSum) {
        return [group, group.data[id - sum - 1]]
      }
      else {
        sum = nextSum
      }
    }

    return null
  }

  goNext() {
    console.log(this.currentQid)
    console.log(this.count)
    if (this.currentQid >= this.count) {
      return false;
    }

    this.currentQid++;
    return true;
  }

  goNextAvailable() {
    console.log(this.currentQid)
    this.trace.push(this.currentQid);
    console.log(this.trace)
    while (this.goNext()) {
      if (this.checkDependence(this.currentQuestion)) {
        console.log("goNextAvailabe: " + this.currentQid)
        return true;
      }
    }
    console.log("No more available questions")
    return false;
  }

  goPreviousInTrace() {
    let prevId = this.trace.pop() || null;
    if (prevId && prevId == this.currentQid) {
      prevId = this.trace.pop() || null;
    }

    if (prevId) {
      this.currentQid = prevId;
      return true
    } else {
      return false
    }
  }

  checkDependence(question) {
    let dep = question.depends || null;

    if (dep && (this.answers[dep.question] != dep.value)) return false
    return true
  }

  getQuestionsInTrace() {
    return this.trace.map(id => this.getQuestion(id)[1])
  }
}

export class Report
{
  constructor(survey) {
    this.survey = survey
    this.tags = []
  }

  calculateTags() {
    for (const tag of this.survey.meta.tags) {
      const func = tag.calc.func || null
      if (func) {
        const params = tag.calc.input.map(name => this.survey.answers[name])
        console.log(cal)
        if (cal[func](...params)) {
          console.log(tag.text)
          this.tags.push(tag)
        }
      } else {
        if (this.survey.answers[tag.calc.question] == tag.value) {
          console.log(tag.text)
          this.tags.push(tag)
        }
      }
    }
  }
}
