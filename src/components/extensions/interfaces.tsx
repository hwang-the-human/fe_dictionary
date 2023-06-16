export interface ICard {
  initial_form: string
  synonyms: string[]
  pronunciation: string
  forms: string[]
  usage_examples: IUsage_example[]
  common_phrases: ICommon_phrase[]
}

export interface IForm {
  initial_form: string
  form_name: string
}

export interface IUsage_example {
  usage_example_id: string
  example: string
  part_of_speech: string
}

export interface ICommon_phrase {
  common_phrase_id: number
  phrase: string
  meaning: string
}
