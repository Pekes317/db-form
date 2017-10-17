import * as React from 'react';

import { MessageProps } from './MessageProps.model';
require('./Message.module.scss');

const Message = ({
  text,
  message,
}: MessageProps) => (
    <div>
      <h1>{text}</h1>
      <div>{message}</div>
    </div>
  );

export default Message;