import app from './src/app.js'
import { serverUpMessege } from './src/utils/styleMsgs.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  serverUpMessege(port);
});