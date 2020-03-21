import { message } from 'antd';

const showMessageNetError = error => {
  if (error.response.status === 404) {
    message.error('Not found requests');
  } else if (error.response.status === 403) {
    message.error('Forbidden requests');
  } else if (error.response.status === 401) {
    message.error('Unauthorized requests');
  } else {
    message.error('Something went wrong');
  }
};

export default showMessageNetError;
