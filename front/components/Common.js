export const testEmail = (email) => {
  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = regEmail.test(String(email));
  return result;
};

export const textPassword = (password) => {
  const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const result = regPassword.test(String(password));
  return result;
};

export const timeFormat = (time) => {
  const timestamp = time;
  const hours = Math.floor(timestamp / 60 / 60);
  let minutes = Math.floor(timestamp / 60) - (hours * 60);
  let seconds = Math.ceil(timestamp % 60);
  let formatted = '';

  if (minutes < 10) { minutes = `0${String(minutes)}`; }
  if (seconds < 10) { seconds = `0${String(seconds)}`; }

  if (hours) {
    formatted = `${hours}:${minutes}:${seconds}`;
  } else {
    formatted = `${minutes}:${seconds}`;
  }
  return formatted;
};
