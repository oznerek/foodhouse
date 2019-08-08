import axios from 'axios';

const keys = [
  "462b1cc8d4f2730081462fbc65136320",
  '7048fc447970b66d4d7a70af763e73a0',
  'cdb1bee69e50f50a36e00573c5fd2583',
  '24aba1e4bfff4ef64de723eb125661fb', 
  'dd9d1c6c2cdb1264a57ae733b344a384',
  'c201be7ece9f1ed69b2f1d7408eaab6b', 
  '3f7e9fab9d1ea9a771b4222a869f0d0a',
  'c1f77aaf74ca264b6264e2959a45c099',
  '36e7d78f8b66fd99aba20afd963846f8',
];

let x = parseInt(Math.random() *9)

const key = keys[x];

export default axios.create({
  baseURL: `https://www.food2fork.com/api/`,
  params: {
      key: key
  }
});
