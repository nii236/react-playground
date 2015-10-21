import Actions from 'app/actions/Actions';
import Logger from 'app/utils/Logger';
import {AsyncData} from 'app/constants/AsyncData';

const resolveFetchAsyncPromiseTimeout = (resolve, reject) => {
  const fetchSuccess = true;
  if (fetchSuccess) {
    resolve(AsyncData);
  } else {
    reject('Fetch async data failed');
  }
};

const AsyncSource = () => {
  return {
    fetchAsync() {
      return {
        remote() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {resolveFetchAsyncPromiseTimeout(resolve, reject);}, 500);
          });
        },
        local() {
          return null;
        },
        loading: Actions.fetchAsyncInProgress,
        success: Actions.fetchAsyncSuccess,
        error: Actions.fetchAsyncFailed
      };
    }
  };
};

export default AsyncSource;
