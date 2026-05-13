var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/iptv/index.js
var iptv_exports = {};
__export(iptv_exports, {
  getStreams: () => getStreams
});
module.exports = __toCommonJS(iptv_exports);

// src/iptv/channels.js
var CHANNELS = [
  {
    id: "iptv:nick_us",
    name: "Nickelodeon",
    poster: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/nickelodeon-us.png",
    url: "http://23.237.104.106:8080/USA_NICKELODEON/index.m3u8"
  },
  {
    id: "iptv:as_east",
    name: "Adult Swim East",
    poster: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/canada/adult-swim-ca.png",
    url: "https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8"
  },
  {
    id: "iptv:as_west",
    name: "Adult Swim West",
    poster: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/canada/adult-swim-ca.png",
    url: "https://turnerlive.warnermediacdn.com/hls/live/2023185/aswest/noslate/VIDEO_1_5128000.m3u8"
  },
  {
    id: "iptv:cn_us",
    name: "Cartoon Network",
    poster: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/cartoon-network-us.png",
    url: "http://23.237.104.106:8080/USA_CARTOON_NETWORK/index.m3u8"
  },
  {
    id: "iptv:disney_us",
    name: "Disney Channel",
    poster: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/disney-channel-us.png",
    url: "http://89.105.221.127/Disney/index.m3u8token=test"
  },
  {
    id: "iptv:disney_xd",
    name: "Disney XD",
    poster: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/disney-xd-us.png",
    url: "http://23.237.104.106:8080/USA_DISNEY_XD/index.m3u8"
  },
  {
    id: "iptv:nicktoons",
    name: "Nicktoons",
    poster: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/nickelodeon-us.png",
    url: "http://212.102.60.231/NICKTOONS/index.m3u8"
  }
];

// src/iptv/index.js
function getStreams(id, mediaType, season, episode) {
  return __async(this, null, function* () {
    const channel = CHANNELS.find((c) => c.id === id);
    if (!channel) {
      return [];
    }
    return [
      {
        name: "IPTV Plugin",
        title: `${channel.name} (Live)`,
        url: channel.url,
        quality: "HD",
        isDirect: true,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      }
    ];
  });
}
module.exports = { getStreams };
