import {CallType, DrillDownType, ResponseType, SurveyType} from './Enums';
import DateFormatter from '../utils/DateFormatter';

const time = new DateFormatter();
export const Day1Survey = [{
  id: 0,
  call: {
    type: CallType.Question,
    content: `Good morning! You\'ve started at ${time.getTime()}.\n**How are you feeling today?**`
  },
  response: {
    type: ResponseType.FaceMood
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 1,
  type: SurveyType.Recovery,
  call: {
    type: CallType.Question,
    content: 'Thanks for letting me know! \n**How many hours of sleep did you get last night?**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'More than 8',
      '6-8 hours',
      '4-6 hours',
      '2-4 hours',
      '0-2 hours'
    ]
  },
  drillDown: {
    type: DrillDownType.Negative,
    content: 'Based on your previous data, you have been having trouble sleeping recently. Can you please tell us why?' 
  },
  drillDownResponse: {
    type: ResponseType.MultipleSelection,
    choices: [
      'I could not breathe comfortably',
      'I had problems falling asleep',
      'The room temperature was not right', 
      'The room was too noisy', 
      'The bed was uncomfortable',
      'I was not feeling well',
      'I am feeling very stressed in this period',
      'Other'
    ]
  }
}, {
  id: 2,
  type: SurveyType.JobResources,
  call: {
    type: CallType.Question,
    content: 'Yesterday at work... **I knew exactly what was expected of me.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]
  },
  drillDown: {
    type: DrillDownType.Positive,
    content: 'My supervisor(s) and I have **meaningful conversations on a regular basis.**' 
  },
  drillDownResponse: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]
  }
}, {
  id: 3,
  type: SurveyType.JobDemands,
  call: {
    type: CallType.Question,
    content: 'Yesterday at work... **I was under time pressure to finish my tasks.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 4,
  type: SurveyType.WorkBehaviours,
  call: {
    type: CallType.Question,
    content: 'Yesterday at work... **I completed my core tasks well.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [  
      'True',
      'False'
    ]
  },
  drillDown: {
    type: DrillDownType.Negative,
    content: 'Please choose the options below that apply to you.'
  },
  drillDownResponse: {
    type: ResponseType.MultipleSelection,
    choices: [
      'Yesterday, the amount of tasks I had to carry out did not allow me to care about health and safety.',
      'Yesterday, I was too fatigued to care about health and safety.'
    ]      
  }
}, {
  id: 5,
  type: SurveyType.PersonalBehaviours,
  call: {
    type: CallType.Question,
    content: 'Right now... **I am confident I can carry out my core tasks well.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]  
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 6,
  type: SurveyType.Engagement,
  call: {
    type: CallType.Question,
    content: 'Right now... **I am proud of the work that I do.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]  
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 7,
  type: SurveyType.Affect,
  call: {
    type: CallType.Question,
    content: 'Right now... **I feel alert and awake.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]  
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 8,
  call: {
    type: CallType.Question,
    content: 'Do you have **any other comments** you would like to make?'
  },
  response: {
    type: ResponseType.TextEntry
  },
  drillDown: {
    type: DrillDownType.None,
    content: ''  
  }
}, {
  id: 9,
  call: {
    type: CallType.Question,
    content: 'Thanks for letting me know! I will see you next time!'
  },
  response: {
    type: ResponseType.None
  },
  drillDown: {
    type: DrillDownType.None,
    content: ''    
  }
}];

export const Day2Survey = [{
  id: 0,
  call: {
    type: CallType.Question,
    content: `Good morning! You\'ve started at ${time.getTime()}.\n**How are you feeling today?**`
  },
  response: {
    type: ResponseType.FaceMood
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 1,
  type: SurveyType.Recovery,
  call: {
    type: CallType.Question,
    content: 'Thanks for letting me know! \n**What was the quality of your sleep last night?**'
  },
  response: {
    type: ResponseType.FaceMood
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 2,
  type: SurveyType.JobResources,
  call: {
    type: CallType.Question,
    content: 'Yesterday at work... **I felt like I could decide for myself how to do my work.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 3,
  type: SurveyType.JobDemands,
  call: {
    type: CallType.Question,
    content: 'Yesterday at work... **The amount of work I was expected to do was great.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 4,
  type: SurveyType.WorkBehaviours,
  call: {
    type: CallType.Question,
    content: 'Yesterday at work... **I adapted well to changes in my core tasks.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [  
      'True',
      'False'
    ]
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 5,
  type: SurveyType.PersonalBehaviours,
  call: {
    type: CallType.Question,
    content: 'Right now... **I would feel confident analyzing a long-term problem to find a solution**.'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]  
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 6,
  type: SurveyType.Engagement,
  call: {
    type: CallType.Question,
    content: 'Right now... **My work is meaningful to me.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]  
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 7,
  type: SurveyType.Affect,
  call: {
    type: CallType.Question,
    content: 'Right now... **I feel enthusiastic.**'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      'True',
      'False'
    ]  
  },
  drillDown: {
    type: DrillDownType.None
  }
}, {
  id: 8,
  call: {
    type: CallType.Question,
    content: 'Do you have **any other comments** you would like to make?'
  },
  response: {
    type: ResponseType.TextEntry
  },
  drillDown: {
    type: DrillDownType.None,
    content: ''  
  }
}, {
  id: 9,
  call: {
    type: CallType.Question,
    content: 'Thanks for letting me know! I will see you next time!'
  },
  response: {
    type: ResponseType.None
  },
  drillDown: {
    type: DrillDownType.None,
    content: ''    
  }
}];

export const NewDay1Survey = [{
  id: 0,
  call: {
    type: CallType.Question,
    content: 'Were you clear about your duties and responsibilities?'
  },
  response: {
    type: ResponseType.MultipleChoice,
    choices: [
      '1\r\nNot at all',
      '2',
      '3',
      '4',
      '5\r\nVery'
    ]
  },
  drillDown: {
    type: DrillDownType.None,
    content: ''  
  }
}];
