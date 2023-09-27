import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const arr = [];
      for (const result of results) {
        if (result.status === 'fulfilled') {
          arr.push({ status: result.status, value: result.value });
        } else {
          arr.push({
            status: result.status,
            value: `Error: ${fileName} cannot  be processed`,
          });
        }
      }
      return arr;
    });
}
