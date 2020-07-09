require('dotenv').config()
module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    access_key: process.env.ACCESS_KEY,
    ga_tracking_id: process.env.GA_TRACKING_ID,
  },
}
