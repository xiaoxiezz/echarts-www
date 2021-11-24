const path = require('path');
const config = require('./common');

config.host = '/echarts4';

config.cdnPayRootMap = {
    // Expensive!!! use it carefully.
    // zh: 'https://echarts-www.cdn.bcebos.com', // origin: 'https://echarts-www.bj.bcebos.com'
    // zh: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site',
    // en: 'https://echarts.apache.org'
    zh: '/echarts4',
    en: '/echarts4'
};
config.cdnFreeRootMap = {
    // 'echarts.cdn.apache.org' have been configured for zh (?)
    // zh: 'https://echarts.cdn.apache.org',
    // zh: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site',
    // en: 'https://echarts.apache.org'
    zh: '/echarts4',
    en: '/echarts4'
};
config.galleryPath = '/echarts4/examples/';
config.releaseDestDir = path.resolve(__dirname, '../../echarts-website');

module.exports = config;
