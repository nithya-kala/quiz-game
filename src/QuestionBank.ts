export class QuestionBank {
  private url: string
  private questions = new Map<string, string>()
  private shownSet = new Set<string>()

  constructor(apiUrl: string) {
    this.url = apiUrl
  }

  private async fetchMore() {
    const res = await fetch(this.url)
    const json = await res.json()

    for (const { question, answerSha1 } of json.questions) {
      this.questions.set(question, answerSha1)
    }
  }

  public async next(): Promise<[string, string]> {
    console.log('next')

    while (true) {
      for (const [question, answerSha] of this.questions.entries()) {
        if (!this.shownSet.has(question)) {
          this.shownSet.add(question)
          return [question, answerSha]
        }
      }
      // fetch more and loop
      await this.fetchMore()
    }
  }

  public reset() {
    this.questions.clear()
    this.shownSet.clear()
  }
}
