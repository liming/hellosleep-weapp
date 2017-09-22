export class Survey
{
  constructor(qdata) {
    this.qdata = qdata;
    this.reset()
    this.answers = {};
  }

  get groups() {
    return this.qdata.data
  }

  get current() {
    return this.getQuestion(this.csr)
  }

  get currentGroup() {
    return this.current[0] || null
  }

  get currentQuestion() {
    return this.current[1] || null
  }

  reset() {
    this.answered = []
    this.csr = [0, 0]
  }

  setAnswer(answer) {
    this.answers[this.currentQuestion.name] = answer
  }

  getAnswer(question) {
    return this.answers[question.name] || null
  }

  getQuestion(idx) {
    let [gIdx, qIdx] = idx
    let group = this.groups[gIdx] || null
    if (group) {
      let question = group.data[qIdx] || null
      return [group, question]
    } else {
      return [null, null]
    }
  }

  moveOn() {
    if (!this.csr) return

    let [gIdx, qIdx] = this.csr
    let group = this.groups[gIdx]
    if (qIdx == group.data.length - 1) {
      if (gIdx == this.groups.length - 1) {
        this.csr = null
        return
      }
      gIdx += 1;
      qIdx = 0;
    } else {
      qIdx += 1;
    }
    this.csr = [gIdx, qIdx]
  }

  next() {
    this.answered.push(this.csr)
    this.moveOn()
    while (this.csr) {
      const [g, q] = this.current
      if (this.checkDependence(q)) {
        return [g, q]
      } else {
        this.moveOn()
      }
    }
    return [null, null]
  }

  previous() {
    this.csr = this.answered.pop() || [0, 0]
    return this.current
  }

  checkDependence(question) {
    let dep = question.depends || null;

    if (dep && (this.answers[dep.question] != dep.value)) return false
    return true
  }
}
