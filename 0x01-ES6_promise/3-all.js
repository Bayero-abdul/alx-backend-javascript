import {uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const arr = [];
  uploadPhoto().then((res) => {
    arr.push(res.body);
    return createUser();
  })
  .then((res) => {
    arr.push(res.firstName);
    arr.push(res.lastName);
    console.log(arr.join(" "));
  })
}