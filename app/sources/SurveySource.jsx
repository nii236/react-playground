import SurveyActions from '../actions/SurveyActions';
import Logger from '../utils/Logger';
import {Day1Survey as Survey} from '../constants/Survey.jsx';

const resolveFetchSurveyPromiseTimeout = (resolve, reject) => {
  const fetchSuccess = true;
  if (fetchSuccess) {
    resolve(Survey);
  } else {
    reject('Fetch survey failed');
  }
};

const resolveSubmitSurveyPromiseTimeout = (resolve, reject, ChatStore, surveyID) => {
  const submitSuccess = true;
  if (submitSuccess) {
    Logger.LogMessageAndObject('Send user response:', ChatStore.survey[surveyID]);
    // console.log('Send user response: ', ChatStore.survey[surveyID]);
  } else {
    reject('Submit survey failed');
  }
};

const SurveySource = () => {

  return {
    fetchSurvey() {
      return {
        remote() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {resolveFetchSurveyPromiseTimeout(resolve, reject);}, 500);
          });
        },
        local() {
          return null;
        },
        loading: SurveyActions.fetchSurveyInProgress,
        success: SurveyActions.fetchSurveySuccess,
        error: SurveyActions.fetchSurveyFailed
      };
    },
    submitSurvey() {
      return {
        remote(ChatStore, surveyID) {
          return new Promise((resolve, reject) => {
            setTimeout(()=>{resolveSubmitSurveyPromiseTimeout(resolve, reject, ChatStore, surveyID);}, 500);
          });
        },
        local() {
          return null;
        },
        loading: SurveyActions.submitSurveyInProgress,
        success: SurveyActions.submitSurveySuccess,
        error: SurveyActions.submitSurveyFailed
      };
    }
  };
};

export default SurveySource;
