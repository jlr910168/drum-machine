const fs = require('fs');
const { resolve } = require('path');

const cur = resolve('./');
const banksFile = resolve(cur, './src/sound-banks.json');
const buttons = ['q', 'w' ,'e' ,'a' ,'s' ,'d' ,'z' ,'x' ,'c'];
const publicBanksDir = '/static/media/sounds';
const ext = /\.(mp3|wav|ogg)$/;

const audioDir = resolve(cur, 'public/static/media/sounds/');
const bankNames = fs.readdirSync(audioDir);
const banks = bankNames.map(bankName => {
  const bankDir = resolve(audioDir, bankName);
  const audiop = name => name.match(ext);
  const audios = fs.readdirSync(bankDir).filter(audiop);
  const pads = audios.map((name, i) => ({
    button: buttons[i],
    audioName: name.replace(ext, ''),
    src: `${publicBanksDir}/${bankName}/${name}`,
  }));
  return {
    name: bankName,
    pads,
  }
});
const banksJson = JSON.stringify(banks, null, 2);
fs.writeFileSync(banksFile, banksJson);
