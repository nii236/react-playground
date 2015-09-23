import Actions from '../actions/Actions';
import Logger from '../utils/Logger';
import {Day1Survey as Survey} from '../constants/Survey';

const resolveFetchSurveyPromiseTimeout = (resolve, reject) => {
  const fetchSuccess = true;
  if (fetchSuccess) {
    resolve(Survey);
  } else {
    reject('Fetch survey failed');
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
        loading: Actions.fetchSurveyInProgress,
        success: Actions.fetchSurveySuccess,
        error: Actions.fetchSurveyFailed
      };
    }
  };
};

export default SurveySource;
