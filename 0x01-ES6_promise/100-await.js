import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const values = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: values[0],
      user: values[1],
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
