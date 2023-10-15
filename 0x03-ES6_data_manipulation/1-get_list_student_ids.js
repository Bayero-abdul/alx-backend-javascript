export default function getListStudentIds(arrayOfObjs) {
  if (!(arrayOfObjs instanceof Array)) return [];

  return arrayOfObjs.map((student) => student.id);
}
