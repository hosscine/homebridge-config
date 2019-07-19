# homebridge-config

This is for deploying config.json to my homebridge-nature-remo.

## usage

```bash
cd ~/.homebridge
git clone https://github.com/hosscine/homebridge-config.git
cd homebridge-config
mv sample.env.json .env.json
vim .env.json
npm i
npm run start
```

Edit .env.json according to your nature-remo environment.

```json
{
  "username": "1A:2B:3C:D4:E5:F6",
  "port": 51234,
  "pin": "012-34-567"
}
```

```bash
.homebridge                 <- 1. git clone
├── accessories
│   └── cachedAccessories
├── config.json             <- 4. then config.json generated here
├── homebridge-config       <- 3. cd here && npm i && npm run start
│   ├── build
│   ├── config.json
│   ├── gulpfile.js
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   └── sample.env.json     <- 2. mv sample.env.json .env.json && edit it
└── persist
    ├── AccessoryInfo.B827EBD5E529.json
    └── IdentifierCache.B827EBD5E529.json
```